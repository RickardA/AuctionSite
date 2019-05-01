<template>
<div class="list">
    <ChatCard  @setChoosenChat="setChoosenChat" v-for="chat in chats" v-bind:key="chat.itemID" :chat="chat"/>
</div>
</template>

<script>
import ChatCard from './ChatCard'
export default {
    name: 'chatList',
    components:{
        ChatCard
    },
    computed:{
        chats(){
            return this.$store.getters.getAuctionsForChats;
        }
    },
    methods:{
        setChoosenChat(choosenChat){
            this.$emit('setChoosenChat',choosenChat);
        }
    }
}
</script>

<style scoped>
.list{
    width: 100% !important;
    overflow-y: scroll !important;
}
</style>
