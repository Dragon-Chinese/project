
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Team from '@/components/Team'
import VentiLife from '@/components/VentiLife'
import Us from '@/components/Us'
import Craeers from '@/components/Craeers'
import Technology from '@/components/Technology';
import Parthers from '@/components/Parthers'
import News from '@/components/News'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:'/us',
      name:'us',
      component:Us
    },{
      path:'/team',
      name:'team',
      component:Team
    },{
      path:'/ventiLife',
      name:'ventiLife',
      component: VentiLife
    },
    {
      path:'/craeers',
      name:'craeers',
      component:Craeers
    },  {
      path:'/technology',
      name:'technology',
      component:Technology
    }, {
      path:'/parthers',
      name:'parthers',
      component:Parthers
    },
    {
      path:'/news',
      name:'news',
      component:News
    }
  ]
})
