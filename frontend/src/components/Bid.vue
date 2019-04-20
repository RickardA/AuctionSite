<template>
    <div>
        <p>sadas {{auctionObject.itemID}}</p>
          <v-text-field
            label="Amount"
            type="number"
          ></v-text-field>
          <v-btn color="success" @click="placeBid">Place Bid</v-btn>
    </div>
</template>

<script>
export default {
    name: 'bid',
    props: {
        auctionObject: null,
    },
    methods:{
        placeBid(){
            console.log("placing bid on " + this.auctionObject.itemID)
        }
    }
}
</script>

<style>

</style>


