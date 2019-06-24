<template>
  <div class="index">
    <div class="banner">
      <!-- <h2>{{$t('message.index.txt29')}}</h2> -->
      <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions1"
            style="height : 700px !important"
          ></video-player>
    </div>
    <main>
      <div class="topMain">
        <div class="left">
          <div>{{$t('message.index.txt6')}}</div>
          <p>{{$t('message.index.txt7')}}</p>
        </div>
        <div class="right">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
      </div>
      <div class="line"></div>
      <h3>{{$t('message.index.txt8')}}</h3>
      <p class="power">{{$t('message.index.txt9')}}</p>
      <div class="main">
        <div>
          <p class="title">{{$t('message.index.txt10')}}</p>
          <div class="img"></div>
          <p class="txt">{{$t('message.index.txt13')}}</p>
          <button>{{$t('message.index.txt11')}}</button>
        </div>
        <div>
          <p class="title">{{$t('message.index.txt16')}}</p>
          <div class="img"></div>
          <p class="txt">{{$t('message.index.txt14')}}</p>
          <button>{{$t('message.index.txt17')}}</button>
        </div>
        <div>
          <p class="title">{{$t('message.index.txt12')}}</p>
          <div class="img"></div>
          <p class="txt">{{$t('message.index.txt15')}}</p>
          <button>{{$t('message.index.txt18')}}</button>
        </div>
      </div>
      <div class="line1"></div>
      <div class="botMain">
        <p class="title">{{$t('message.index.txt19')}}</p>
        <p class="title2">{{$t('message.index.txt20')}}</p>
        <p class="txt">{{$t('message.index.txt21')}}</p>
        <div class="img">
          <div class="left">
            <div class="top"></div>
            <p>{{$t('message.index.txt22')}}</p>
          </div>
          <div class="right">
            <div class="top"></div>
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
      playerOptions1: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4',
            src:Mp //url地址
          }
        ],
        poster: '', //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false //全屏按钮
        }
      },
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4',
            src:'' //url地址
          }
        ],
        poster: '', //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
    }
  },
  mounted() {
    
    setTimeout(() => {
      document.querySelector('.line9').style.display = 'block'
      document.querySelector('.video-js').style.height = '700px'
    }, 1000);
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  // background: url('../assets/indexbanner.png') no-repeat;
  // background-size: cover;
  .video-player {
    height: 100%;
    width: 100%;
    .video-js {
      height : 700px !important;
    }
  }
  h2 {
    font-size: 60px;
    font-family: ProximaNova-Regular;
    font-weight: 400;
    color: rgba(254, 254, 254, 1);
    text-align: center;
    margin: 0;
  }
}
main {
  .topMain {
    margin-top: 104px;
    // background: red;
    display: flex;
    justify-content: space-between;
    .right {
      width: 482px;
      height: 350px;
      // background: #aaa;
      //   background:url('../assets/vedio.png') no-repeat;
      //   background-size: cover;
      //  .video-js .vjs-big-play-button {
      //   }
    }
    .left {
      div {
        font-size: 36px;
        font-family: ProximaNova-Regular;
        font-weight: 100;
        color: rgba(34, 34, 34, 1);
        line-height: 54px;
        width: 596px;
      }
      p {
        margin-top: 50px;
        width: 560px;
        height: 66px;
        font-size: 28px;
        font-family: SourceHanSerifCN-Medium;
        font-weight: 100;
        font-style: italic;
        color: rgba(68, 68, 68, 1);
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
    font-family: ProximaNova-Regular;
    font-weight: 100;
    color: rgba(34, 34, 34, 1);
    margin-top: 60px;
  }
  .power {
    font-size: 28px;
    font-family: Bodoni-Normal-Italic;
    font-weight: 100;
    font-style: italic;
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
        font-family: ProximaNova-Regular;
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
        font-family: ProximaNova-Regular;
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
        font-family: ProximaNova-Regular;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        margin-top: 44px;
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
      font-family: ProximaNova-Regular;
      font-weight: 100;
      color: rgba(34, 34, 34, 1);
      margin-top: 65px;
    }
    .title2 {
      font-family: Bodoni-Normal-Italic;
      font-weight: 100;
      font-style: italic;
      color: rgba(34, 34, 34, 1);
      margin-top: 38px;
      font-size: 28px;
    }
    .txt {
      font-size: 13px;
      font-family: ProximaNova-Regular;
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
          font-size: 12px;
          font-family: ProximaNova-Regular;
          font-weight: 100;
          color: rgba(68, 68, 68, 1);
          margin-top: 21px;
        }
      }
      .right {
        .top {
          width: 480px;
          height: 536px;
          background: url('../assets/index5.png') no-repeat;
          background-size: cover;
        }
        p {
          font-size: 12px;
          font-family: ProximaNova-Regular;
          font-weight: 400;
          color: rgba(68, 68, 68, 1);
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
      font-family: ProximaNova-Regular;
      font-weight: 100;
      color: rgba(34, 34, 34, 1);
      margin-top: 65px;
    }
    .title2 {
      font-family: Bodoni-Normal-Italic;
      font-weight: 100;
      font-style: italic;
      color: rgba(34, 34, 34, 1);
      margin-top: 38px;
    }
    .fotImg {
      display: flex;
      justify-content: space-between;
      margin-top: 97px;
      > div {
        width: 376px;
        .img {
          width: 100%;
          height: 250px;
          background: lime;
        }
        p {
          font-size: 12px;
          font-family: ProximaNova-Regular;
          font-weight: 400;
          color: rgba(109, 109, 109, 1);
          line-height: 18px;
          margin-top: 21px;
          width: 298px;
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
