import Vue from 'vue/dist/vue.common.js'
import App from './app'
import routes from './route'
import { install as Valkyrie } from 'src/index'
import VueRouter from 'vue-router'
import './utils/rem'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    if (window.FastClick) window.FastClick.attach(document.body)
  },
  false,
)

Vue.use(Valkyrie)
Vue.use(VueRouter)

console.log(routes)

const router = new VueRouter({
  base: __dirname,
  routes,
})

new Vue({
  // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router,
})

let indexScrollTop = 0
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }
  document.title = route.meta.title || document.title
  next()
})

router.afterEach((route) => {
  if (route.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }
})
