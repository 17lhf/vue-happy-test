import VueRouter from 'vue-router'
import HomeView from '@/view/home-view.vue'
import Cryptography from '@/view/cryptography/main-page.vue'
import UploadFile from '@/view/upload/upload-file.vue'
import EchartUseExample from '@/view/echarts/use-example.vue'
import ExcelUseExample from '@/view/excel/use-example.vue'
import StyleHome from '@/view/style-customize/style-home.vue'
import DraggableExample from '@/view/draggable/draggable-example.vue'
import ElementUiCustomize from '@/view/element-ui-customize/main-page.vue'
import Backend from '@/view/backend/backend-home.vue'
import Animation from '@/view/animation/animation-home.vue'
import FileShow from '@/view/file/main-page.vue'

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
    path: '/cryptography',
    name: 'Cryptography',
    component: Cryptography
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
    path: '/style-home',
    name: 'StyleHome',
    component: StyleHome
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
  },
  {
    path: '/backend',
    name: 'Backend',
    component: Backend
  },
  {
    path: '/animation',
    name: 'Animation',
    component: Animation
  },
  {
    path: '/fileShow',
    name: 'FileShow',
    component: FileShow
  }
  ]
})

export default router
