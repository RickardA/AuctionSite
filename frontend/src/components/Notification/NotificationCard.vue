<template>
    <v-card :color="color" class="white--text" @click="routeToAuction">
              <v-layout row>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>
                      <div>{{auctionObject.name}} placed a higher bid than you on "{{auctionObject.title}}", their bid was: ${{auctionObject.current_price}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
</template>

<script>
export default {
    name: 'notificationCard',
    props:{
        auctionObject: Object,
        color: String
    },
    computed:{
      /*imageURL(){
        return this.chat.images === undefined ? '' : this.chat.images[0].imgURL;
      } */
    },
    methods:{
        routeToAuction(){
        this.$router.push('/auction?'+this.auctionObject.itemID);
      }
    }
}
</script>

<style>

</style>
