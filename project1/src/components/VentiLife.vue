<template>
  <div class="index">
    <div class="banner">
        <!-- <img src="../assets/ba440898a9c4ce92e73d02bdc0b7734.png" class="bannerImg" alt=""> -->
        <h2>{{$t('message.ventiLife.txt0')}}</h2>
        <img src="../assets/par.jpg" alt="">
    </div>
    <main>
      <div class="wr">
      <div class="venImg">
        <div class="topBox"><img src="../assets/venImg.jpg" alt=""></div>
      </div>
      <!-- <div class="top">
            <div class="topBox"><img src="../assets/7caf85b2e1d98e0651b1887e0b47615.png" alt=""></div>
            <div class="topBox"><img src="../assets/b5bc4d7aca7255eb806263b7c53249c.png" alt=""></div>
            <div class="topBox"><img src="../assets/bff8c9b0eff49ff55e7fccea09dbe9fe.png" alt=""></div>
            <div class="topBox"><img src="../assets/d22c307ffed4a81b55b46e37b4c3d454.png" alt=""></div>
      </div>
      <div class="bottom">
            <div class="bottomBox">
                <div class="oneImg"><img src="../assets/SkbEXPnEhz.png" alt=""></div>
                <div class="twoImg"><img src="../assets/rklUefa-z7.png" alt=""></div>
            </div>
            <div class="bottomBox">
                <div class="threeImg"><img src="../assets/8ea0c7157eeb60d2dd413fe23edfc6f5.png" alt=""></div>
                <div class="fourImg"><img src="../assets/3323f593e69d4c444285142edd9576f.png" alt=""></div>
            </div>
            <div class="bottomBox">
                <div class="oneImg"><img src="../assets/a5e37110bf29c206d148700a02e8133.png" alt=""></div>
                <div class="twoImg"><img src="../assets/890f3ad6cfc09fce07eee3d7a13214d.png" alt=""></div>
            </div>
      </div> -->
      </div>
    </main>
  </div>
</template>

<script>
import Header from './headerApp.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
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
    // background: url('../assets/par.jpg') no-repeat center  ;
    // background-size:100% 100%;
  position: relative;
}
main {
  .wr {
    width: 1210px;
    margin: 0 auto;
  }
  .venImg{
    width: 100%;
    height: 1200px;
    margin-top:95px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .top{
      margin-top:155px;
      display: flex;
      justify-content: space-between;
      .topBox{
          width: 285px;
          height: 285px;
      }
  }
  .bottom{
      margin-top:41px;
      display: flex;
      margin-bottom:265px;
      justify-content: space-between;
      .bottomBox{
        width: 380px;
        height: 868px;
        .oneImg,.fourImg{
        width: 100%;
        height: 542px;
        margin-bottom: 30px;
        }
        .twoImg,.threeImg{
            width: 100%;
            height: 296px;
        }
        .fourImg{
            margin-top:30px;
        }
      }
  }
}
</style>
