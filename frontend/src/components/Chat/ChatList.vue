<template>
<div class="list">
    <ChatCard  v-for="chat in chats" v-bind:key="chat.itemID" :chat="chat"/>
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
    }
}
</script>

<style scoped>
.list{
    width: 100% !important;
    overflow-y: scroll !important;
}
</style>
