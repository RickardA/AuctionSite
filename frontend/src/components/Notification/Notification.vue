<template>
     <v-menu
      v-model="menu"
      :close-on-content-click="true"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
        id="scroll-button"
        fab
        fixed
        bottom
        left
        @click="openNotification"
      ><v-badge v-if="numberOfBids > 0" top color="red">
          <span slot="badge">{{numberOfBids}}</span>
          <font-awesome-icon size="2x" :icon="['fas', 'bell']" />
        </v-badge>
        <font-awesome-icon v-if="numberOfBids === 0" size="2x" :icon="['fas', 'bell']" />
      </v-btn>
      </template>

      <v-card class="test">
        <v-list >
          <v-list-tile>
              <v-list-tile-title>Your notifications</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list class="list">
          <NotificationCard v-for="auction in auctionsForNotification" :key="auction.id" :auctionObject="auction"/>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false, message = ''">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
</template>

<script>
import NotificationCard from '../Notification/NotificationCard'
export default {
    name: 'notification',
    components:{
    NotificationCard
    },
     data:() => ({
      loaded: false,
        fav: true,
      menu: false,
      showList: true,
      choosenChat: null,
    }),
    computed:{
      auctionsForNotification(){
        return this.$store.getters.getAllBidsByBuyer;
      },
      numberOfBids(){
        return this.$store.getters.getNumberOfNotifications;
      }
    },
  methods:{
    openNotification(){
      this.menu = true;
    }
  },
  watch:{
    menu:async function(){
      if(this.menu === false){
        let arrayOfAuctionIDS = [];
        if(this.$store.getters.getAllBidsByBuyer !== null && this.$store.getters.getAllBidsByBuyer.length > 0){
          for(let auction of this.$store.getters.getAllBidsByBuyer) {
          arrayOfAuctionIDS.push(auction.itemID);
      }
      arrayOfAuctionIDS.unshift(this.$store.getters.getUserName);
      let response = await fetch("/api/bids/updatereadstatus", {
        method: "POST",
        body: JSON.stringify(arrayOfAuctionIDS),
        headers: { "Content-Type": "application/json"  }
      });
        this.$store.state.numberOfNotifications = 0;
      }
    }
    },
  },
  }
</script>

<style>
#scroll-button{
        margin-bottom: 50px;
    }
.list{
  height: 40vh;
  overflow-y:auto;
}
.test{
  width: 300px !important;
}
</style>
