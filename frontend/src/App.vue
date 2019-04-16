<template>
  <v-app>
    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  },
  created() {
    //this.$store.dispatch("getAuctionsFromDB");
  }
}
</script>
