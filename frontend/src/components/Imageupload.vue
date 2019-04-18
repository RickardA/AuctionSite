<template>
   <div>
      <img :src="previewImage" class="uploading-image" />
      <input type="file" accept="image/jpeg" @change=uploadImage>
   </div>
</template>

<script>
    export default {
        name:'imageUpload',
        data(){
            return{
               previewImage:null
            }
        },
        methods:{
            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    this.$store.commit('setUploadedImage', this.previewImage);
                };
            }
        }
     }  // missing closure added
</script>

<style>
#image {
  text-align: center;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
button {
  
}
</style>


