<template>
    <div>
        <p>sadas {{auctionObject.itemID}}</p>
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Amount"
            type="number"
            v-model="amount"
            :rules="amountRules"
            required
          ></v-text-field>
          <v-btn color="success" @click="placeBid">Place Bid</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'bid',
    data: () => ({
        amount: null,
        amountRules: [
      v => !!v || "You must enter an amount",
    ],
    }),
    props: {
        auctionObject: null,
    },
    methods:{
        async placeBid(){
            if (this.$refs.form.validate()) {
                let bid = {
                    buyerID: this.$store.getters.getUserName,
                    itemID: this.auctionObject.itemID,
                    amount: this.amount
                }
            console.log("placing bid on " + this.auctionObject.itemID + " with the amount of " + this.amount);
                let response = await fetch('/api/bids/bid/',{
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


