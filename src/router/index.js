import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/home.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/register'
import Search from '../pages/Search/search'


Vue.use(VueRouter)

const routes = [        
  {
    path:"/home",
    component:Home,
    meta:{show:true}
  },
  {
    path:"/login",
    component:Login,
    meta:{show:false}
  },
  {
    path:"/register",
    component:Register,
    meta:{show:false}
  },
  {
    path:"/search:kw?",
    component:Search,
    meta:{show:true},
    name:"search"
  },
  {
    path:"/",
    redirect:"/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
