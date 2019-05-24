import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Team from '@/components/Team'
import Us from '@/components/Us'
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
    }
  ]
})
