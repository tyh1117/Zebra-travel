import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
// import Address from './views/Address.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    // {
      // path: '/address',
      // component: Address
    // },
  
  
  ]
})
