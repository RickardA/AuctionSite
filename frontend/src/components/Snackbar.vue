<template>
      <v-snackbar
      v-model="snackbar"
      :multi-line="mode === 'multi-line'"
      :timeout="timeout"
      :vertical="mode === 'vertical'"
    >
      <NotificationCard :auctionObject="auction" color="transparent"/>
      <v-btn
        color="success"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
import NotificationCard from '../components/Notification/NotificationCard'
export default {
    components:{
        NotificationCard
    },
    data () {
      return {
        snackbar: false,
        color: '',
        mode: '',
        timeout: 3000,
        auction: null,
      }
    },
    computed:{
        notifications(){
            return this.$store.getters.getAllBidsByBuyer;
        }
    },
    watch:{
        notifications:function(){
            this.auction = this.notifications[0];
            this.snackbar = true;
        }
    }
}
</script>

<style>

</style>
