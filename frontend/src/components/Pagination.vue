<template>
    <div class="text-xs-center">
        <v-btn
            :disabled="backDisabled"
            round
            @click="goToPreviousPage"
            >Previous</v-btn>
        <v-btn
            :disabled="nextPageDisabled"
            round
            @click="goToNextPage"
        >Next</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data: ()=>({
            pageNumber: 0,
            totalPages: 0,
        }),
        computed:{


            backDisabled() {
                return this.pageNumber > 1 ? false : true
            },

            nextPageDisabled(){
                return this.pageNumber < this.totalPages ? false : true
            }

        },
        methods:{
            goToPreviousPage(){
                this.pageNumber = parseInt(this.$router.currentRoute.query.valueOf().p);
                if(this.pageNumber > 1){
                this.$router.push('/auctions/?p='+ --this.pageNumber)
                this.$store.dispatch("getAuctionsFromDB", this.pageNumber)
                }
            },
            goToNextPage()
                {
                    this.totalPages = this.$store.getters.getTotalAuctionPages;
                    this.pageNumber = parseInt(this.$router.currentRoute.query.valueOf().p);
                    if(this.pageNumber < this.totalPages){
                    this.$router.push('/auctions/?p=' + ++this.pageNumber)
                    this.$store.dispatch("getAuctionsFromDB", this.pageNumber)
                    }
                }
            },
    }
</script>

<style scoped>

</style>