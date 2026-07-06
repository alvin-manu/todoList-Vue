import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false

const toastOptions = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
};

Vue.use(Toast, toastOptions);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
