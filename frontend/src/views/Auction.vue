<template>
<div  v-if="loading">
   Loading...
</div>
<div v-else>
      <v-container class="container">
        <NewChat :auction="auction"/>
   <v-card>
      <div class="flex display-4">{{auction.title}}</div>
   <v-layout row wrap class="top-cards">
   <v-flex xs12 sm12 md7>
   <v-card v-bind:class="{ [`elevation-${8}`]: true } ">
      <v-carousel>
         <v-carousel-item
                 v-for="(auction,i) in auction.images"
                 :key="i"
                 :src="auction.imgURL"
         ></v-carousel-item>
      </v-carousel>
   </v-card>
   </v-flex>
   <v-flex xs12 sm12 md5>
   <v-card class="bid-card">
      <v-card-text>
         <p> Starting at: ${{auction.min_price}} </p>
         <p v-if="this.auction.bids.length > 0">Current bid: ${{auction.bids[auction.bids.length-1].amount}}</p>
         <p v-else>Current bid: $0</p>
         <p>Auction ends: {{auction.deadline}}</p>
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
<p>{{auction.description}}</p>
   </v-card-text>
</v-card>
   </v-flex>

</v-layout>

   </v-card>
   </v-container>
</div>
</template>

<script>
import Bid from "../components/Bid";
import NewChat from "../components/Chat/NewChat"
export default {
  name: "auction",
  components: {
    Bid,
    NewChat
  },
  data: () => ({
    choosenAuctionID: "",
    auction: null,
    loading: true,
  }),
  computed: {
  },
  methods: {
    async getAuction() {
      this.auction = await this.getChoosenAuction(
        this.$route.fullPath.split("?")[1]);
      this.loading = false;
    },
    async getChoosenAuction(auctionID){
      if (this.$store.getters.getAuctions === undefined || this.$store.getters.getAuctions.length === 1 || this.$store.getters.getAuctions.length === 0) {
        let recievedAuction = await (await fetch('/api/auctions/specific?auctionIDS=' + auctionID)).json();
        await this.$store.commit('setAuctions',recievedAuction);
        return this.$store.getters.getAuctions.find(s => s.itemID == auctionID);
      } else {
        return this.$store.getters.getAuctions.find(s => s.itemID == auctionID);
      }
    }
  },
  created: function() {
    this.getAuction();
  },
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


