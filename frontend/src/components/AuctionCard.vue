<template>
    <v-flex mt-2 xs-1 ml-1 mr-1>
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
            <span class="grey--text">Auction ends: {{auctionObject.deadline}}</span>
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
            {{auctionObject.description}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
</template>

<script>
export default {
    name:'AuctionCard',
     data: () => ({
      show: false,
    }),
    props: {
        auctionObject:null,
    }
}
</script>

<style>

</style>


