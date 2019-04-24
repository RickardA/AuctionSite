<template>
    <v-bottom-nav
            :value="true"
            fixed
            color="white"
            class="hidden-md-and-up"
    >
        <v-btn
                color="teal"
                flat
                to="/"
                value="recent"
        >
            <span class="pt-1">Home</span>
            <font-awesome-icon icon="home" size="2x"></font-awesome-icon>
        </v-btn>

        <v-btn
                color="teal"
                flat
                to="/auctions"
                value="favorites"
        >
            <span class="pt-1">Auctions</span>
            <font-awesome-icon icon="gavel" size="2x"></font-awesome-icon>
        </v-btn>
        <v-btn
                v-if="isLoggedIn"
                color="teal"
                flat
                value="nearby"
                to="/newauction"
        >
            <span class="pt-1">New Auction</span>
            <font-awesome-icon icon="plus-circle" size="2x"></font-awesome-icon>
        </v-btn>

        <v-btn
                v-if="!isLoggedIn"
                color="teal"
                flat
                value="nearby"
                @click="togglePopup"
        >
            <span class="pt-1">Login/Register</span>
            <font-awesome-icon icon="user" size="2x"></font-awesome-icon>
        </v-btn>
        <v-btn
                v-else
                color="teal"
                flat
                value="nearby"
                @click="signOut"
        >
            <span class="pt-1">Logout</span>
            <font-awesome-icon icon="sign-out-alt" size="2x"></font-awesome-icon>
        </v-btn>
    </v-bottom-nav>
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
            },
            async signOut() {
                let response = await fetch("/logout", {
                    method: "POST"
                });
                this.$router.push("/");
                let successfulLogin = !response.url.includes("error");
                if (successfulLogin === true) {
                    this.$store.commit('toggleLogin',false)
                }
            }
        },
        computed:{
            isLoggedIn(){
                return this.$store.getters.getLoginState;
            }
        }
    }
</script>