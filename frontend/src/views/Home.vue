<template>
  <div>
  <h1>Latest auctions</h1>
    <v-layout row wrap>
      <AuctionCard v-for="auction in threeLatestAuctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
    </v-layout>
    <h1>Time is running ouuuuut...</h1>
    <v-layout row wrap>
      <AuctionCard v-for="auction in threeAuctionsNearDeadline" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
    </v-layout>
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
