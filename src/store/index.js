import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import login from './login'
import register from './register'
import search from './search'
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    home,
    login,
    register,
    search
  }
})
