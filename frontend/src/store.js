import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_URL = "http://localhost:8080/api/";
export default new Vuex.Store({
  state: {
    auctions: [
      {
        itemID: '12375463241',
        title: 'Shy Rabbit',
        min_price: '20',
        currentBid:'123',
        status: 'Ongoing',
        description: 'This is a very nice rabbit',
        sellerID: '1235234',
        deadline: '2019-04-23 23:59',
        category: 'Animals',
        image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
    },
    {
      itemID: '12332134241',
      title: 'Shy Rabbit',
      min_price: '20',
      currentBid:'123',
      status: 'Ongoing',
      description: 'This is a very nice rabbit',
      sellerID: '1235234',
      deadline: '2019-04-23 23:59',
      category: 'Animals',
      image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
  },
  {
    itemID: '123376584241',
    title: 'Shy Rabbit',
    min_price: '20',
    currentBid:'123',
    status: 'Ongoing',
    description: 'This is a very nice rabbit',
    sellerID: '1235234',
    deadline: '2019-04-23 23:59',
    category: 'Animals',
    image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12123453433241',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12364353241',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '123123241',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12333245241',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332532441',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
  
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
},
{
  itemID: '12332341',
  title: 'Shy Rabbit',
  min_price: '20',
  currentBid:'123',
  status: 'Ongoing',
  description: 'This is a very nice rabbit',
  sellerID: '1235234',
  deadline: '2019-04-23 23:59',
  category: 'Animals',
  image:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
}
  ]
  },
  mutations: {
    setPosts(state,auctions){
      state.auctions = auctions;
    }
  },
  getters:{
    getAuctions: state => {
      return state.auctions;
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
