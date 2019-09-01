<template>
  <div class="index">
    <div class="banner">
      <h2>{{ $t("message.parthers.txt0") }}</h2>
      <img src="../assets/par.png" alt="">
    </div>
    <main>
      <div class="wr">
      <div class="mainHead">{{ $t("message.parthers.txt1") }}</div>
      <!-- <div class="mainPower">{{ $t("message.parthers.txt2") }}</div> -->
      <div class="mainHead mainCom">{{ $t("message.parthers.txt3") }}</div>
      <div class="mainSelf">
        <div class="selfImg one">
          <img src="../assets/partherLeft.png" alt="" />
        </div>
        <div class="selfImg two">
          {{ $t("message.parthers.txt4") }}
        <div>
          <img src="../assets/HW & Neolix CEO shaking hands.jpg" alt="">
          <img src="../assets/HW & Neolix CEO shaking hands2.jpg" alt="">
        </div>
        </div>
        <div>
          
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
          <div class="lefstWork">
            {{ $t("message.parthers.txt9") }}
          </div>
          <div class="leftWork">
            {{ $t("message.parthers.txt7") }}
          </div>
          
        </div>
        <div class="right">
          <div class="rightVideo">
            <video id="videL" src="http://www.myzhangyao.com/static/Venti_ChinaLife_Short19.mp4"  playsinline controls controlsList="nodownload"></video>
          </div>
        </div>
      </div>
      <div class="leftImg">
        <!-- <div class="imgPart">
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
        </div> -->
        <!-- <div class="imgPart">
          <img src="../assets/14.png" alt />
        </div>
        <div class="imgPart">
          <img src="../assets/15.png" alt />
        </div> -->
      </div>
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
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Header
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
  // background: url("../assets/par.png") no-repeat center;
  // background-size:100% ;
  // background-attachment:fixed;
 position: relative;
}
main {
  // width: 95%;
  margin: 0 auto;
  margin-top: 115px;
  .wr {
    width: 1210px;
    margin: 0 auto;
  }
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
    font-style: oblique;
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
    justify-content: space-between;
    .selfImg {
      width:560px;
      height:377px;
      // margin-right: 32px;
      
       img {
        width: 100%;
        height: 100%;
      }
      .partherImg{
        width: 100%;
        height: 219px;
        margin-top:16px;
      }
    }

    .two {
      margin-left: 80px;
      flex: 1;
      // width: 300px;
      >div {
        height: 100%;
        width: 100%;
        display: flex;
       img {
         height: 214px;;
         margin-top: 20px;
         width: 280px;
         flex: 1;
         
       }
       img:nth-child(1) {
         margin-right: 5px;
       }
       img:nth-child(2) {
         margin-left: 5px;
       }
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
    justify-content: space-between;
    .left {
     width:560px;
      .leftSize {
        font-size: 25px;
        font-family: Bodoni-Normal-Italic;
        font-weight: 400;
        color: rgba(68, 68, 68, 1);
        line-height: 42px;
        font-style: oblique;
        margin-top: 30px;
            font-style: normal;
      }
      .leftWork {
        margin-top: 35px;
        font-size: 16px;
        font-family: jian;
        font-weight: 300;
        color: rgba(68, 68, 68, 1);
        line-height: 24px;
      }
      .lefstWork {
        margin-top: 35px;
        font-size: 16px;
        font-family: jian;
        font-weight: 300;
        color: rgba(68, 68, 68, 1);
        line-height: 24px;
      }
    }
    .right {
      width:569px;
      height:370px;
      // margin-left: 44px;
      video {
        height: 100%;
        width: 100%;
      }
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
