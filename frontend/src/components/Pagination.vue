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
        <p>{{pageNumber}}/{{totalPages}}</p>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data: ()=>({
            pageNumber: 1,
            totalPages: 4,
        }),
        computed:{
            backDisabled() {
                return this.pageNumber <= 1
            },
            nextPageDisabled(){
                return this.pageNumber >= this.totalPages
            }
        },
        created(){
            this.pageNumber = parseInt(this.$router.currentRoute.query.valueOf().p);
            setTimeout(()=>{this.totalPages = this.$store.getters.getTotalAuctionPages}, 1000);
            // this.totalPages = this.$store.getters.getTotalAuctionPages
        },
        methods:{
            goToPreviousPage(){
                if(this.pageNumber > 1){
                this.$router.push('/auctions/?p='+ --this.pageNumber)
                this.$store.dispatch("getAuctionsFromDB", this.pageNumber)
                }
            },
            goToNextPage()
                {
                    // this.totalPages = this.$store.getters.getTotalAuctionPages;
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