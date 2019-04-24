<template>
    <div class="searchbar-and-filter">
        <v-flex md6 offset-md3 class="pr-2 pl-2">
            <v-layout row wrap>

                <v-text-field
                        label="Search"
                        class="my-input"
                        prepend-inner-icon="search"
                        solo
                        v-model="userInput"
                        @keyup.enter="goToSearch(userInput)"
                ></v-text-field>
                <v-btn @click="goToSearch(userInput)">GO!</v-btn>
            </v-layout>
        </v-flex>

        <v-flex md8 offset-md2>
            <v-layout row class="justify-center">
                <div class="categories">
                    <v-btn round color="primary">All categories</v-btn>
                    <v-btn round color="success">Arts and crafts</v-btn>
                    <v-btn round color="success">Clothes</v-btn>
                    <v-btn round color="success">Outdoors</v-btn>
                    <v-btn round color="success">Electronics</v-btn>
                    <v-btn round color="success">Other stuff</v-btn>
                </div>
            </v-layout>
        </v-flex>


    </div>
</template>

<script>
    export default {
        name: "SearchBarAndFilter",
        data() {
            return {
                userInput: '',
                toggle_one: 0
            }
        },
        methods:{
            goToSearch(searchTitle){
                this.$router.push('/auctions/search?title=' + searchTitle)
                    this.$store.dispatch('getFilteredAuctionsFromDB', this.getUrlQuery())
                
            },
            getUrlQuery() {
                let url = window.location.href;
                url = url.substr(url.lastIndexOf("="));
                url = url.replace("=", "");
                return url;
            },
        },
            mounted: function(){
            if(window.location.href.includes("search")){
                this.$store.dispatch('getFilteredAuctionsFromDB', this.getUrlQuery())
            }
            }

    }
</script>

<style scoped>

    .categories {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>