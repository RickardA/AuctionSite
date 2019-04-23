<template>
   <div>
      <img :src="this.imageInfo.src" class="uploading-image" />
      <input type="file" accept="image/jpeg" @change=uploadImage ref="fileUpload">
   </div>
</template>

<script>
    export default {
        name:'imageUpload',
        methods:{
            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.$store.commit('setUploadedImage', e.target.result);
                };
            }
        }, computed:{
            imageInfo(){
                return{
                    src: this.$store.getters.getUploadedImage
                }
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


