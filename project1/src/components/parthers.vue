<template>
  <div class="index">
    <div class="banner">
      <h2>{{ $t("message.parthers.txt0") }}</h2>
    </div>
    <main>
      <div class="mainHead">{{ $t("message.parthers.txt1") }}</div>
      <div class="mainPower">{{ $t("message.parthers.txt2") }}</div>
      <div class="mainHead mainCom">{{ $t("message.parthers.txt3") }}</div>
      <div class="mainSelf">
        <div class="selfImg">
          <img src="../assets/img2.jpg" alt="" />
        </div>
        <div class="selfImg">
          {{ $t("message.parthers.txt4") }}
        </div>
      </div>
      <!-- <div class="mainHead mainInd">{{ $t("message.parthers.txt5") }}</div> -->
      <!-- <div class="mainHr"></div> -->
      <div class="mainContent">
        <div class="left">
          <div class="mainHead mainSpe">{{ $t("message.parthers.txt6") }}</div>
          <div class="leftSize">
            {{ $t("message.parthers.txt8") }}
          </div>
          <div class="leftWork">
            {{ $t("message.parthers.txt7") }}
          </div>
          <div class="lefstWork">
            {{ $t("message.parthers.txt9") }}
          </div>
        </div>
        <div class="right">
          <div class="rightVideo">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
        </div>
      </div>
      <div class="leftImg">
        <div class="imgPart">
          <img src="../assets/13.png" alt />
        </div>
        <div class="imgPart">
          <img src="../assets/12.png" alt />
        </div>
        <div class="imgPart">
          <img src="../assets/11.png" alt />
        </div>
        <div class="imgPart">
          <img src="../assets/10.png" alt />
        </div>
        <div class="imgPart">
          <img src="../assets/9.png" alt />
        </div>
        <!-- <div class="imgPart">
          <img src="../assets/14.png" alt />
        </div>
        <div class="imgPart">
          <img src="../assets/15.png" alt />
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/headerApp.vue";
import Mp from "../assets/v1.webm";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: Mp //url地址
          }
        ],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  background-image: url("../assets/par.png");
  background-size: cover;
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
  margin-top: 115px;
  .mainHead {
    font-size: 36px;
    font-family: ProximaNova-Light;
    font-weight: 300;
    color: rgba(68, 68, 68, 1);
  }
  .mainPower {
    margin-top: 49px;
    font-size: 28px;
    font-family: Bodoni-Normal-Italic;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    line-height: 42px;
  }
  .mainCom {
    margin-top: 60px;
  }
  .mainSelf {
    margin-top: 55px;
    font-size: 16px;
    font-family: ProximaNova-Light;
    font-weight: 300;
    color: rgba(68, 68, 68, 1);
    line-height: 24px;
    display: flex;
    .selfImg {
      width: 580px;
      height: 378px;
      margin-right: 32px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .mainInd {
    margin-top: 120px;
  }
  // .mainHr {
  //   margin-top: 100px;
  //   width: 1200px;
  //   height: 1px;
  //   background: rgba(232, 232, 232, 1);
  // }
  .mainContent {
    margin-top: 63px;
    display: flex;
    .left {
      // width: 572px;
      flex: 1;
      .leftSize {
        font-size: 25px;
        font-family: Bodoni-Normal-Italic;
        font-weight: 400;
        color: rgba(68, 68, 68, 1);
        line-height: 42px;
      }
      .leftWork {
        margin-top: 46px;
        font-size: 16px;
        font-family: ProximaNova-Light;
        font-weight: 300;
        color: rgba(68, 68, 68, 1);
        line-height: 24px;
      }
      .lefstWork {
        margin-top: 20px;
        font-size: 16px;
        font-family: ProximaNova-Light;
        font-weight: 300;
        color: rgba(68, 68, 68, 1);
        line-height: 24px;
      }
    }
    .right {
      flex: 1;
      margin-left: 32px;
      // margin-top: 20px;
      // .rightVideo {
      //   margin-top: 48px;
      //   width: 480px;
      //   height: 312px;
      //   background:url('../assets/vedio.png') no-repeat;
      //   background-size: cover;
      // }
      // .video-js .vjs-big-play-button {
      //   }
    }
  }
  .leftImg {
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    .imgPart {
      width: 230px;
      height: 230px;
      margin-left: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
