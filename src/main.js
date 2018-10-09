// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: 'd4299daeeb269ad4be29a8a1f7b1ec3cb5b9acaf' })
import auth from '@/auth'
Vue.use(auth)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
