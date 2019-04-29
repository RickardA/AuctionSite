<template>
<div v-if="chat">
        <Message v-for="message in chat" v-bind:key="message.messageID" :message="message"/>
        <v-textarea
          outline
          v-model="message"
          name="input-7-4"
          label="Outline textarea"
        ></v-textarea>
        <v-btn round color="primary" @click="sendMessage" dark>Rounded Button</v-btn>
        </div>
</template>

<script>
import Message from './Message'
export default {
    name: 'chatField',
    components:{
        Message,
    },
    data:() => ({
        message: '',
    }),
    computed:{
        chat(){
            return this.$store.getters.getChoosenChat === null ? false :this.$store.getters.getChats[this.$store.getters.getChoosenChat.itemID];
        }
    },
    methods: {
      sendMessage(){
        console.log(this.chat)
        let object = JSON.stringify({sender:this.$store.getters.getUserName,reciever:'emilia@gmail.com',message:this.message,itemID:this.chat[0].itemID});
        this.$store.state.websocket.send(JSON.stringify({type: "MESSAGE",object:object}));
      }
    },
}
</script>

<style>

</style>
