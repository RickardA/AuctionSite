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
          <v-alert
            :value="displayError"
            color="error"
            icon="warning"
            outline
          >Something went wrong, please try again</v-alert>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn 
        color="blue darken-1"
        @click="submitSignIn" 
        flat>
        <template v-if="!loading"> Sign In</template>
         <v-progress-circular
      indeterminate
      color="primary"
      v-else
    ></v-progress-circular>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-flex>
</template>

<script>
export default {
  name: "signInForm",
  data: () => ({
    displayError: false,
    email: "",
    password: "",
    loading: false,
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 10) || "Password must be 10 characters or more"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    submitSignIn() {
      this.showErrorMessage(false);
      if (this.$refs.form.validate()) {
        this.loading = true;
        let user = {
          username: this.email,
          password: this.password
        };
        this.makeSignInRequest(user);
      }
    },
    async makeSignInRequest(user) {
      let response = await fetch("/login", {
        method: "POST",
        body: this.transformRequest(user),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
      let successfulLogin = response.ok;
      this.loading = false;
      if (successfulLogin === true) {
        this.showErrorMessage(false);
        this.setUserLoggedIn();
        this.$store.dispatch('getUserCredentials');
        this.$refs.form.reset();
      } else if (successfulLogin === false) {
        this.showErrorMessage(true);
      }
    },
    setUserLoggedIn() {
      this.$store.commit("toggleLogin", true);
      this.$store.commit("togglePopup", false);
    },
    showErrorMessage(displayError) {
      this.displayError = displayError;
    },

    transformRequest(jsonData = {}) {
      return Object.entries(jsonData)
        .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join("&");
    }
  }
};
</script>

<style scoped>
</style>

