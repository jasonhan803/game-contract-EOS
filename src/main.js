// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import router from './router'
import Utils from './assets/js/utils'
import './common/filters'

Vue.config.productionTip = false

Vue.use(VueSweetalert2)
Vue.prototype.$utils = Utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
