import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_URL = "http://localhost:8080/api/";
export default new Vuex.Store({
  state: {
    auctions: [
      {
        itemID: '12375463252345234092349041',
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
      itemID: '1236545432430020345032134241',
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
    itemID: '1233766574564876845584241',
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
  itemID: '121234534255645353441243433241',
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
  itemID: '1236433454364535353241',
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
  itemID: '1237645763453123241',
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
  itemID: '123332456457654345235241',
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
  itemID: '12332358387902532441',
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
  itemID: '12339087654323456786545435232341',
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
  itemID: '1233122345678654322341',
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
  itemID: '12332376858756463441',
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
  itemID: '1233243534341',
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
  itemID: '12332398798741',
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
  itemID: '1233212123341',
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
  itemID: '123765432341',
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
  itemID: '1233234234561',
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
  ],
  showPopup: false,
  isLoggedIn: false,
  },
  mutations: {
    setPosts(state,auctions){
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
      this.commit('setAuctions', auctions);
    },
  }
})
