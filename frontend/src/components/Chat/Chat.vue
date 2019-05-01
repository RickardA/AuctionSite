<template>
      <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
        id="scroll-button"
        fab
        fixed
        bottom
        right
        @click="openChat"
      >
        <font-awesome-icon size="2x" :icon="['fas', 'comments']" />
      </v-btn>
      </template>

      <v-card class="test">
        <v-list >
          <v-list-tile>
              <v-list-tile-title>Chat with a seller</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list class="list">
        <ChatList @setChoosenChat="setChoosenChat" v-if="showList"/>
        <ChatField :choosenChat="this.choosenChat" v-if="!showList"/>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat v-if="!showList" @click="showChats">Chats</v-btn>
          <v-btn flat @click="menu = false, message = ''">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
</template>

<script>
import ChatList from '../Chat/ChatList'
import ChatField from '../Chat/ChatField'
import Vue from 'vue'
export default {
    name: 'chat',
    components:{
      ChatList,
      ChatField
    },
    data:() => ({
      loaded: false,
        fav: true,
      menu: false,
      showList: true,
      choosenChat: null,
    }),
    created(){
      this.getUserChats();
    },
    methods:{
      async openChat(){
          this.menu = true;
      },
      async showChats(){
          this.showList = true;
      },
      setChoosenChat(choosenChat){
        this.choosenChat = choosenChat;
        this.showList = false;
      },
      async getUserChats(){
        await this.$store.dispatch('sleep',1000);
        let recievedChats = await (await fetch('/api/messages?userID=' + this.$store.getters.getUserName)).json();
        let groupedChats = Vue._.groupBy(recievedChats, 'itemID');
        this.$store.commit('setChats',groupedChats);
        let auctionsToGet = Object.keys(groupedChats);
        let recievedAuctions = await (await fetch('/api/auctions/specific?auctionIDS=' + auctionsToGet)).json();
        this.$store.commit('setAuctionsForChats',recievedAuctions);
        this.getChatImages();
    },
      async getChatImages(){
          let arrayOfAuctionIDS = [];
          if(this.$store.getters.getAuctionsForChats.length > 0){
          for(let auction of this.$store.getters.getAuctionsForChats) {
            arrayOfAuctionIDS.push(auction.itemID);
          };
          let responseImages = await (await fetch('/api/auctions/images?itemId=' + arrayOfAuctionIDS)).json();
          let grouped = Vue._.mapValues(Vue._.groupBy(responseImages, 'itemID'),v => Vue._.sortBy(v, "isPrimary").reverse());
          for(let auction of this.$store.getters.getAuctionsForChats){
            Vue.set(this.$store.getters.getAuctionsForChats.find(s => s.itemID == auction.itemID),'images',grouped[auction.itemID])
            }
          }
      }
    },
}
</script>

<style scoped>
#scroll-button{
        margin-bottom: 50px;
    }
.list{
  height: 40vh;
  overflow: hidden;
}
.test{
  width: 300px !important;
}
</style>
