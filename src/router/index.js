import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入组件 tab栏相关的组件
import HomeContainer from "../components/tabcontainer/HomeContainer.vue"
import MemberContainer from "../components/tabcontainer/memberContainer.vue"
import CartContainer from "../components/tabcontainer/CartContainer.vue"
import SearchContainer from "../components/tabcontainer/SearchContainer.vue"

//引入 新闻组件
import newsInfo from "../components/news/NewsInfo.vue";
import newsList from "../components/news/NewsList.vue";

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
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
    },
    {
      path: "/home/newslist",
      component: newsList
    },
    {
      path: "/home/newinfo",
      component: newsInfo
    }
  ]
})
