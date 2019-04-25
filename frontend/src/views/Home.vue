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
       await this.$store.dispatch("getStartPageAuctions")
       for(let auction of this.$store.getters.getThreeLatestAuctions){
         this.threeLatestAuctions.push(this.auctions.find(s => s.itemID == auction.itemID))
       }
       for(let auction of this.$store.getters.getThreeAuctionsNearDeadline){
         this.threeAuctionsNearDeadline.push(this.auctions.find(s => s.itemID == auction.itemID))
       }
  }
  }
</script>
