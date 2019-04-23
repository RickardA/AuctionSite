<template>
  <v-toolbar fixed class="hidden-sm-and-down">
    <v-toolbar-side-icon to="/">
      <v-icon>home</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title>KOOL AUCTIONS COmPANY</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/auctions">Auctions</v-btn>
      <v-btn v-if="!isLoggedIn" flat @click="togglePopup">Login/Register</v-btn>
      <v-btn v-else flat @click="signOut">Sign Out</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Popup from "../components/Popup";
export default {
  name: "NavBar",
  components: {
    Popup
  },
  methods: {
    togglePopup() {
      this.$store.commit("togglePopup", true);
    },
    async signOut() {
      let response = await fetch("/logout", {
        method: "POST"
      });
      let successfulLogin = !response.url.includes("error");
      if (successfulLogin === true) {
          this.$store.commit('toggleLogin',false)
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoginState;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>