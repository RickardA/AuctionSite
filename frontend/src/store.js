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
    images: [],
    infoText: '',
    websocket: null,
    isConnectedToServer: false,
    chats: null,
    auctionsForChats: null,
    choosenChat: null,

    totalPages: null,
    filteredAuctions: null,
    threeLatestAuctions: null,
    threeAuctionsNearDeadline: null,
  },
  mutations: {
    setAuctions(state, auctions) {
      state.auctions = auctions;
      this.dispatch('getBidsForAuction');
      this.dispatch('getImagesForAuction');
    },
    setTotalAuctionPages(state, totalPages){
      state.totalPages = totalPages
    },
    setFilteredAuctions(state, filteredAuctions) {
      state.auctions = filteredAuctions;
      this.dispatch('getBidsForAuction');
      this.dispatch('getImagesForAuction');
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
      let test = {img:image, isPrimary: (state.images.length < 1).toString()}
      state.images.push(test);
    },
    setCheckedImage(state, index) {
      state.images = state.images.map((image, idx) => {
        return { img: image.img, isPrimary: (index ===  idx).toString() }
      })
    },
    removeImage(state, index) {
      let wasPrimary = state.images[index].isPrimary
      state.images.splice(index, 1);
      if(wasPrimary){
      this.commit('setCheckedImage', 0);
      }
    },
    clearImage(state){
      state.images = [];
    },
    setInfoText(state, text) {
      state.infoText = text;
    },
    setIsConnectedToServer(state, connected) {
      state.isConnectedToServer = connected;
    },
    setChats(state,chats){
      state.chats = chats;
    },
    setAuctionsForChats(state,auctionsForChats){
      state.auctionsForChats = auctionsForChats;
    },
    setChoosenChat(state,choosenChat){
      state.choosenChat = choosenChat;
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
    },
    getChats(state){
      return state.chats;
    },
    getAuctionsForChats(state){
      return state.auctionsForChats;
    },
    getChoosenChat(state){
      return state.choosenChat;
    }
  },
  actions: {
    async authenticateUser() {
      let response = await (await fetch('/api/user/authenticate')).json();
      if (response === true) {
        this.commit("toggleLogin", true);
        this.dispatch('getUserCredentials')
      } else {
        this.commit("toggleLogin", false);
      }
    },
    async getUserCredentials() {
      let response = await (await fetch("/api/user/credentials")).text();
      await this.commit('setUserName', response);
      this.state.websocket.send(JSON.stringify({type: "CONNECT", object: {mail: this.getters.getUserName}}));
    },

    async getBidsForAuction(state) {
      let arrayOfAuctionIDS = [];
      if(this.getters.getAuctions.length > 0){
      for(let auction of this.getters.getAuctions) {
        arrayOfAuctionIDS.push(auction.itemID);
      };
      let responseBids = await (await fetch('/api/bids/bid?auctionID=' + arrayOfAuctionIDS)).json();
      this.dispatch('setBidToAuction',responseBids);
    }
    },
    setBidToAuction(state,bids){
      let grouped = Vue._.mapValues(Vue._.groupBy(bids, 'itemID'),v => Vue._.sortBy(v, "amount").reverse());;
      for(let auction of this.getters.getAuctions){
        Vue.set(this.getters.getAuctions.find(s => s.itemID == auction.itemID),'bids',grouped[auction.itemID])
      }
    },
    async getImagesForAuction(state) {
      let arrayOfAuctionIDS = [];
      if(this.getters.getAuctions.length > 0){
      for(let auction of this.getters.getAuctions) {
        arrayOfAuctionIDS.push(auction.itemID);
      };
      let responseImages = await (await fetch('/api/auctions/images?itemId=' + arrayOfAuctionIDS)).json();
      this.dispatch('setImagesToAuction',responseImages);
    }
    },
    setImagesToAuction(state,images){
      let grouped = Vue._.mapValues(Vue._.groupBy(images, 'itemID'),v => Vue._.sortBy(v, "isPrimary").reverse());
      for(let auction of this.getters.getAuctions){
        Vue.set(this.getters.getAuctions.find(s => s.itemID == auction.itemID),'images',grouped[auction.itemID])
        }
    },
    sleep(state, ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async updateMessagesOnChat(state,messageObject){
      if(this.getters.getChats === null){
        await this.dispatch('getUserChats');
        this.getters.getChats[messageObject.itemID].push(messageObject);
      }else{
      if (this.getters.getChats[messageObject.itemID]) {
        this.getters.getChats[messageObject.itemID].push(messageObject);
      }
    }
    }
  },
})
