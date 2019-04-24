<template>
    <v-flex mt-2 mr-2 sm3>
      <v-card>
        <div @click="routeToAuction" class="hover">
        <v-img
          :src="auctionObject.imageURL"
          height="200px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{auctionObject.title}}</div>
            <span  class="grey--text"> Starting at: ${{auctionObject.min_price}} </span><br>
            <span v-if="showBid" class="grey--text">Current Bid: ${{auctionObject.bids[0].amount}}</span>
            <span v-else class="grey--text">Current Bid: $0</span><br>
            <span class="grey--text">Auction ends: {{auctionObject.deadline}}</span>
          </div>
        </v-card-title>
        </div>
        <v-card-actions>
          <Bid :auctionObject="auctionObject" />
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{auctionObject.description}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
</template>

<script>
import Bid from './Bid'
export default {
    name:'AuctionCard',
    components:{
      Bid,
    },
     data: () => ({
      show: false,
      showBid: false
    }),
    props: {
        auctionObject:null,
    },
    methods:{
      routeToAuction(){
        this.$router.push('/auction?'+this.auctionObject.itemID);
      },
      async getBids(){
        await this.$store.dispatch("updateAuction",this.auctionObject.itemID);
        this.showBid = this.auctionObject.bids.length > 0 ? true:false;
      }
    },
    created(){
        this.getBids();
    }
}
</script>

<style>
.hover{
  cursor: pointer;
}
</style>


