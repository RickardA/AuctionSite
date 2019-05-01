<template>
  <div v-if="chat" >
    <div class="list" ref="container">
    <Message v-for="message in chat" v-bind:key="message.messageID" :message="message"/>
    </div>
    <v-layout>
    <v-textarea rows="2" ref="input" class="field" v-model="message" @keydown.enter="sendMessage" name="input-7-4" box label="Message"></v-textarea>
    <v-btn class="send-button" color="primary" @click="sendMessage" dark>Send</v-btn>
    </v-layout>
  </div>
</template>

<script>
import Message from "./Message";
export default {
  name: "chatField",
  components: {
    Message
  },
  data: () => ({
    message: ""
  }),
  props:{
    choosenChat: Object,
  },
  computed: {
    chat() {
      return this.$store.getters.getChats[
            this.choosenChat.itemID
          ];
    }
  },
  methods: {
    scrollToEnd(){
        let container = this.$refs.container;
        container.scrollTop = container.scrollHeight;
    },
    sendMessage() {
      if (
        this.choosenChat.sellerID ==
        this.$store.getters.getUserName
      ) {
        let object = JSON.stringify({
          sender: this.$store.getters.getUserName,
          reciever: this.chat[0].sender,
          message: this.message,
          itemID: this.chat[0].itemID
        });
        this.$store.state.websocket.send(
          JSON.stringify({ type: "MESSAGE", object: object })
        );
      } else {
        let object = JSON.stringify({
          sender: this.$store.getters.getUserName,
          reciever: this.choosenChat.sellerID,
          message: this.message,
          itemID: this.chat[0].itemID
        });
        this.$store.state.websocket.send(
          JSON.stringify({ type: "MESSAGE", object: object })
        );
      }
      this.$refs.input.reset();
    }
  },
  mounted(){
    this.scrollToEnd();
  },
};
</script>

<style scoped>
.list{
  height: 30vh;
  width: 100%;
  overflow-y: scroll !important;
}
.send-button{
  margin: 0;
  height: 76px;
}
</style>
