import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入样式
import './assets/gloable.css';
Vue.config.productionTip = false
Vue.use(ElementUI, { size: "small" });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
