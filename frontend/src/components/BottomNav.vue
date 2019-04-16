<template>
    <v-card class="hidden-md-and-up" height="55px" flat>
        <v-bottom-nav
                :active.sync="bottomNav"
                :value="true"
                fixed="true"
                color="white"
                class="hidden-md-and-up"
        >
            <router-link to="/"><v-btn
                    color="teal"
                    flat
                    value="recent"
            >
                <span class="pt-1">Home</span>
                <font-awesome-icon icon="home" size="2x"></font-awesome-icon>
            </v-btn></router-link>

            <router-link to="/auctions"><v-btn
                    color="teal"
                    flat
                    value="favorites"
            >
                <span class="pt-1">Auctions</span>
                <font-awesome-icon icon="gavel" size="2x"></font-awesome-icon>
            </v-btn></router-link>

            <v-btn
                    color="teal"
                    flat
                    value="nearby"
                    @click="togglePopup"
            >
                <span class="pt-1">Login/Register</span>
                <font-awesome-icon icon="user" size="2x"></font-awesome-icon>
            </v-btn>
        </v-bottom-nav>
    </v-card>
</template>

<script>
    import Popup from '../components/Popup'

    export default {
        name: "BottomNav",
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