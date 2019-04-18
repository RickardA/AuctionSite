<template>
    <div id="content" class="">
    <SearchBarAndFilter/>
    <v-flex sm10 offset-sm1 offset-xs mt-2>
        <h1>All Auctions</h1>
          <v-layout row wrap>
        <AuctionCard v-for="auction in auctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
          </v-layout>
          <v-btn
        id="scroll-button"
        fab
        fixed
        bottom
        right
        @click="scrollToTop"
      >
        <font-awesome-icon icon="arrow-up" />
      </v-btn>
  </v-flex>
    </div>
</template>

<script>
import AuctionCard from '../components/AuctionCard';
import SearchBarAndFilter from '../components/SearchBarAndFilter';
export default {
    name:'Auctions',
    computed:{
    auctions(){
        return this.$store.dispatch("getAuctionsFromDB");
    }
  },
  components:{
      AuctionCard,
      SearchBarAndFilter
  },
  methods:{
    scrollToTop(){
      window.scrollTo(top);
    }
  }
}
</script>

<style scoped>

    #scroll-button{
        margin-bottom: 50px;
    }

    #content{
        margin-top: 12vh;
    }
</style>


