import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import home from './modules/home'
import pack from './modules/pack'
import pod from './modules/pod'
import getters from './getters'
import goods from './modules/goods'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    goods,
    home,
    pack,
    pod,
  },
  getters
})

export default store