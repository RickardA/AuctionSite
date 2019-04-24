import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

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
let isConnected = false;
connect();
 
function connect() {
    ws = new WebSocket('ws://localhost:8080/socket');
    ws.onmessage = (e) => {
      showSomething(e.data);
    }
    ws.onopen = (e) => {
        sendSomething();
        isConnected = true;
    };
 
    ws.onclose = (e) => {
        console.log("Closing websocket...");
    };
 
  console.log("Connecting...");
}
 
function disconnect() {
    if (ws != null) {
        ws.close();
    }
    isConnected = false;
    console.log("Disconnected");
}
 
function sendSomething() {
    console.log("sending something")
    ws.send(JSON.stringify({firstname: "Hello World!" }));
}
 
function showSomething(message) {
    console.log(message)
    store.dispatch('updateAuction',message);
}
