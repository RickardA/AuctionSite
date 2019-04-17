<template>
     <v-flex sm6>
       <v-form ref="form" lazy-validation>
        <v-card-title>
          <span class="headline">Sign In</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email*" required v-model="email" :rules="emailRules"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                label="Password*"
                type="password"
                :counter="10/20"
                v-model="password"
                :rules="passwordRules"
                required
              ></v-text-field>
              </v-flex>
            </v-layout>
             <small style="color:red">*indicates required field</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click="submitSignIn" flat>Sign In</v-btn>
        </v-card-actions>
       </v-form>
        </v-flex>
</template>

<script>
export default {
    name: 'signInForm',
     data: () => ({
    response: null,
    responseSuccess: false,
    responseError: false,
    email: "",
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 10) || "Password must be 10 characters or more"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods:{
    submitSignIn(){
      if (this.$refs.form.validate()) {

      }
    }
  }
}
</script>

<style scoped>

</style>

