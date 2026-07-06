import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import DashboardView from './View/DashboardView.vue'
import LoginView from './View/LoginView.vue'

import store from './store';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  const isAuthenticated = !!store.state.userToken && !!store.state.userid;
  console.log(isAuthenticated)

  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;
