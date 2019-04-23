import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auctions: null,
  showPopup: false,
  isLoggedIn: false,
  userName: '',
    filteredAuctions: null,
    threeLatestAuctions: null,
    threeAuctionsNearDeadline: null,
  },
  mutations: {
    setAuctions(state,auctions){
      state.auctions = auctions;
    },
    setFilteredAuctions(state, filteredAuctions){
      state.filteredAuctions = filteredAuctions;
    },
    setThreeLatestAuctions(state, threeLatestAuctions){
      state.threeLatestAuctions = threeLatestAuctions;
    },
    setThreeAuctionsNearDeadline(state, threeAuctionsNearDeadline){
      state.threeAuctionsNearDeadline = threeAuctionsNearDeadline;
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
    getFilteredAuctions: state => {
      return state.filteredAuctions;
    },
    getThreeLatestAuctions: state => {
      return state.threeLatestAuctions;
    },
    getThreeAuctionsNearDeadline: state => {
      return state.threeAuctionsNearDeadline;
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
    async getFilteredAuctionsFromDB(state, userinput){
      let filteredAuctions = await (await fetch('/api/auctions/search?title=' + userinput)).json();
      console.log(filteredAuctions)
      this.commit('setFilteredAuctions', filteredAuctions)
    },
    async getThreeLatestAuctionsFromDB(){
      let threeLatestAuctions = await (await fetch('/api/auctions/threelatest')).json();
      this.commit('setThreeLatestAuctions', threeLatestAuctions)
    },
    async getThreeAuctionsNearDeadlineFromDB(){
      let threeAuctionsNearDeadline = await (await fetch('/api/auctions/threenearest')).json();
      this.commit('setThreeAuctionsNearDeadline', threeAuctionsNearDeadline)
    },
    async authenticateUser(){
      let response = await (await fetch('/api/user/authenticate')).json();
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
    async getUserCredentials(){
      let response = await (await fetch("/api/user/credentials")).text();
      this.commit('setUserName',response);
    },
  }
})
