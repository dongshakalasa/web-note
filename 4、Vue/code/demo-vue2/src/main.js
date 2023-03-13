import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index'

import mixin from '@/utils/mixin'

Vue.config.productionTip = false

Vue.mixin(mixin)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
