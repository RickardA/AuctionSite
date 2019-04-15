<template>
     <v-layout row>
    <v-flex xs10 sm2 offset-sm1 offset-xs1>
      <v-card>
        <v-img
          :src="auctionObject.image"
          height="200px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{auctionObject.title}}</div>
            <span class="grey--text">Current Bid: ${{auctionObject.currentBid}}</span><br>
            <span class="grey--text">Auction ends: {{auctionObject.date}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
            <!-- Replace with bid component
          <v-text-field
            label="Amount"
            type="number"
          ></v-text-field>
          <v-btn flat color="purple">Place Bid</v-btn>
          !-->
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{auctionObject.text}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    name:'AuctionCard',
     data: () => ({
      show: false,
    }),
    props: {
        auctionObject: Object,
    }
}
</script>

<style>

</style>


