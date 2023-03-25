import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Router from './router'

// echarts示例需要的引入全局的配置
import '@/view/echarts'

// element-UI组件按需引入
import { 
  Upload,
  Icon,
  Message,
  Button,
  Dialog,
  MessageBox,
  Select,
  Option,
  CheckboxGroup,
  Checkbox
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Upload)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
