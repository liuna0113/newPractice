import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeContainer from "../components/HomeContainer.vue"
import MemberContainer from "../components/memberContainer.vue"
import CartContainer from "../components/CartContainer.vue"
import SearchContainer from "../components/HomeContainer.vue"

export default new Router({
  routes: [
    {
      path:"/home",
      component:HomeContainer
    },
    {
      path: "/member",
      component:MemberContainer
    },
    {
      path: "/cart",
      component: CartContainer
    },
    {
      path: "/search",
      component: SearchContainer
    }
  ]
})
