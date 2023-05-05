import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Router from './router'

// echarts示例需要的引入全局的配置
import '@/dependencies/echarts'

// 引入饿了么组件库
import '@/dependencies/element-ui'

// productionTip设置为 false ，可以阻止 vue 在生产模式下生成提示
// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
