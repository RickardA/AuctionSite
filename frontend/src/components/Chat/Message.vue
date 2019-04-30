<template>
    <div :class="[myMessage ? 'my-message-bubble' : 'their-message-bubble']">
        <p class="speech-bubble" :class="[myMessage ? 'my-message' : 'their-message']">{{message.message}}</p>
    </div>
</template>

<script>
export default {
    name: 'message',
    props:{
        message: Object,
    },
    computed:{
        myMessage(){
            return this.message.sender === this.$store.getters.getUserName ? true:false;
        }
    }
}
</script>

<style scoped>
.their-message{
    background: #0084ff !important;
    color: black !important;
}
.my-message{
    background:#13cf13 !important;
    color:black !important;
}
.my-message-bubble{
    margin-left: 2%;
}
.their-message-bubble{
    margin-right: 2%;
    display: flex;
    justify-content:flex-end;
}
.speech-bubble {
    color: white;
	position: relative;
	background: #00ff00;
	border-radius: .4em;
    max-width: 40%;
    word-wrap: break-word;
    display: inline-block;
}
p{
    padding:0 10px 0 10px;
}
</style>
