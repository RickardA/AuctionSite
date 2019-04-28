<template>
    <div>
        <v-text-field
            label="Regular"
            placeholder="Placeholder"
          ></v-text-field>
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
export default {
    name: 'chat',
    data:() => ({
      message: '',
    }),
    methods: {
      sendMessage(){
        console.log(this.message)
        let encodedMessage = [...Buffer.from(this.message)]
        console.log(encodedMessage);
        this.$store.state.websocket.send(JSON.stringify({type: "MESSAGE", object:{sender:this.$store.getters.getUserName,reciever:'emilia@gmail.com',message:encodedMessage}}));
      }
    }
}
</script>

<style>

</style>
