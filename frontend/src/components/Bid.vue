<template>
  <div>
    <v-form ref="form" lazy-validation>
      <p v-if="!isLoggedIn" style="color:red">You must be logged in to place a bid</p>
      <p v-if="isMyOwnAuction" style="color:red">You can't bid on your own auction</p>
      <v-text-field label="Amount" :disabled="!isLoggedIn || isMyOwnAuction" type="number" v-model="amount" :rules="amountRules" required></v-text-field>
      <v-btn color="success" :disabled="!isLoggedIn || isMyOwnAuction" @click="placeBid">Place Bid</v-btn>
    </v-form>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Something went wrong!</v-card-title>
        <v-card-text>{{modalText}}</v-card-text>
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
    modalText: "",
    amountRules: [v => !!v || "You must enter an amount"]
  }),
  computed:{
    isLoggedIn(){
      return this.$store.getters.getLoginState;
    },
    isMyOwnAuction(){
      return this.$store.getters.getUserName === this.auctionObject.sellerID & this.isLoggedIn === true ? true:false;
    }
  },
  props: {
    auctionObject: null
  },
  methods: {
    async placeBid() {
      if (this.$refs.form.validate()) {
        if (this.$store.getters.getLoginState) {
          if (this.amount > this.auctionObject.bids[0].amount && this.amount >= this.auctionObject.min_price) {
            this.createBid();
            let response = await fetch("/api/bids/", {
              method: "POST",
              body: JSON.stringify(this.bid),
              headers: { "Content-Type": "application/json" }
            });
            response = await response.json();
            if(response === true){
              this.$refs.form.reset();
            }else{
              this.$store.dispatch('getBidsForAuction');
              this.modalText = "Someting went wrong when placing a bid, please try again";
              this.dialog = true;
            }
          } else {
            this.modalText = "You must place a bid higher than the current and higher than starting price!";
            this.dialog = true;
          }
        } else {
          this.modalText = "You must be logged in to place a bid!";
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


