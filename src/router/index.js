import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import NavbarView from '../components/NavbarView.vue'

const routes = [
  {
    path: '/',
    name: 'IndexView',
    components: { default: IndexView, header: NavbarView }
  },
  {
    path: '/',
    redirect: '/'
  },
  // {
  //   path: '*',
  //   component: NotFoundPage
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
