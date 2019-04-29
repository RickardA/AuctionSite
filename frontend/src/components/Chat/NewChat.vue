<template>
    <div>
        <v-form ref="form" lazy-validation>
      <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn outline large fab v-on="on" color="indigo">
      <v-icon>edit</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Send Message To Seller</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list>
        <v-textarea
          box
          name="input-7-4"
          label="Message"
          placeholder="Write your message here"
          v-model="message"
          :rules="messageRules"
        ></v-textarea>
 
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false, message = ''">Cancel</v-btn>
          <v-btn color="primary" flat @click="sendMessage">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'newChat',
    props:{
        auction: Object,
    },
    data:()=>({
        fav: true,
      menu: false,
      message: '',
      hints: true,
      messageRules: [
      v => !!v || "You can't send an empty message",
    ]
    }),
    methods:{
        sendMessage(){
            if(this.$refs.form.validate()){
            let object = JSON.stringify({sender:this.$store.getters.getUserName,reciever:this.auction.sellerID,message:this.message,itemID:this.auction.itemID});
            this.$store.state.websocket.send(JSON.stringify({type: "MESSAGE",object:object}));
            this.message = '';
            this.menu = false;
            }
        }
    }
}
</script>

<style>

</style>
