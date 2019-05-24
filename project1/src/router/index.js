import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Team from '@/components/Team'
import VentiLife from '@/components/VentiLife'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:'/team',
      name:'team',
      component:Team
    },{
      path:'/ventiLife',
      name:'ventiLife',
      component: VentiLife
    }
  ]
})
