<template>
  <div class="index">
    <div class="banner">
      <h2>{{$t('message.news.txt0')}}</h2>
      <img src="../assets/news.png" alt="">
    </div>
    <main>
      <li>
        <img src="../assets/jr.png" alt>
        <div class="txt">
          <h4><a href="https://www.toutiao.com/i6697850819087172107/?wxshare_count=5&from=singlemessage&pbid=6631041144397104644&isappinstalled=0">{{$t('message.news.txt1')}}</a></h4>
          <p>{{$t('message.news.txt2')}}</p>
          <!-- <p><a href="https://www.toutiao.com/i6697850819087172107/?wxshare_count=5&from=singlemessage&pbid=6631041144397104644&isappinstalled=0" target="_blank" rel="noopener noreferrer">https://www.toutiao.com/i6697850819087172107/?wxshare_count=5&from=singlemessage&pbid=6631041144397104644&isappinstalled=0</a></p> -->
        </div>
      </li>
      <li>
        <img src="../assets/girl.png" alt>
        <div class="txt">
          <h4><a href="https://www.forbes.com/sites/allysonkapin/2019/02/20/50-women-led-startups-who-are-crushing-tech/#701e0e3152b3">{{$t('message.news.txt3')}}</a></h4>
          <p>{{$t('message.news.txt4')}}</p>
        </div>
      </li>
    </main>
  </div>
</template>

<script>
import Header from './headerApp.vue'
import Mp from '../assets/v1.webm'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => {
      document.querySelector('.line9').style.display = 'block'
    }, 1000)
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@font-face {
  font-family: 'jian';
  src: url('../assets/jian.ttf');
}
.banner {
  // background: url('../assets/news.png') no-repeat center;
  // background-size:100% 100%;
  // background-size: cover;
  position: relative;
}
main {
  width: 95%;
  margin: 0 auto;
  padding-top: 143px;
  li {
    display: flex;
    height: 136px;
    margin-left: 90px;
    img {
      height: 100%;
      width: 176px;
    }
    .txt {
      margin-left: 47px;
      padding-top: 43px;
      h4 {
        font-size: 19px;
        font-family: jian !important;
        margin-top: -15px;
        a {
           font-weight: 600;
        }
        color: rgba(10, 10, 10, 1);
        line-height: 38px;
      }

      p , a{
        margin-top: 10px;
        font-size: 14px;
        font-family: jian !important;
        font-weight: 200;
        color: rgba(10, 10, 10, 1);
        line-height: 20px;
        white-space: nowrap;
        text-decoration: none;
      }
      p:nth-child(3) {
          font-size:14px;
            font-family:jian !important;
            font-weight:400;
            color:rgba(82,79,78,1);
            line-height:20px;
      }
    }
  }
  li:nth-child(2) {
      margin-top: 128px;
  }
}
</style>
