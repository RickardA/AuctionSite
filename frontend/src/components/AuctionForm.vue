<template>
<v-form ref="form">
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
            type="number"
            placeholder="Min price"
            required
          ></v-text-field>
          <h2>Pick last date of auction</h2>
    <v-date-picker id="calendar" v-model="deadline" :min="minDate" :max="maxDate" :show-current="minDate" ></v-date-picker>
   <Imageupload ref="imageUpload" />
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
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
         <v-alert v-if="message != ''"
      :value="true"
      type="info"
    >
      {{ message }}
    </v-alert>
      </v-card>
    </v-flex>
  </v-layout>
  </v-form>
  </template>
<script>
import Imageupload from '../components/Imageupload'
export default {
    components:{
        Imageupload
    }, 
    data () {
      const nextMonth = new Date();
      const nextDay = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1)
      nextDay.setDate(nextDay.getDate() + 1)
      return {
        deadline: new Date().toISOString().substr(0, 10),
        errorMessages: '',
        name: '',
        formHasErrors: false,
        message: '',
        minDate: this.allowedDate(nextDay),
        maxDate: this.allowedDate(nextMonth),
        status: 'ONGOING',
      }
    }, methods:{
        async post(){
          if (this.validateInputs()){
            const images = this.$store.getters.getUploadedImage;
            const deadline = this.deadline;
            const sellerID = this.$store.getters.getUserName;
            const status = this.status;
            const response = await fetch('/api/auctions/addAuction', {
              method: 'POST',
              body: JSON.stringify({...this.formInfo, images, deadline, sellerID, status}),
              headers: { "Content-Type": "application/json" }
            });
            if(response.status === 200){
              this.handleSuccess();
            } else if(response.status === 400){
              const err = await response.json();
               const errors = Object.values(err).reduce((result, message) => {
                  return result + (result.length ? ' & ' : '') + message;
                }, '') 
                this.changeText(errors)
            } else{
              this.changeText("Something went wrong")
            }
          } else{
            this.changeText("Please fill in all fields")
          }
        },
        changeText(newText){
          this.message = newText;
        },
        validateInputs() {
         return this.formInfo.title && this.formInfo.description && this.formInfo.min_price > 0;
        },
        allowedDate(date){
          var dd = String(date.getDate()).padStart(2, '0');
          var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = date.getFullYear();

          return yyyy + '-' + mm + '-' + dd;
          },
          handleSuccess(){
            this.changeText("New auction created");
                setTimeout(()=> this.changeText(''), 5000);
                this.$refs.imageUpload.$refs.fileUpload.value = '';
                this.$store.commit('clearImage');
                this.$refs.form.reset();
          } 
    }, computed:{
        formInfo() {
            return {
                description: '',
                min_price: 0,
                title: ''
            }
        }
    }
}
</script>
<style <style scoped>
#headtitle{
    margin-bottom: 3px; 
    text-align: center; 
}
</style>

