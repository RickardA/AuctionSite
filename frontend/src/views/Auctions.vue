<template>
    <v-flex sm10 offset-sm1 offset-xs mt-2>
        <h1>All Auctions</h1>
          <v-layout row wrap>
        <AuctionCard v-for="auction in auctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
          </v-layout>
          <v-btn
        fab
        fixed
        bottom
        right
        @click="scrollToTop"
      >
        <font-awesome-icon icon="arrow-up" />
      </v-btn>
  </v-flex>
</template>

<script>
import AuctionCard from '../components/AuctionCard';
export default {
    name:'Auctions',
    computed:{
    auctions(){
        return this.$store.getters.getAuctions;
    }
  },
  components:{
      AuctionCard,
  },
  methods:{
    scrollToTop(){
      window.scrollTo(top);
    }
  }
}
</script>

<style>

</style>


