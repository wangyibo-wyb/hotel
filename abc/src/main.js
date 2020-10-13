import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "u-reset.css";
import axios from 'axios';
import filter from "./filter/filter";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$http = axios;

Object.keys(filter).forEach(ele=>{
  Vue.filter(ele,filter[ele]);
})





