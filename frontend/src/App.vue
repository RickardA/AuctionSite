<template>
  <v-app>
    <v-btn @click="togglePopup">Sign In/Up</v-btn>
    <Popup />
    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Popup from './components/Popup'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Popup
  },
  computed:{
    popupState() {
      return this.$store.getters.getPopupState;
    }
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
