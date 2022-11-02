import VueRouter from 'vue-router'
import HomeView from '@/view/home-view.vue'
import ParseCert from '@/view/parse-cert/parse-cert.vue'
import UploadFile from '@/view/upload/upload-file.vue'
import EchartUseExample from '@/view/echarts/use-example.vue'
import ExcelUseExample from '@/view/excel/use-example.vue'

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
  }
  ]
})

export default router
