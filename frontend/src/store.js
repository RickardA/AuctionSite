import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_URL = "http://localhost:8080/api/";
export default new Vuex.Store({
  state: {
    auctions: null,
    filteredAuctions: null,
    showPopup: false,
    isLoggedIn: false,
  },
  mutations: {
    setAuctions(state,auctions){
      state.auctions = auctions;
    },
    setFilteredAuctions(state, filteredAuctions){
      state.filteredAuctions = filteredAuctions;
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
    getFilteredAuctions: state => {
      return state.filteredAuctions
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
      let auctions = await (await fetch(API_URL + 'auctions/')).json();
      this.commit('setAuctions', auctions);
    },
    async getFilteredAuctionsFromDB(searchResult, userinput){
      console.log(userinput)
      let filteredAuctions = await (await fetch(API_URL + 'auctions/search?title=' + userinput)).json();
      console.log(filteredAuctions)
      this.commit('setFilteredAuctions', filteredAuctions)
    },
    async authenticateUser(){
      let response = await (await fetch(API_URL + 'user/authenticate')).json();
      if(response === true){
        this.commit("toggleLogin",true);
      }else{
        this.commit("toggleLogin",false);
      }
      
    },
    async getChoosenAuction(state,auctionID){
      if(this.getters.getAuctions === null){
        await this.dispatch('getAuctionsFromDB');
        return this.getters.getAuctions.find(s => s.itemID == auctionID);
      }else{
        return this.getters.getAuctions.find(s => s.itemID == auctionID);
      }
    },
  }
})
