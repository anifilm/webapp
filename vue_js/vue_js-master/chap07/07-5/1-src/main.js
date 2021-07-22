import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // 컴포넌트에서 스토어를 사용할 수 있도록 함
  render: h => h(App)
}).$mount('#app')
