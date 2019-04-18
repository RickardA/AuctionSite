import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_URL = "http://localhost:8080/api/";
export default new Vuex.Store({
  state: {
    auctions: [
      {
        'itemID' : '12375463252345234092349041',
        'title' : 'Shy Rabbit',
        'min_price' : '20',
        'currentBid':'123',
        'status': 'Ongoing',
        'description': 'This is a very nice rabbit',
        'sellerID': '1235234',
        'deadline': '2019-04-23 23:59',
        'category': 'Animals',
        'image':'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
    },

  ],
  showPopup: false,
  isLoggedIn: false,
  },
  mutations: {
    setAuctions(state,auctions){
      state.auctions = auctions;
    },
    togglePopup(state,popupState){
      state.showPopup = popupState;
    },
    toggleLogin(state,isLoggedIn){
      state.isLoggedIn = isLoggedIn;
    }
  },
  getters:{
    getAuctions: state => {
      return state.auctions;
    },
    getPopupState: state => {
      return state.showPopup;
    },
    getLoginState: state => {
      return state.isLoggedIn;
    }
  },
  actions: {
    async getAuctionsFromDB() {
      console.log('printing from getAuctionsFromDB')
      let auctions = await (await fetch(API_URL + 'auctions/')).json();
      console.log(auctions)
      this.commit('setAuctions', auctions);
    },
  }
})
