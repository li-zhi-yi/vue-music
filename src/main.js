import Vue from 'vue'
import App from './App'
import router from './router'

//解决border 1px的问题
import '@/assets/styles/border.css';
//重置所有样式适配移动端
import '@/assets/styles/reset.css';

//解决某些机型300ms延迟的问题
import fastClick from 'fastclick'
 //调用fastClick的方法解决
 fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
