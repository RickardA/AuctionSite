<template>
   <div>
       <div id="imageWrapper">
        <div id="image" v-for="(image, index) in this.imageInfo" v-bind:index="index" v-bind:key="index">
            <button type="button" @click="removeImage(index)">Remove</button>
            <img :src="image.img" class="uploading-image" />
            <input type="checkbox" :disabled="image.isPrimary === 'true'" v-model="image.isPrimary === 'true'" @click="onPrimarySelected(index)"> Is primary
        </div>
        </div>
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
            },
            removeImage(index){
                this.$store.commit('removeImage', index);
            },
            onPrimarySelected(index) {
                this.$store.commit("setCheckedImage", index);
            },
            isSelected(primary) {
                return primary === 'true';
            }
        }, computed:{
            imageInfo(){
                return this.$store.getters.getUploadedImage
        }
        }
     }  // missing closure added
</script>

<style>
#image {
  flex: 1 1 50%;
  margin-top: 20px;
  border-bottom: 2px solid lightslategray;
}
#imageWrapper {
    display:flex;
    flex-wrap: wrap;
    flex-direction: row; 
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


