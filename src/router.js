import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import DashboardView from './View/DashboardView.vue'
import LoginView from './View/LoginView.vue'

const routes = [
  { path: '/', redirect: '/login' }, 
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: DashboardView }
]

const router = new VueRouter({
  routes 
})
export default router;
