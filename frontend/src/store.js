import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_URL = "http://localhost:8080/api/";
export default new Vuex.Store({
  state: {
    auctions: [
      {
        itemID: '1233241',
        title: 'Shy Rabbit',
        min_price: '20',
        status: 'Ongoing',
        description: 'This is a very nice rabbit',
        sellerID: '1235234',
        deadline: '2019-04-23 23:59',
        category: 'Animals'
    },
    {
      itemID: '1233241',
      title: 'Shy Rabbit',
      min_price: '20',
      status: 'Ongoing',
      description: 'This is a very nice rabbit',
      sellerID: '1235234',
      deadline: '2019-04-23 23:59',
      category: 'Animals'
  },
  {
    itemID: '1233241',
    title: 'Shy Rabbit',
    min_price: '20',
    status: 'Ongoing',
    description: 'This is a very nice rabbit',
    sellerID: '1235234',
    deadline: '2019-04-23 23:59',
    category: 'Animals'
}
  ]
  },
  mutations: {
    setPosts(state,auctions){
      state.auctions = auctions;
    }
  },
  actions: {
    async getAuctionsFromDB() {
      console.log('printing from getAuctionsFromDB')
      let auctions = await (await fetch(API_URL + 'auctions/')).json();
      this.commit('setAuctions', auctions);
    },
  }
})
