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
        <font-awesome-icon icon="arrow-up" />
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
        <ChatList  v-if="showList"/>
        <ChatField v-if="!showList"/>
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
    }),
    computed:{
      choosenChat(){
        return this.$store.getters.getChoosenChat;
      }
    },

    methods:{
      async openChat(){
          await this.$store.dispatch('getUserChats');
          this.menu = true;
      },
      async showChats(){
        await this.$store.dispatch('getUserChats');
          this.showList = true;
      }
    },
    watch:{
      choosenChat:function(){
          this.showList = false;
      }
    }
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
