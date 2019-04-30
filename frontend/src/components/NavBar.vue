<template>
  <v-toolbar fixed class="hidden-sm-and-down">
    <v-toolbar-side-icon to="/">
      <v-icon>home</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title id="title">Bukowsk<span id="title2">-ish</span></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/auctions"><span class="pr-1">Auctions</span>
        <font-awesome-icon icon="gavel"></font-awesome-icon></v-btn>
      <v-btn to="/newauction" v-if="isLoggedIn" flat><span class="pr-1">New Auction</span>
        <font-awesome-icon icon="plus-circle"></font-awesome-icon></v-btn>
      <v-btn v-if="!isLoggedIn" flat @click="togglePopup"><span class="pr-1">Login/Register</span>
        <font-awesome-icon icon="user"></font-awesome-icon></v-btn>
      <v-btn id="sign-out" v-else flat @click="signOut"><span class="pr-1">Sign out</span>
        <font-awesome-icon icon="sign-out-alt"></font-awesome-icon></v-btn>

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
      this.$store.state.websocket.send(JSON.stringify({type:"DISCONNECT", object: {mail: this.$store.getters.getUserName}}));
      let response = await fetch("/logout", {
        method: "POST"
      });
      this.$router.push("/");
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

  #sign-out{
    color: #7f1530;
  }

  #title{
    font-size: 170%;
  }

  #title2{
    color: #0d51c4;
  }


</style>