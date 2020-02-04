import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'


// Configure vue-states plugin
import VueStates from '@sum.cumo/vue-states'
Vue.use(VueStates)

// Configure slide-down / up animation
import SlideUpDown from 'vue-slide-up-down'
Vue.component('slide-up-down', SlideUpDown)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
