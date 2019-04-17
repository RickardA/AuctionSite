<template>
    <div class="content">
        <v-flex md6 offset-md3 class="pr-2 pl-2">
        <v-layout row wrap>

    <v-text-field
            label="Search"
            prepend-inner-icon="search"
            solo
    ></v-text-field>
<v-btn>GO!</v-btn>
        </v-layout>
        </v-flex>

        <v-flex md8 offset-md2>
            <v-layout row class="justify-center">
    <div class="categories">
        <v-btn round color="primary">All categories</v-btn>
        <v-btn round color="success">Arts and crafts</v-btn>
        <v-btn round color="success">Clothes</v-btn>
        <v-btn round color="success">Outdoors</v-btn>
        <v-btn round color="success">Electronics</v-btn>
        <v-btn round color="success">Other stuff</v-btn>
    </div>
            </v-layout>
        </v-flex>


    </div>
</template>

<script>
    export default {
        name: "SearchBarAndFilter",
        data(){
            return{
            toggle_one: 0
            }
        },
    }
</script>

<style scoped>

    .categories{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>