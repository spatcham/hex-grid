import Vue from 'vue'
import Router from 'vue-router'
import HexGrid from '@/components/HexGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HexGrid',
      component: HexGrid
    }
  ]
})
