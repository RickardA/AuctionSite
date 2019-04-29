<template>
    <v-layout row>
      <v-flex ml-2 sm3>
      <ChatList v-if="loaded"/>
      </v-flex>
      <v-flex offset-sm1 sm8 mr-2>
      <ChatField v-if="loaded" />
      </v-flex>
    </v-layout>
</template>

<script>
import ChatList from '../components/Chat/ChatList'
import ChatField from '../components/Chat/ChatField'
export default {
    name: 'chat',
    components:{
      ChatList,
      ChatField
    },
    data:() => ({
      loaded: false,
    }),
    async created(){
        await this.$store.dispatch('getUserChats');
        this.loaded = true;
    }
}
</script>

<style>

</style>
