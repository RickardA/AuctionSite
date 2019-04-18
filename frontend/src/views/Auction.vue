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
         <p>Highest bid: $500</p>
         <p>Auction ends in: 5 days 21 hours</p>
         <p>Number of bids: 51</p>
      
         
          <v-text-field
            label="Place bid"
            placeholder="$"
            solo
          ></v-text-field>
        
         <v-btn color="success">Place bid</v-btn>         
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


