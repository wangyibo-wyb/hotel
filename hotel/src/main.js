import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vconsol from 'vconsole';
import 'u-reset.css';
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant);

new Vconsol();
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
