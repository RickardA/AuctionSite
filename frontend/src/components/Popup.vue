<template>
  <v-layout row justify-center>
    <v-dialog v-model="popupState" @keydown.esc="togglePopup" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="togglePopup">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Sign In/Sign Up</v-toolbar-title>
        </v-toolbar>
       <v-flex sm10 offset-sm1 offset-xs mt-2>
          <v-layout row wrap>
        <SignInForm />
        <SignUpForm />
          </v-layout>
  </v-flex>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
export default {
    name: 'popup',
    computed: {
        popupState(){
            return this.$store.getters.getPopupState;
        }
    },
    components:{
        SignInForm,
        SignUpForm,
    },
    methods:{
        togglePopup(){
            this.$store.commit('togglePopup',false);
        }
    }
}
</script>
