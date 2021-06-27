import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// BootstrapVue
import './plugins/BootstrapVue'

// Vue Font-Awesome
import './plugins/FontAwesome'

import './assets/css/main.styl'

import './directives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      console.log('Hola 🌝')
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
