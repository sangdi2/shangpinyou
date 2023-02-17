import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import './mock/mockServer.js'
import 'swiper/css/swiper.css';
import Crasoul from '@/components/Crasoul/Crasoul.vue'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

Vue.config.productionTip = false
Vue.component('Crasoul',Crasoul)

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
