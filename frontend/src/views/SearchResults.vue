<template>
    <div>
    <SearchBarAndFilter/>
    <v-container justify-center="true"> 
    <h1>Search results</h1>
    <v-layout row justify-center wrap>
        <AuctionCard v-for="auction in filteredAuctions" v-bind:key="auction.itemID" :auctionObject="auction"></AuctionCard>
    </v-layout>
    </v-container>
    </div>
</template>

<script>
    import SearchBarAndFilter from "../components/SearchBarAndFilter";
    import AuctionCard from '../components/AuctionCard';

    export default {
        name: "SearchResults",
        computed:{
            filteredAuctions(){
                return this.$store.getters.getFilteredAuctions;
            }
        },
        components: {
            SearchBarAndFilter,
            AuctionCard,
        }
    }
</script>

<style scoped>

</style>