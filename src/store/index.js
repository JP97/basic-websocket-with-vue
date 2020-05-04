import Vue from 'vue'
import Vuex from 'vuex'

import WebSockets from './modules/websockets.js'

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
      WebSockets
    }
});