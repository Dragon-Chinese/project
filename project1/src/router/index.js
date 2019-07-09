
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
import De from '@/components/de'
Vue.use(Router)

const router = new Router({
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
    },
    {
      path:'/team-descriptions',
      name:'de',
      component:De
    }
  ]
})

let changeL = function () {
  let browser = {
    versions: function () {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      return {
        trident: u.indexOf('Trident') > -1,
        /*IE内核*/
        presto: u.indexOf('Presto') > -1,
        /*opera内核*/
        webKit: u.indexOf('AppleWebKit') > -1,
        /*苹果、谷歌内核*/
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
        /*火狐内核*/
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        /*是否为移动终端*/
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        /*ios终端*/
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        /*android终端或者uc浏览器*/
        iPhone: u.indexOf('iPhone') > -1,
        /*是否为iPhone或者QQHD浏览器*/
        iPad: u.indexOf('iPad') > -1,
        /*是否iPad*/
        webApp: u.indexOf('Safari') == -1,
        /*是否web应该程序，没有头部与底部*/
        weixin: u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };
  // window.i = browser.language
  // window.alert('1' , browser.language)
  switch(browser.language) {
    case 'zh' : 
    return 'ZH'
    break;
    case 'zh-cn' : 
    return 'ZH' 
    break;
    case 'zh-hk' :
    return 'ZH'
    break;
    case 'ar' : 
    return 'AR'
    break;
    case 'zh-tw' :
    return 'ZH' 
    break;
    case 'ko' :
    return 'KO'
    case 'ko-kr' :
    return 'KO'
    break;
    default : 
    return 'EN'
  }
}

router.beforeEach((to, from, next) => {
  window.scroll(0, 0)
  // console.log(lo)
  // if (changeL() != 'ZH') {
  //   return window.location.href = 'https://www.ventitechnologies.com'
  // }else {
  //   return next()
  // }
  next()

})

export default router