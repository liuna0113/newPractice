// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入mint-ui插件
import MintUI from "mint-ui"
//引入mint-ui  css插件 这个插件可以直接
import "mint-ui/lib/style.css"
//安装mint-ui插件
Vue.use(MintUI)

//引入mui的库
import "./lib/mui/css/mui.css"

//引入mui的扩展图标的样式
import "./lib/mui//css/icons-extra.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
