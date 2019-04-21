<template>
    <div>
        <p>sadas {{auctionObject.itemID}}</p>
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Amount"
            type="number"
            v-model="bid.amount"
            :rules="amountRules"
            required
          ></v-text-field>
          <v-btn color="success" @click="placeBid">Place Bid</v-btn>
        </v-form>
    </div>
</template>

<script>
const API_URL = "http://localhost:8080/";
export default {
    name: 'bid',
    data: () => ({
        amountRules: [
      v => !!v || "You must enter an amount",
    ],
    }),
    computed: {
        bid() {
            return {
            buyerID: this.$store.getters.getUserName,
            itemID: this.auctionObject.itemID,
            amount: null,
        }},
    },
    props: {
        auctionObject: null,
    },
    methods:{
        async placeBid(){
            if (this.$refs.form.validate()) {
            console.log(this.bid);
                let response = await fetch(API_URL + 'api/bids/bid/',{
                method: "POST",
                body: JSON.stringify(this.bid),
                headers: { "Content-Type": "application/json" }
         });
            }
        }
    }
}
</script>

<style>

</style>


