<template>
  <div class="index">
    <div class="banner">
      <h2>Cheaper. Flexible. Accurate. Reliable.</h2>
    </div>
    <main>
      <div class="toMain">AN AUTONOMY LEADER.</div>
      <div class="content">
        <div class="right">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
        <div class="left">
          <div class="leftSize">TECHNOLOGY APPLICATIONS</div>
          <div class="leftCont">
            Venti’s technology is universal with applications in moving people and
            specialty vehicles in moving goods. For people, our reliable and safe
            vehicles are cost-effective, comfortable, convenient and calming.
            They give back time, so needed in our busy world. Happy rides for
            happy people!
          </div>
          <div class="leftSize">TECHNOLOGY ADVANTAGES</div>
          <div class="leftCont">
            Our autonomy technologies are cost-effective solutions to many
            logistics and specialty vehicle applications. Venti’s vehicles are
            cheaper, flexible, accurate, and reliable. They adapt to complex route
            conditions and decrease operations costs for a variety of industrial
            needs.
          </div>
          <div class="leftCont">
            We can map a new area in half a day and add autonomy to a new
            vehicle within a week including the drive by wire hardware conve
            Importantly, our autonomy solution is cheaper than the competition
            cause of the maturity of the underlying system. Our algorithms, rather
            than the sensors, do the heavy lifting, enabling a less expensive
            hardware design and lower costs for the customer.
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '../components/headerApp.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
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
            type: '',
            src: '' //url地址
          }
        ],
        poster: '../../static/images/test.jpg', //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  background: url('../assets/2/header.png') no-repeat;
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
  margin-top: 134px;
  .toMain {
    font-size: 28px;
    font-family: Bodoni-Normal-Italic;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
  }
  .content {
    margin-top: 70px;
    display: flex;
    .right {
      width: 685px;
      height: 445px;
      .video-player {
        width: 100%;
        height: 100%;
      }
      .video-js .vjs-big-play-button {
      }
    }
    .left {
      margin-left: 35px;
      flex: 1;
      .leftSize {
        width: 100%;
        line-height: 52px;
        font-size: 28px;
        font-family: Bodoni-Normal-Italic;
        font-weight: 400;
        color: rgba(68, 68, 68, 1);
      }
      .leftCont {
        width: 100%;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 16px;
        font-family: ProximaNova-Light;
        font-weight: 300;
        color: rgba(68, 68, 68, 1);
        line-height: 24px;
      }
    }
  }
}
</style>

