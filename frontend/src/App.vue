<template>
  <v-app>
    <NavBar/>
    <Popup/>
    <main>
      <router-view/>
    </main>
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
    console.log("hej hopp")
    this.$store.dispatch("authenticateUser");
    this.$store.dispatch("getAuctionsFromDB");
  },
  methods:{
    togglePopup(){
      this.$store.commit('togglePopup',true);
    }
  },
}
</script>
