import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createLogger from 'vuex/dist/logger'
import layout from './layout'
import menu from './menu'
export default new Vuex.Store({
	modules: {
		layout,
		menu
	},
	plugins: [createLogger()]
})