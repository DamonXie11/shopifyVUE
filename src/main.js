import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import './mock' // simulation data
require('./assets/css/style.css')

Vue.use(Element)
// 设置语言
locale.use(lang)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
