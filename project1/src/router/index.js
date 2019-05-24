
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Team from '@/components/Team'
import Us from '@/components/Us'
import Craeers from '@/components/Craeers'
import Technology from '@/components/Technology';
import Parthers from '@/components/Parthers'
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
    }
  ]
})
