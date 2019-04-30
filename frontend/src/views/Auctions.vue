<template>
    <div>
    <SearchBarAndFilter/>
    <v-container justify-center="true" mt-2>
        <h1>All Auctions</h1>
          <v-layout row justify-center wrap>
        <AuctionCard v-for="auction in auctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
          </v-layout>
        <Pagination class="pt-3"/>
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
    </v-container>
    </div>
</template>

<script>
import AuctionCard from '../components/AuctionCard';
import SearchBarAndFilter from '../components/SearchBarAndFilter';
import Pagination from '../components/Pagination';

export default {
    name:'Auctions',
    computed:{
    auctions(){
        return this.$store.getters.getAuctions;
    }
  },
  components:{
      AuctionCard,
      SearchBarAndFilter,
      Pagination,
  },
  methods:{
    scrollToTop(){
      window.scrollTo(top);
    }
  },
  created(){
        this.$store.dispatch("getAuctionsFromDB", this.$router.currentRoute.query.valueOf().p);
  },
}
</script>

<style scoped>

    #scroll-button{
        margin-bottom: 50px;
    }
</style>


