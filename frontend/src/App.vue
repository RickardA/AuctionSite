<template>
  <v-app>
    <NavBar/>
    <Popup/>
    <v-content class="content">
      <router-view/>
    </v-content>
    <BottomNav/>
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Popup from './components/Popup'
import NavBar from './components/NavBar'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Popup,
    NavBar,
    BottomNav,
    Footer
  },
  created() {
    this.$store.dispatch("authenticateUser");
    this.$store.dispatch("getAuctionsFromDB");
    this.$store.dispatch("getThreeLatestAuctionsFromDB")
    this.$store.dispatch("getThreeAuctionsNearDeadlineFromDB")
  },
  methods:{
    togglePopup(){
      this.$store.commit('togglePopup',true);
    }
  },
}
</script>

<style scoped>

  .content{
    margin-top: 10vh;
    margin-bottom: 5vh;
  }

</style>
