import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Router from './router'

import { 
  Upload,
  Icon
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Upload)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
