import Vue from 'vue'

// element-UI组件按需引入
import {
  Form,
  FormItem,
  Upload,
  Icon,
  Message,
  Button,
  Dialog,
  MessageBox,
  Select,
  Option,
  CheckboxGroup,
  Checkbox,
  Collapse,
  CollapseItem,
  Input,
  Table,
  TableColumn,
  Cascader,
  Pagination,
  DatePicker,
  Radio,
  RadioGroup,
  Tabs,
  TabPane
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Cascader)
Vue.use(Pagination)
Vue.use(DatePicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt