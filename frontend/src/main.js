import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)

Vue.config.productionTip = false

//Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let ws;
connect();
 
function connect() {
    ws = new WebSocket('ws://localhost:8080/socket');
    ws.onmessage = (e) => {
      showSomething(e.data);
    }
    ws.onopen = (e) => {
        store.commit('setIsConnectedToServer',true);
        console.log("Connected!")
    };
 
    ws.onclose = (e) => {
        console.log("Closing websocket...");
        store.commit('setIsConnectedToServer',false);
        setTimeout(function() {
          connect();
        }, 500);
    };
 
  console.log("Connecting...");
}
 
function disconnect() {
    if (ws != null) {
        ws.close();
    }
    store.commit('setIsConnectedToServer',false);
    console.log("Disconnected");
}
 
function sendSomething() {

}
 
function showSomething(recievedObject) {
  let object = JSON.parse(recievedObject);
  switch(object.type){
    case 'BID':
      console.log("New bid recieved");
      store.dispatch('updateBidOnAuction',object.object)
      break;
  }
}

store.watch((state) => state.auctions, (oldValue, newValue) => {
  console.log('auctions is changing')
  store.dispatch('getBidsForAuction');
})