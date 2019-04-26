import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auctions: Array,
    showPopup: false,
    isLoggedIn: false,
    userName: '',
    doneLoading: false,
    uploadedImage: null,
    category: null,
    title: null,
    description: null,
    min_price: null,
    images: [],
    infoText: '',
    isConnectedToServer: false,
    totalPages: null,
    filteredAuctions: null,
    threeLatestAuctions: null,
    threeAuctionsNearDeadline: null,
  },
  mutations: {
    setAuctions(state, auctions) {
      state.auctions = auctions;
    },
    setTotalAuctionPages(state, totalPages){
      state.totalPages = totalPages
    },
    setFilteredAuctions(state, filteredAuctions) {
      state.auctions = filteredAuctions;
    },
    setThreeLatestAuctions(state, threeLatestAuctions) {
      state.threeLatestAuctions = threeLatestAuctions;
    },
    setThreeAuctionsNearDeadline(state, threeAuctionsNearDeadline) {
      state.threeAuctionsNearDeadline = threeAuctionsNearDeadline;
    },
    togglePopup(state, popupState) {
      state.showPopup = popupState;
    },
    toggleLogin(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    toggleDoneLoading(state, loading) {
      state.doneLoading = loading;
    },
    setUploadedImage(state, image) {
      let test = {img:image}
      console.log(test)
      state.images.push(test);
      console.log(state.images)
    },
    setInfoText(state, text) {
      state.infoText = text;
    },
    setIsConnectedToServer(state, connected) {
      state.isConnectedToServer = connected;
    }
  },
  getters: {
    getAuctions: state => {
      return state.auctions;
    },
    getTotalAuctionPages: state => {
      return state.totalPages;
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
    },
    getDoneLoader: state => {
      return state.doneLoading;
    },
    getUploadedImage: state => {
      return state.images;
    },
    getInfoText: state => {
      return state.infoText;
    },
    getIsConnectedToServer: state => {
      return state.isConnectedToServer;
    }
  },
  actions: {
    async getAuctionsFromDB(state, page) {
      let auctions = await (await fetch('/api/auctions/?page='+(page-1)+'&size=3')).json();
      await this.commit('setAuctions', auctions.content);
      await this.commit('setTotalAuctionPages', auctions.totalPages)
      this.commit('toggleDoneLoading', true)
    },
    async getFilteredAuctionsFromDB(state, userinput) {
      let filteredAuctions = await (await fetch('/api/auctions/search?title=' + userinput)).json();
      this.commit('setFilteredAuctions', filteredAuctions)
    },
    async getStartPageAuctions() {
      let threeAuctionsNearDeadline = await (await fetch('/api/auctions/threenearest')).json();
      this.commit('setThreeAuctionsNearDeadline', threeAuctionsNearDeadline)
      let threeLatestAuctions = await (await fetch('/api/auctions/threelatest')).json();
      this.commit('setThreeLatestAuctions', threeLatestAuctions)
      let temp = [];
      temp.push(...threeAuctionsNearDeadline)
      temp.push(...threeLatestAuctions);
      temp = Vue._.uniqBy(temp, 'itemID');
      this.commit('setAuctions',temp);
    },
    async authenticateUser() {
      let response = await (await fetch('/api/user/authenticate')).json();
      if (response === true) {
        this.commit("toggleLogin", true);
        this.dispatch('getUserCredentials')
      } else {
        this.commit("toggleLogin", false);
      }
    },
    async getChoosenAuction(state, auctionID) {
      if (this.getters.getAuctions === undefined || this.getters.getAuctions.length === 1 || this.getters.getAuctions.length === 0) {
        await this.dispatch('getAuctionsFromDB');
        return this.getters.getAuctions.find(s => s.itemID == auctionID);
      } else {
        return this.getters.getAuctions.find(s => s.itemID == auctionID);
      }
    },
    async getUserCredentials() {
      let response = await (await fetch("/api/user/credentials")).text();
      this.commit('setUserName', response);
    },

    async getBidsForAuction(state) {
      let arrayOfAuctionIDS = [];
      for(let auction of this.getters.getAuctions) {
        arrayOfAuctionIDS.push(auction.itemID);
      };
      let responseBids = await (await fetch('/api/bids/bid?auctionID=' + arrayOfAuctionIDS)).json();
      this.dispatch('setBidToAuction',responseBids);
    },
    setBidToAuction(state,bids){
      let grouped = Vue._.mapValues(Vue._.groupBy(bids, 'itemID'),v => _.sortBy(v, "amount").reverse());
      let emptyAuction = [{amount: 0}];
      for(let auction of this.getters.getAuctions){
        Vue.set(this.getters.getAuctions.find(s => s.itemID == auction.itemID),'bids',grouped[auction.itemID])
        if(this.getters.getAuctions.find(s => s.itemID == auction.itemID).bids === undefined){
          Vue.set(this.getters.getAuctions.find(s => s.itemID == auction.itemID),'bids',emptyAuction)
        }
      }
    },
    updateBidOnAuction(state,bidObject){
      if (this.getters.getAuctions.find(s => s.itemID == bidObject.itemID)) {
        this.getters.getAuctions.find(s => s.itemID == bidObject.itemID).bids.unshift(bidObject);
      }
    },
    sleep(state, ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
})
