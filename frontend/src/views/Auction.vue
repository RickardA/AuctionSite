<template>
<div  v-if="loading">
   Loading...
</div>
<div v-else>
   <div>this is just an exaample the id of the clicked auction is {{auction.itemID}}, title is {{auction.title}}</div>
      <v-container class="container">
   <v-card>
      <div class="flex display-4">{{auction.title}}</div>
   <v-layout row wrap class="top-cards">
   <v-flex xs4 sm6>
   <v-card v-bind:class="{ [`elevation-${8}`]: true } ">
      <v-img
              :src="require('../assets/logo.png')"
              :aspect-ratio="16/9"
              class="my-5"
              contain
              height="30vh"
              width="100%"

      ></v-img>
      
   </v-card>
   </v-flex>
   <v-flex xs4 sm6>
   <v-card class="bid-card">
      <v-card-text>
         <p v-if="this.auction.bids.length > 0">Highest bid: ${{auction.bids[0].amount}}</p>
         <p v-else>Highest bid: $0</p>
         <p>Auction ends in: 5 days 21 hours</p>
         <p>Number of bids: 51</p>
      
         <p>asd{{auction.title}}</p>
          <Bid :auctionObject="auction"/>    
      </v-card-text>
   </v-card>
   </v-flex>
   </v-layout>
   <div class="flex display-2">Object information</div>
   <v-layout row wrap>
   <v-flex xs12 sm12 >
      
<v-card class="item-information">
   <v-card-text>

<p>info</p>
<p>info</p>
<p>info</p>
<p>info</p>
<p>info</p>
<p>info</p>
<p>info</p>


      
   </v-card-text>
</v-card>
   </v-flex>

</v-layout>

   </v-card>
   </v-container>
</div>


</template>

<script>
import Bid from '../components/Bid'
export default {
    name:'auction',
    components:{
       Bid,
    },
    data: () => ( {
            choosenAuctionID: '',
            auction:null,
            loading:true,
    }),
    computed:{
      
    },
    methods: {
    getUrlQuery() {
      this.urlQuery = {};
      let url = window.location.href;
      url = url.substr(url.lastIndexOf("?"));
      this.choosenAuctionID = url.replace("?", "");
    },
    async getAuction() {
     this.auction = await this.$store.dispatch("getChoosenAuction",this.choosenAuctionID);
     await this.getBids();
     this.loading = false;
    },
    async getBids(){
        await this.$store.dispatch("updateAuction",this.auction.itemID);
        console.log(this.auction.bids);
      }
    },
    mounted: function() {
    this.getUrlQuery();
    this.getAuction();
  }
}
</script>

<style scoped>
.bid-card {
   margin: 50px 0 0 0;
   padding: 10px;
}

.flex {
   text-align: center;
   padding: 20px;
}

.top-cards {
   margin: 0 50px 0 50px;
}

.item-information {
      text-align: left;
   margin: 0 50px 50px 50px;
}




</style>


