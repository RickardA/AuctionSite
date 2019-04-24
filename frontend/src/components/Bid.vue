<template>
  <div>
    <v-form ref="form" lazy-validation>
      <v-text-field label="Amount" type="number" v-model="amount" :rules="amountRules" required></v-text-field>
      <v-btn color="success" @click="placeBid">Place Bid</v-btn>
    </v-form>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Something went wrong!</v-card-title>
        <v-card-text>You must be logged in to place a bid!</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">OK!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "bid",
  data: () => ({
    amount: null,
    bid: null,
    dialog: false,
    amountRules: [v => !!v || "You must enter an amount"]
  }),
  props: {
    auctionObject: null
  },
  methods: {
    async placeBid() {
      if (this.$refs.form.validate()) {
        if (this.$store.getters.getLoginState) {
          this.createBid();
          let response = await fetch("/api/bids/", {
            method: "POST",
            body: JSON.stringify(this.bid),
            headers: { "Content-Type": "application/json" }
          });
          this.$refs.form.reset();
        } else {
          this.dialog = true;
        }
      }
    },
    createBid() {
      this.bid = {
        buyerID: this.$store.getters.getUserName,
        itemID: this.auctionObject.itemID,
        amount: this.amount
      };
    }
  }
};
</script>

<style>
</style>


