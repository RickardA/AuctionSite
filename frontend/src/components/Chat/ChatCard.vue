<template>
    <v-card color="indigo lighten-1" class="white--text" @click="openChatWindow">
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
                    :src="this.chat.images[0].imgURL"
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
          console.log(this.chat);
            this.$emit('setChoosenChat',this.chat);
            console.log("printing from chatCard")
        }
    }
}
</script>

<style>

</style>
