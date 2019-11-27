import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createLogger from 'vuex/dist/logger'
import layout from './layout'
export default new Vuex.Store({
	modules: {
		layout
	},
	plugins: [createLogger()]
})