import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auctions: null,
  showPopup: false,
  isLoggedIn: false,
  userName: '',
  doneLoading: false,
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
    },
    toggleDoneLoading(state,loading){
      state.doneLoading = loading;
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
    },
    getDoneLoader: state => {
      return state.doneLoading;
    }
  },
  actions: {
    async getAuctionsFromDB() {
      let auctions = await (await fetch('/api/auctions/')).json();
      await this.commit('setAuctions', auctions);
      this.commit('toggleDoneLoading',true)
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

    async updateAuction(state, auctionID){
      console.log("updating bid")
      await this.dispatch('sleep',500);
      if(this.getters.getAuctions.find(s => s.itemID == auctionID)){
      let response = await (await fetch('/api/bids/bid?auctionID='+auctionID)).json();
      this.getters.getAuctions.find(s => s.itemID == auctionID).bids = response;
    }else{
      console.log("error");
    }
    },
    sleep(state,ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
})
