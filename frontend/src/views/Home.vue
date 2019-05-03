<template>
  <div>
    <v-flex sm10 offset-sm1 offset-xs mt-2>
  <h1>Latest auctions</h1>
    <v-layout row justify-center wrap>
      <AuctionCard v-for="auction in threeLatestAuctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
    </v-layout>
    <h1>Time is running ouuuuut...</h1>
    <v-layout row justify-center wrap>
      <AuctionCard v-for="auction in threeAuctionsNearDeadline" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
    </v-layout>
    </v-flex>
  </div>




</template>

<script>
  import AuctionCard from '../components/AuctionCard'
  import Vue from 'vue'
  export default {
    name: "Home",
    computed:{
      auctions(){
        return this.$store.getters.getAuctions;
      }
    },
    data:()=> ({
      threeLatestAuctions: [],
      threeAuctionsNearDeadline: [],
    }),
    components: {
      AuctionCard
    },
     async created(){
       await this.getStartPageAuctions();
       for(let auction of this.$store.getters.getThreeLatestAuctions){
         this.threeLatestAuctions.push(this.auctions.find(s => s.itemID == auction.itemID))
       }
       for(let auction of this.$store.getters.getThreeAuctionsNearDeadline){
         this.threeAuctionsNearDeadline.push(this.auctions.find(s => s.itemID == auction.itemID))
       }
  },
  methods:{
    async getStartPageAuctions(){
      let threeAuctionsNearDeadline = await (await fetch('/api/auctions/threenearest')).json();
      this.$store.commit('setThreeAuctionsNearDeadline', threeAuctionsNearDeadline)
      let threeLatestAuctions = await (await fetch('/api/auctions/threelatest')).json();
      this.$store.commit('setThreeLatestAuctions', threeLatestAuctions)
      let temp = [];
      temp.push(...threeAuctionsNearDeadline)
      temp.push(...threeLatestAuctions);
      temp = Vue._.uniqBy(temp, 'itemID');
      await this.$store.commit('setAuctions',temp);
      await this.$store.dispatch('getBidsForAuction');
      await this.$store.dispatch('getImagesForAuction');
    }
  }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  h1{
    text-align: center;
    font-family: Cinzel;
  }

</style>
