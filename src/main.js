import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'
import './assets/css/css_slider.css'
import router from './router'
import './config/firebaseConfig'

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
