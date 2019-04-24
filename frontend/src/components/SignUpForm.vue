<template>
  <v-flex sm6>
    <v-form ref="form" lazy-validation>
      <v-card-title>
        <span class="headline">Register</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field
                label="Legal first name*"
                required
                v-model="firstName"
                :rules="nameRules"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Legal last name*" required v-model="lastName" :rules="nameRules"></v-text-field>
            </v-flex>
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
      :value="responseError"
      color="error"
      icon="warning"
      outline
    >
      There's already an account registered with this email
    </v-alert>
    <v-alert
      :value="responseErrorServer"
      color="error"
      icon="warning"
      outline
    >
      Something went wrong, please try again!
    </v-alert>
    <v-alert
      :value="responseSuccess"
      color="success"
      icon="check_circle"
      outline
    >
      Account registered
    </v-alert>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn 
        color="blue darken-1" 
        @click="submitForm" 
        flat>
        <template v-if="!loading"> Submit</template>
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
  name: "signUpForm",
  methods: {
    submitForm() {
      this.responseSuccess = false;
      this.responseError = false;
      this.responseErrorServer = false;
      if (this.$refs.form.validate()) {
        this.loading = true;
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          mail: this.email,
          password: this.password
        }
        this.registerUser(user);
      }
    },
    async registerUser(user) {
      this.response = await fetch("/api/user/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
      });

    if(this.response.ok){
      this.response = await this.response.json();
      this.responseSuccess = this.response;
      this.responseError = !this.response;
      this.loading = false;
      if(this.response == true){
          this.$refs.form.reset();
      }
    }else{
      this.responseErrorServer = true;
    }
    }
  },
  data: () => ({
    response: null,
    responseSuccess: false,
    responseError: false,
    responseErrorServer: false,
    loading:false,
    firstName: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    lastName: "",
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
  })
};
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

