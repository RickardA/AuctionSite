<template>
<div  v-if="loading">
   Loading...
</div>
<div v-else>
   <div>this is just an exaample the id of the clicked auction is {{auction.itemID}}, title is {{auction.title}}</div>
   <v-card>
   <v-flex xs12 sm6 offset-sm1>
   <v-item>
   <v-card v-bind:class="{ [`elevation-${8}`]: true } ">
      <v-img
              :src="require('../assets/logo.png')"
              :aspect-ratio="16/9"
              class="my-5"
              contain
              height="35vh"
              width="90%"

      ></v-img>
   </v-card>
   </v-item>
      <v-item>
         <v-card v-bind:class="{ [`elevation-${8}`]: true } ">
            <v-img
                    :src="require('../assets/logo.png')"
                    :aspect-ratio="16/9"
                    class="my-5"
                    contain
                    height="35vh"
                    width="90%"


            ></v-img>
         </v-card>
      </v-item>
   </v-flex>
   </v-card>
</div>


</template>

<script>
export default {
    name:'auction',
    data: () => ( {
            choosenAuctionID: '',
            auction:null,
            loading:true,
    }),
    methods: {
    getUrlQuery() {
      this.urlQuery = {};
      let url = window.location.href;
      url = url.substr(url.lastIndexOf("?"));
      this.choosenAuctionID = url.replace("?", "");
      console.log(this.choosenAuctionID);
    },
    getAuction() {
     this.auction = this.$store.getters.getAuctions.find(this.isAuction);
     this.loading = false;
    },
    isAuction(auction) {
      return auction.itemID === this.choosenAuctionID;
    }
    },
    mounted: function() {
    this.getUrlQuery();
    this.getAuction();
  }
}
</script>

<style>

</style>


