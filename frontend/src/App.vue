<template>
  <v-app>
    <NavBar/>
    <Popup/>
      <v-alert
      v-if="!isConnected"
      type="error"
      class="errorMessage"
    >
      This is a error alert.
    </v-alert>
    <v-content class="content">
      <router-view/>
    </v-content>
    <BottomNav/>
    <Footer />
    <Chat v-if="this.$store.getters.getLoginState"/>
  </v-app>
</template>

<script>
import Popup from './components/Popup'
import NavBar from './components/NavBar'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import Chat from './components/Chat/Chat'

export default {
  name: 'App',
  components: {
    Popup,
    NavBar,
    BottomNav,
    Footer,
    Chat
  },
  async created() {
    await this.$store.dispatch("authenticateUser");
    this.$store.dispatch('getUserChats');
  },
  methods:{
    togglePopup(){
      this.$store.commit('togglePopup',true);
    }
  },
  computed:{
    isConnected(){
      return this.$store.getters.getIsConnectedToServer;
    }
  }     
}
</script>

<style scoped>

  .content{
    margin-top: 10vh;
    margin-bottom: 1vh;
  }

  .errorMessage{
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 20;
    margin-top: 9.1vh;
  }

</style>
