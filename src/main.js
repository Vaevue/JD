import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jsonp from 'jsonp'
import './assets/css/reset.css'
Vue.config.productionTip = false
Vue.prototype.jsonp = jsonp
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
