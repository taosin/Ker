import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: require('@/assets/languages/zh-cn.json'),
    en: require('@/assets/languages/en-us.json'),
  },
})

import './static/common.css'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
