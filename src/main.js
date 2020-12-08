import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import sgMail from '@sendgrid/mail'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'
import './assets/css/css_slider.css'
import router from './router'

Vue.use(Vuelidate)
Vue.config.productionTip = false
sgMail.setApiKey(process.env.VUE_APP_SENDGRID_API_KEY)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
