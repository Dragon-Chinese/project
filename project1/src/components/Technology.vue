<template>
  <div class="index">
    <div class="banner">
      <h2>{{$t('message.technology.txt0')}}</h2>
      <img src="../assets/header.jpg" alt="">
    </div>
    <main>
      <div class="wr">
      <div class="swiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width : auto"><img src="../assets/11.png" alt=""></div>
          <div class="swiper-slide" style="width : 300px"><img src="../assets/22.jpg" alt=""></div>
          <div class="swiper-slide" style="width : 100px"><img src="../assets/66.png" alt=""></div>
          <!-- <div class="swiper-slide" style="width : auto"><img src="../assets/33.jpg" alt=""></div> -->
          <div class="swiper-slide" style="width : auto"><img src="../assets/44.jpg" alt=""></div>
          
            <div class="swiper-slide" style="width : 300px"><img src="../assets/99.jpg" alt=""></div>
          <div class="swiper-slide" style="width : auto"><img src="../assets/77.jpg" alt=""></div>
          <div class="swiper-slide" style="width : 290px"><img src="../assets/55.jpg" alt=""></div>
          <div class="swiper-slide" style="width : 300px"><img src="../assets/100.png" alt=""></div>
          <div class="swiper-slide" style="width :200px"><img src="../assets/101.png" alt=""></div>
        </div>
         <div class="swiper-button-prev l"></div>
          <div class="swiper-button-next l"></div>
      </div>
      <div class="toMain">{{$t('message.technology.txt1')}}</div>
      <div class="content">
        <div class="right">
           <video id="videL"  src="http://www.myzhangyao.com/static/Venti_Technology_Demo18.mp4"  playsinline controls controlsList="nodownload"></video>
        </div>
        <div class="left">
          <div class="leftSize">{{$t('message.technology.txt2')}}</div>
          <div class="leftCont">{{$t('message.technology.txt3')}}</div>
          <div class="leftSizes">{{$t('message.technology.txt4')}}</div>
          <div class="leftCont">{{$t('message.technology.txt5')}}</div>
          <div class="leftCont">{{$t('message.technology.txt6')}}</div>
        </div>
      </div></div>
    </main>
  </div>
</template>

<script>
import Header from "../components/headerApp.vue";
import Mp from '../assets/v1.webm'
import Swiper from 'swiper';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    var videL = document.getElementById('videL');
    videL.addEventListener("webkitfullscreenchange", function(e) {
    if (!document.webkitIsFullScreen) {
       //退出全屏关闭视频
       videL.pause();
     };
    })
    this.$nextTick(() => {
      new Swiper ('.swiper-container', {
        autoplay: {
          delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        loop: true,
        // 如果需要分页器
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // loopedSlides: 5,
        //  slidesPerView : 2,
        slidesPerView : 'auto',
        //slidesPerView : 3.7,
      }) 
    }) 
  },
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@font-face {
  font-family: 'v1';
  src: url('../assets/gbk.ttf');
}
@font-face {
  font-family: 'jian';
  src: url('../assets/jian.ttf');
}
@font-face {
  font-family: 'Bodoni-Normal-Italic';
  src: url('../assets/SourceHanSerifCN-Light.otf');
}
.banner {
  // background: url("../assets/header.jpg") no-repeat center;
  // background-size:100% 100%;
  position: relative;
}
main {
    margin: 0 auto;
  margin-top: 134px;
  // width: 95%;
.wr {
    width: 1210px;
    margin: 0 auto;
  }
  .l {
    height: 60px;
    width: 44px;
        background-color: rgba(0,0,0,.12);
        color: #aaa;
  }
  .swiper{
    width: 100%;
    height:200px;
    margin-top:-100px;
    margin-bottom: 30px;
    .swiper-slide {
      margin-left: 10px;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  .toMain {
    font-size:28px;
    font-family:Bodoni-Normal-Italic;
    font-weight:400;
    color:rgba(68,68,68,1);
    font-style: none;
    // width: 200px;;
  }
  .content {
    margin-top: 30px;
    display: flex;
    .right {
      flex: 1;
      video {
        // height: 100%;
        width: 100%;
        outline: none;
        // margin-top: -100px;
      }
      // .video-player {
      //   margin-top: 48px;
      //   width: 480px;
      //   height: 312px;
      //    background:url('../assets/vedio.png') no-repeat;
      //   background-size: cover;
      // } 
      // .video-js .vjs-big-play-button {
      // }
    }
    .left {
      // margin-top: 26px;
      margin-left: 35px;
      flex: 1;
      .leftSize {
        width: 100%;
        font-size: 28px;
        font-family: jian;
        font-weight: 400;
        color: rgba(68, 68, 68, 1);
        font-style: none;
      }
      .leftCont {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 16px;
        font-size: 16px;
        font-family: jian;
        font-weight: 300;
        color: rgba(68, 68, 68, 1);
        line-height: 24px;

      }
      .leftSizes {
        width: 100%;
        font-size: 28px;
        font-family: Bodoni-Normal-Italic;
        font-weight: 400;
        color: rgba(68, 68, 68, 1);
        font-style: none;
      }
    }
  }
}
</style>

