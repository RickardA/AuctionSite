<template>
     <v-layout row>
    <v-flex xs10 sm2 offset-sm1 offset-xs1>
      <v-card>
        <v-img
          :src="imageSrc"
          height="200px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{title}}</div>
            <span class="grey--text">Current Bid: ${{currentBid}}</span><br>
            <span class="grey--text">Auction ends: {{date}}</span>
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
            {{text}}
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
      currentBid: 200,
      title:'View for sale',
        date: '2019-05-20 23:59',
        imageSrc:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        text:'Im a thing. But, like most politicians, he promised more than he could deliver. You wont have time for sleeping, soldier, not with all the bed making you',
    }),
    props: {
        auctionObject: Object,
    }
}
</script>

<style>

</style>


