// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: '22d004e7e7fc95f6f5965d6ecf75ead219c558bd' })
import auth from '@/auth'
Vue.use(auth)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
