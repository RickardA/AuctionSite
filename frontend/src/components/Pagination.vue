<template>
    <div class="text-xs-center">
        <v-pagination
                v-model="page"
                :length="4"
                circle
        ></v-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data () {
            return {
                page: 1
            }
        }
    }
</script>

<style scoped>

</style>