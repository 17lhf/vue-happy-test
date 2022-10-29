import VueRouter from 'vue-router'
import HomeView from '@/view/home-view.vue'
import ParseCert from '@/view/parse-cert/parse-cert.vue'
import UploadFile from '@/view/upload/upload-file.vue'

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
  }
  ]
})

export default router
