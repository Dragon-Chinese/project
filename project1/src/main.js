// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n';
import English from './static/English'
import Chinese from './static/Chinese'
import VideoPlayer from 'vue-video-player'
import 'swiper/dist/css/swiper.css';
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video
Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(VideoPlayer)
const messages = {
  Eng: Object.assign(English),
  Cha: Object.assign(Chinese)
};
/* eslint-disable no-new */
let defaulti18n = window.localStorage.getItem('defaulti18n')

const i18n = new VueI18n({
  //定义默认语言
  locale: defaulti18n ? defaulti18n : 'Eng',
  fallbackLocale: defaulti18n ? defaulti18n : 'Eng',
  messages
})

Vue.prototype.rem = function () {
  document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 7.5 + 'px'
  document.querySelector('.wrap').style.display = 'none'
  document.querySelector('.line9').style.display = 'none'
}

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
