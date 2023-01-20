import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'

import './assets/main.css'

new Vue({
  render: (h) => h(App)
}).$mount('#app')

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)