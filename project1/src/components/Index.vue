<template>
  <div class="index">
    <div class="banner">
      <h2>{{$t('message.index.txt29')}}</h2>
      <!-- <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions1"
          ></video-player> -->
          <video src="http://www.myzhangyao.com/static/1563988027277423.mp4" style="width:100%" autoplay loop muted playsinline>
          </video>
          <!-- <div class="meng"></div> -->
    </div>
    <main>
      <div class="wr">

      
      <div class="topMain">
        <div class="left">
          <div class="fontTxt">{{$t('message.index.txt6')}}</div>
          <p>{{$t('message.index.txt7')}}</p>
        </div>
        <div class="right" @contextmenu="false">
           <video id="videL" src="http://www.myzhangyao.com/static/Venti_Chinalife_Short_Final_Version.mp4"  playsinline controls controlsList="nodownload"></video>
        </div>
      </div>
      <div class="line"></div>
      <h3 >{{$t('message.index.txt8')}}</h3>
      <p class="power">{{$t('message.index.txt9')}}</p>
      <div class="main">
        <div>
          <p class="title">{{$t('message.index.txt10')}}</p>
          <div class="img"></div>
          <p class="txt">{{$t('message.index.txt13')}}</p>
          <button  @click="$router.push('/Technology')">{{$t('message.index.txt16')}}</button>
        </div>
        <div>
          <p class="title">{{$t('message.index.txt11')}}</p>
          <div class="img"></div>
          <p class="txt">{{$t('message.index.txt14')}}</p>
          <button @click="$router.push('/parthers')">{{$t('message.index.txt17')}}</button>
        </div>
        <div>
          <p class="title">{{$t('message.index.txt12')}}</p>
          <div class="img"></div>
          <p class="txt">{{$t('message.index.txt15')}}</p>
          <button  @click="$router.push('/team')">{{$t('message.index.txt18')}}</button>
        </div>
      </div>
      <div class="line1"></div>
      <div class="botMain">
        <p class="title">{{$t('message.index.txt19')}}</p>
        <p class="title2">{{$t('message.index.txt20')}}</p>
        <p class="txt">{{$t('message.index.txt21')}}</p>
        <div class="img">
          <div class="left">
            <div class="top">

            </div>
            <p>{{$t('message.index.txt22')}}</p>
          </div>
          <div class="right">
            <div class="top">
              <!-- <img src="../assets/123.gif" alt=""> -->
              <img src="../assets/che.jpeg" alt="">
            </div>
            <p>{{$t('message.index.txt23')}}</p>
          </div>
        </div>
      </div>
      <div class="line3"></div>
      <div class="bottom">
        <p class="title">{{$t('message.index.txt24')}}</p>
        <p class="title2">{{$t('message.index.txt25')}}</p>
        <div class="fotImg">
          <div>
            <div class="img"></div>
            <p>{{$t('message.index.txt26')}}</p>
          </div>
          <div>
            <div class="img"></div>
            <p>{{$t('message.index.txt27')}}</p>
          </div>
          <div>
            <div class="img"></div>
            <p>{{$t('message.index.txt28')}}</p>
          </div>
        </div>
      </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './headerApp.vue'
import Mp from '../assets/v1.webm'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
    }
  },
  mounted() {
    
    var videL = document.getElementById('videL');
    videL.addEventListener("webkitfullscreenchange", function(e) {
    if (!document.webkitIsFullScreen) {
       //退出全屏关闭视频
       videL.pause();
     };
    })
  },
  methods: {
    fa () {
      return false;
    }
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@font-face {
  font-family: 'v1';
  src: url('../assets/gbk.ttf');
}
@font-face {
  font-family: 'hua';
  src: url('../assets/hua.otf');
}
@font-face {
  font-family: 'jian';
  src: url('../assets/jian.ttf');
}
.banner {
  min-height: 0;
  // margin-top: 100px;
  // background: url('../assets/indexbanner.png') no-repeat;
  // background-size: cover;
  position:relative;
    padding-bottom:56.25%;    /*需要用padding来维持16:9比例,也就是9除以16*/
    height: 0;
    .meng {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, .5);
      left: 0;
      top: 0;
      z-index: 99;
    }
  video {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    // height:100%;
    // background: red; 
  }
  h2 {
    position: absolute;
    font-size: 62px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: rgba(254, 254, 254, 1);
    text-align: center;
    margin: 0;
    z-index: 999;
    top: 50%;
    margin-top: -24px;
    z-index: 9999;
  }
}
main {
  // width: 99%;
  .wr {
    width: 1210px;
    margin: 0 auto;
  }
  .topMain {
    margin-top: 104px;
    // background: red;
    display: flex;
    justify-content: space-between;
    .right {
      width: 482px;
      height: 350px;
      margin-top: -30px;
      video {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
      }
      
      video::-webkit-media-controls-fullscreen-button {
display: none;
}
      // background: #aaa;
      //   background:url('../assets/vedio.png') no-repeat;
      //   background-size: cover;
      //  .video-js .vjs-big-play-button {
      //   }
      // ProximaNova-aRegular
    }
    .left {
      div {
        font-size: 36px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 100 !important;
        color: rgba(34, 34, 34, 1);
        line-height: 54px;
        width: 596px;
      }
      p {
        margin-top: 50px;
        width: 560px;
        height: 66px;
           font-size: 28px;
        font-family: hua;
        font-weight: 100;
        font-style: oblique;
        color: #222222;
        line-height: 42px;
      }
    }
  }
  .line {
    margin-top: 111px;
    width: 100%;
    height: 1px;
    background: rgba(232, 232, 232, 1);
  }
  h3 {
    font-size: 36px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;
    color: #222;
    margin-top: 60px;
  }
  .power {
    font-size: 28px;
    font-family: hua;
    font-weight: 100 !important;
    font-style: oblique;
    color: rgba(34, 34, 34, 1);
    margin-top: 48px;
  }
  .main {
    display: flex;
    justify-content: space-between;
    margin-top: 68px;
    > div {
      display: flex;
      flex-direction: column;
      width: 378px;
      .title {
        font-size: 22px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
      }
      .img {
        width: 378px;
        height: 284px;
        background: #aaa;
        margin-top: 38px;
      }
      .txt {
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        color: rgba(68, 68, 68, 1);
        margin-top: 39px;
        line-height: 24px;
        height: 37px;
      }
      button {
        width: 277px;
        height: 46px;
        border: 2px solid rgba(0, 0, 0, 1);
        border-radius: 3px;
        outline: none;
        cursor: pointer;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        margin-top: 44px;
        background: #fff;
      }
      button:hover {
        background: #000;
        color: #fff;
      }
    }
    > div:nth-child(1) {
      .img {
        background: url('../assets/index1.png') no-repeat;
        background-size: cover;
      }
    }
    > div:nth-child(2) {
      .img {
        background: url('../assets/index2.png') no-repeat;
        background-size: cover;
      }
    }
    > div:nth-child(3) {
      .img {
        background: url('../assets/index3.png') no-repeat;
        background-size: cover;
      }
    }
  }
  .line1 {
    width: 100%;
    height: 1px;
    background: rgba(232, 232, 232, 1);
    margin-top: 40px;
  }
  .botMain {
    .title {
      font-size: 36px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 100;
      color: rgba(34, 34, 34, 1);
      margin-top: 65px;
    }
    .title2 {
      font-family: hua;
      font-weight: 100;
      font-style: italic;
      color: rgba(34, 34, 34, 1);
      margin-top: 38px;
      font-size: 28px;
    }
    .txt {
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      color: rgba(68, 68, 68, 1);
      line-height: 24px;
      margin-top: 36px;
    }
    .img {
      margin-top: 41px;
      display: flex;
      justify-content: space-between;
      .left {
        .top {
          background: url('../assets/index4.png') no-repeat;
          background-size: cover;
          width: 686px;
          height: 536px;
        }
        p {
           font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      color: rgba(68, 68, 68, 1);
      line-height: 24px;
      margin-top: 21px;
        }
      }
      .right {
        .top {
          width: 480px;
          height: 536px;
          position: relative;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;;
    //             left: -74.0978%;
    // top: 0%;
    // width: 248.196%;
    // height: 100%;
    // position: absolute;
          }
          // background: url('../assets/234.jpg') no-repeat;
          // background-size: cover;
        }
        p {
          font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      color: rgba(68, 68, 68, 1);
      line-height: 24px;
      margin-top: 21px;
        }
      }
    }
  }
  .line3 {
    width: 100%;
    height: 1px;
    background: rgba(232, 232, 232, 1);
    margin-top: 40px;
  }
  .bottom {
    .title {
      font-size: 36px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 100;
      color: rgba(34, 34, 34, 1);
      margin-top: 65px;
    }
    .title2 {
      font-size: 28px;
      font-family: hua;
      font-weight: 100;
      font-style: oblique;
      color: rgba(34, 34, 34, 1);
      margin-top: 38px;
    }
    .fotImg {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      > div {
        width: 376px;
        .img {
          width: 100%;
          height: 250px;
          background: lime;
        }
        p {
         font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      color: rgba(68, 68, 68, 1);
      line-height: 24px;
      margin-top: 21px;
          // width: 298px;
        }
      }
      > div:nth-child(1) {
        .img {
          background: url('../assets/index6.png') no-repeat;
          background-size: cover;
        }
      }
      > div:nth-child(2) {
        .img {
          background: url('../assets/index7.png') no-repeat;
          background-size: cover;
        }
      }
      > div:nth-child(3) {
        .img {
          background: url('../assets/index8.png') no-repeat;
          background-size: cover;
        }
      }
    }
  }
}
</style>
