import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info.vue'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
      {
          path: '/countries/:id/info',
          name: 'info',
          component: Info,
          props: true
      }

  ],

    linkExactActiveClass: 'active'
})
