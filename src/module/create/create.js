/* eslint-disable no-new */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from './add'
import iView from 'iview'
import 'iview/dist/styles/iview.css'


Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Add
    }
  ]
})

new Vue({
  el: '#index',
  router: router
})
