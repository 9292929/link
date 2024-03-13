import App from './App'

import uviewPlus from 'uview-plus'

import * as Pinia from 'pinia'

import {
	createUnistorage
} from './uni_modules/pinia-plugin-unistorage'


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	// 状态管理
	const store = Pinia.createPinia()
	// 持久化
	store.use(createUnistorage())
	app.use(store)

	// app.use(Pinia.createPinia());
	app.use(uviewPlus)
	return {
		app,
		Pinia
	}
}
// #endif