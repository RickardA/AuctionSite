<template>
<AuctionForm />
</template>
<script>
import AuctionForm from '../components/AuctionForm.vue'
  export default {
      components: {
          AuctionForm
      },
      created(){
        if(this.$store.getters.getLoginState == false){
          this.$router.push("/");
        }
      }
  }
</script>
<style scoped>
</style>


