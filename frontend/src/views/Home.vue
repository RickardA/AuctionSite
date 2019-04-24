<template>
  <div>
    <v-flex sm10 offset-sm1 offset-xs mt-2>
  <h1>Latest auctions</h1>
    <v-layout row wrap>
      <AuctionCard v-for="auction in threeLatestAuctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
    </v-layout>
    <h1>Time is running ouuuuut...</h1>
    <v-layout row wrap>
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
      threeLatestAuctions(){
        return this.$store.getters.getThreeLatestAuctions;
      },
      threeAuctionsNearDeadline(){
        return this.$store.getters.getThreeAuctionsNearDeadline;
      }
    },
    components: {
      AuctionCard
    }
  }
</script>
