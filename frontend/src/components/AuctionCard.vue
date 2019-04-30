<template>
    <v-flex mt-2 mr-2 sm3>
      <v-card>
        <div @click="routeToAuction" class="hover">
        <v-img
          :src="imageURL"
          height="200px"
          :lazy-src="require('../assets/loading.jpg')"
          transition="true"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{auctionObject.title}}</div>
            <span class="grey--text"> Starting at: ${{auctionObject.min_price}} </span><br>
            <span v-if="this.auctionObject.bids !== undefined" class="grey--text">Current Bid: ${{auctionObject.bids[0].amount}}</span>
            <span v-else class="grey--text">Current Bid: $0</span><br>
            <span class="grey--text">Auction ends: {{auctionObject.deadline}}</span>
          </div>
        </v-card-title>
        </div>
        <v-card-actions>
          <Bid :auctionObject="auctionObject" />
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up': 'keyboard_arrow_down'}}</v-icon>
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
    }),
    props: {
        auctionObject:null,
    },
  computed: {
      imageURL(){
        return this.auctionObject.hasOwnProperty("images") ? this.auctionObject.images[0].imgURL : ''
    }
  },
    methods:{
      routeToAuction(){
        this.$router.push('/auction?'+this.auctionObject.itemID);
      }
    },
  created(){
      console.log()
  }
}
</script>

<style>
.hover{
  cursor: pointer;
}
</style>


