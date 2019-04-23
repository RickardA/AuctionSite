<template>
<Form>
<v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
          <h1 id="headtitle">Upload new item</h1>
        <v-card-text>
          <v-text-field
            type="text"
            ref="title"
            v-model="formInfo.title"
            :rules="[() => !!formInfo.title || 'This field is required']"
            :error-messages="errorMessages"
            label="Title of item"
            placeholder="Title"
            required></v-text-field>
           <v-autocomplete
            ref="category"
            v-model.lazy="formInfo.category"
            :rules="[() => !!formInfo.category || 'This field is required']"
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
            v-model.number="formInfo.min_price"
            label="Minimum price"
            placeholder="Min price"
            required
          ></v-text-field>
          <h2>Pick last date of auction</h2>
          <div>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-checkbox v-model="landscape" hide-details label="Landscape"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm3>
        <v-checkbox v-model="reactive" hide-details label="Reactive"></v-checkbox>
      </v-flex>
    </v-layout>
    <v-date-picker v-model="deadline" :landscape="landscape" :reactive="reactive"></v-date-picker>
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
import Imageupload from '../components/Imageupload.vue'
export default {
    components:{
        Imageupload
    }, 
    data () {
      return {
        showSON: false,
        deadline: new Date().toISOString().substr(0, 10),
        landscape: false,
        reactive: false,
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
            console.log(this.deadline)
            const image = this.$store.getters.getUploadedImage;
            const deadline = this.deadline;
            let response = await fetch('/api/auctions/addAuction', {
                method: 'POST',
                body: JSON.stringify({ ...this.formInfo, image, deadline }),
                headers: { "Content-Type": "application/json" }
            });
        }
    }, computed:{
        formInfo() {
            return {
                category: '',
                description: '',
                min_price: 0,
                title: ''
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
