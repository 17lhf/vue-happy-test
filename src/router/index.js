import VueRouter from 'vue-router'
import HomeView from '@/view/home-view.vue'
import ParseCert from '@/view/parse-cert.vue'

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
  }
  ]
})

export default router
