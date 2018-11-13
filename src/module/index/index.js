import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from './add'
import List from './list'

require('assets/a.css')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/add',
      component: Add
    },
    {
      path: '/list',
      component: List
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router: router
}).$mount('#index')
