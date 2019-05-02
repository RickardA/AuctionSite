<template>
    <v-card color="indigo lighten-1" class="white--text" @click="openChatWindow">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{auctionObject.title}}</div>
                      <div>Price: {{auctionObject.min_price}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    height="125px"
                    contain
                  ></v-img>
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
    },
    computed:{
      /*imageURL(){
        return this.chat.images === undefined ? '' : this.chat.images[0].imgURL;
      } */
    },
    methods:{
        openChatWindow(){
          console.log("idiot");
        }
    }
}
</script>

<style>

</style>
