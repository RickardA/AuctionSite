<template>
    <v-card color="purple" class="white--text" @click="openChatWindow">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{chat.title}}</div>
                      <div>Seller: {{chat.sellerID}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
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
    name: 'chatCard',
    props:{
        chat: Object,
    },
    methods:{
        openChatWindow(){
            this.$store.commit('setChoosenChat',this.chat);
            console.log("opening chat for item "+this.chat.itemID);
        }
    }
}
</script>

<style>

</style>
