import VueRouter from 'vue-router'
import HomeView from '@/view/home-view.vue'
import ParseCert from '@/view/parse-cert/parse-cert.vue'
import UploadFile from '@/view/upload/upload-file.vue'
import EchartUseExample from '@/view/echarts/use-example.vue'
import ExcelUseExample from '@/view/excel/use-example.vue'
import StylePenetrateExample from "@/view/style-penetrate/style-penetrate-example.vue"
import DraggableExample from '@/view/draggable/draggable-example.vue'
import ElementUiCustomize from '@/view/element-ui-customize/main-page.vue'

const router = new VueRouter({
  routes: [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/parse-cert',
    name: 'ParseCert',
    component: ParseCert
  },
  {
    path: '/upload-file',
    name: 'UploadFile',
    component: UploadFile
  },
  {
    path: '/echart-use-example',
    name: 'EchartUseExample',
    component: EchartUseExample
  },
  {
    path: '/excel-use-example',
    name: 'ExcelUseExample',
    component: ExcelUseExample
  },
  {
    path: '/style-penetrate-example',
    name: 'StylePenetrateExample',
    component: StylePenetrateExample
  },
  {
    path: '/draggable-example',
    name: 'DraggableExample',
    component: DraggableExample
  },
  {
    path: '/element-ui-customize',
    name: 'ElementUiCustomize',
    component: ElementUiCustomize
  }
  ]
})

export default router
