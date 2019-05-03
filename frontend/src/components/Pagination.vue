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
        <h4>{{pageNumber}}/{{totalPages}}</h4>
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
            this.getAuctionsFromDB(this.$router.currentRoute.query.valueOf().p);
            this.pageNumber = parseInt(this.$router.currentRoute.query.valueOf().p);
            setTimeout(()=>{this.totalPages = this.$store.getters.getTotalAuctionPages}, 1000);
        },
        methods:{
            async getAuctionsFromDB(page){
                this.$store.commit('toggleDoneLoading',false)
                let auctions = await (await fetch('/api/auctions/?page='+(page-1)+'&size=3')).json();
                await this.$store.commit('setAuctions', auctions.content);
                await this.$store.commit('setTotalAuctionPages', auctions.totalPages)
                this.$store.commit('toggleDoneLoading',true)
            },
            goToPreviousPage(){
                if(this.pageNumber > 1){
                this.$router.push('/auctions/?p='+ --this.pageNumber)
                }
            },
            goToNextPage()
                {
                    if(this.pageNumber < this.totalPages){
                    this.$router.push('/auctions/?p=' + ++this.pageNumber)
                    }
                }
            },
            watch:{
                '$route' (to,from){
                    this.pageNumber = parseInt(this.$router.currentRoute.query.valueOf().p);
                    this.getAuctionsFromDB(this.pageNumber);
                }
            }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Cinzel');

    h4{
        font-family: Cinzel;
    }



</style>