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
        <v-btn color="blue darken-1" @click="submitForm" flat>Submit</v-btn>
      </v-card-actions>
    </v-form>
  </v-flex>
</template>

<script>
const API_URL = "http://localhost:8080/api/";
export default {
  name: "signUpForm",
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.responseSuccess = false;
        this.responseError = false;
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          mail: this.email,
          password: this.password
        }
        console.log(user);
        this.registerUser(user);
      }
    },
    async registerUser(user) {
      console.log("printing from addUseerToDB");
      this.response = await fetch(API_URL + "user/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
      });
      this.response = await this.response.json();
      this.responseSuccess = this.response;
      this.responseError = !this.response;
      console.log(this.response);
    }
  },
  data: () => ({
    response: null,
    responseSuccess: false,
    responseError: false,
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

<style>
</style>

