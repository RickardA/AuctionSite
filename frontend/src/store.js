import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auctions: null,
  showPopup: false,
  isLoggedIn: false,
  userName: '',
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
    },
    setUserName(state,userName){
      state.userName = userName;
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
    },
    getUserName: state => {
      return state.userName;
    }
  },
  actions: {
    async getAuctionsFromDB() {
      let auctions = await (await fetch('/api/auctions/')).json();
      this.commit('setAuctions', auctions);
    },
    async authenticateUser(){
      let response = await (await fetch('/api/user/authenticate')).json();
      if(response === true){
        this.commit("toggleLogin",true);
        this.dispatch('getUserCredentials')
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
    async getUserCredentials(){
      let response = await (await fetch("/api/user/credentials")).text();
      this.commit('setUserName',response);
    },
  }
})
