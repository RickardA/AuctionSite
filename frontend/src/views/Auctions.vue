<template>
    <div>
    <SearchBarAndFilter/>
    <v-container justify-center="true" class="pt-0">
        <h1>All Auctions</h1>
          <v-layout row justify-center wrap v-if="this.$store.getters.getDoneLoader">
        <AuctionCard v-for="auction in auctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
          </v-layout>
          <Pagination class="pt-3"/>
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
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Cinzel');
    h1{
        text-align: center;
        font-family: Cinzel;
    }
</style>


