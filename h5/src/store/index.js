import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createLogger from 'vuex/dist/logger'
export default new Vuex.Store({
	state: {
		jellyFishes: []
	},
	mutations:{
	},
	actions:{
	},
	plugins: [createLogger()]
})