<template>
        <v-toolbar fixed class="hidden-sm-and-down">
            <v-toolbar-side-icon><router-link to="/"><v-icon>home</v-icon></router-link></v-toolbar-side-icon>
            <v-toolbar-title>KOOL AUCTIONS COmPANY</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat><router-link to="/auctions">Auctions</router-link></v-btn>
                <v-btn flat @click="togglePopup">Login/Register</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>
</template>

<script>
    import Popup from '../components/Popup'

    export default {
        name: "NavBar",
        components: {
            Popup
        },
        methods:{
            togglePopup(){
                this.$store.commit('togglePopup', true);
            }
        }
    }

</script>

<style scoped>

    a{
        text-decoration: none;
        color: rgba(0,0,0,0.87);
    }
</style>