<template>
<Form>
<v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
            <h1 id="headtitle">Upload new item</h1>
          <v-text-field
            ref="title"
            v-model="formInfo.title"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Title of item"
            placeholder="Title"
            required
          ></v-text-field>
           <v-autocomplete
            ref="category"
            v-model="formInfo.category"
            :rules="[() => !!category || 'This field is required']"
            :items="items"
            label="Choose category"
            placeholder="Select..."
            required
          ></v-autocomplete>
            <v-textarea
      name="input-7-1"
      box
      label="Description of item"
      v-model="formInfo.description"
      auto-grow
     placeholder="Tell us a little bit about your item"
    ></v-textarea>
          <v-text-field
            ref="minPrice"
            v-model="formInfo.min_price"
            label="Minimum price"
            placeholder="Min price"
            required
          ></v-text-field>
          <h2>Pick last date of auction</h2>
           <div>

    <v-date-picker v-model="formInfo.deadline"></v-date-picker>
  </div>
   <Imageupload />
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  class="my-0"
                  v-on="on"
                >
                  <v-icon>refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <button color="primary" v-on:click.prevent="post">Upload item</button>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </Form>
  </template>
<script>
const API_URL = "http://localhost:8080/api/"
import Imageupload from '../components/Imageupload.vue'
export default {
    components:{
        Imageupload
    }, 
    data () {
      return {
        errorMessages: '',
        name: '',
        formHasErrors: false,
        items: [
        'Arts and crafts',
        'Clothes',
        'Outdoors',
        'Electronics',
        'Something else'
      ]
      }
    }, methods:{
        async post(){
            console.log("jhgghfjghmnhj"+ this.formInfo.image)
           let response = await fetch(API_URL +'auctions/addAuction', {
                method: 'POST',
                body: JSON.stringify(this.formInfo),
                headers: { "Content-Type": "application/json" }
            });
        }
    }, computed:{
        formInfo(){
            return{
        deadline: new Date().toISOString().substr(0, 10),
        category: '',
        description: '',
        min_price: 0,
        title: '',
        image: this.$store.getters.getUploadedImage
            }
        }
    }
}
</script>
<style>
#headtitle{
    margin-bottom: 3px; 
    text-align: center; 
}
</style>
