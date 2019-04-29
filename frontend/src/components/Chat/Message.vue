<template>
    <div>
        <p>{{message.message}}</p>
    </div>
</template>

<script>
export default {
    name: 'message',
    props:{
        message: Object,
    }
}
</script>

<style>

</style>
