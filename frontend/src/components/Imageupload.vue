<template>
   <div>
      <img :src="this.imageInfo" class="uploading-image" />
      <input type="file" multiple accept="image/jpeg" @change=uploadImage ref="fileUpload">
   </div>
</template>

<script>
    export default {
        name:'imageUpload',
        methods:{
            uploadImage(e){
                let index = 0;
                for(let file of e.target.files){
                const image = e.target.files[index];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.$store.commit('setUploadedImage', e.target.result);
                };
                  index++
            }
            }
        }, computed:{
            imageInfo(){
                return
                this.$store.getters.getUploadedImage
                
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


