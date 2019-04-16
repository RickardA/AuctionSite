<template>
  <v-app>
    <NavBar/>
    <Popup />
    <main>
      <router-view/>
    </main>
    <BottomNav/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Popup from './components/Popup'
import NavBar from './components/NavBar'
import BottomNav from './components/BottomNav'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Popup,
    NavBar,
    BottomNav
  },
  created() {
    //this.$store.dispatch("getAuctionsFromDB");
  },
  methods:{
    togglePopup(){
      this.$store.commit('togglePopup',true);
    }
  }
}
</script>
