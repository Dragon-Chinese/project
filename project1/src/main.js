// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n';
import English from './static/English'
import Chinese from './static/Chinese'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

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
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
