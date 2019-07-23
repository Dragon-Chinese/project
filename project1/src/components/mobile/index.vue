<template>
  <div class="mobile">
    <Header/>
    <div class="m-banner">
      <h2>Venti Technologies</h2>
      <video src="http://www.myzhangyao.com/static/Loop_Home_cover_video.webm" autoplay="autoplay" loop="loop"
             muted="muted" playsinline style="width: 100%"></video>
      <div class="meng"></div>
    </div>

    <div class="m-main">
      <div class="ProximaNova-Regular">
        {{ $t("message.index.txt6") }}

      </div>

      <div class="hua">
        {{ $t("message.index.txt7") }}
      </div>

      <div class="video-index-box">
        <video class="video-index" src="http://www.myzhangyao.com/static/Venti_Chinalife_Short_Final_Version.mp4"
               muted="muted" playsinline="" controls="controls" controlsList="nodownload"></video>
      </div>

      <hr/>

      <div class="sec">

        <div class="ProximaNova-Regular">
          {{ $t("message.index.txt8") }}
        </div>

        <div class="hua">
          {{ $t("message.index.txt9") }}
        </div>

        <div class="sec-eq">
          <div class="sec-eq-top">{{ $t("message.index.txt10") }}</div>
          <!--          <div class="sec-eq-img"></div>-->
          <img src="../../assets/index1.png" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt13") }}</div>
          <!--          <a href="#">{{ $t("message.index.txt11") }}</a>-->
          <button>{{ $t("message.index.txt11") }}</button>
        </div>

        <div class="sec-eq">
          <div class="sec-eq-top">{{ $t("message.index.txt11") }}</div>
          <!--          <div class="sec-eq-img"></div>-->
          <img src="../../assets/index2.png" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt14") }}</div>
          <!--          <a href="#">{{ $t("message.index.txt11") }}</a>-->
          <button>{{ $t("message.index.txt17") }}</button>
        </div>

        <div class="sec-eq">
          <div class="sec-eq-top">{{ $t("message.index.txt12") }}</div>
          <!--          <div class="sec-eq-img"></div>-->
          <img src="../../assets/index3.png" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt15") }}</div>
          <!--          <a href="#">{{ $t("message.index.txt11") }}</a>-->
          <button>{{ $t("message.index.txt18") }}</button>
        </div>

      </div>

      <hr />

      <div class="sec">
        <div class="ProximaNova-Regular">
          {{ $t("message.index.txt19") }}
        </div>

        <div class="hua">
          {{ $t("message.index.txt20") }}
        </div>

        <div class="txt">{{ $t("message.index.txt21") }}</div>

        <div class="sec-eq">
          <img src="../../assets/index4.png" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt22") }}</div>
        </div>

        <div class="sec-eq">
          <img src="../../assets/che.jpeg" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt23") }}</div>
        </div>
      </div>

      <hr />
      <div class="sec">
        <div class="ProximaNova-Regular">
          {{ $t("message.index.txt24") }}
        </div>

        <div class="hua" style="padding-bottom: 0.8rem">
          {{ $t("message.index.txt25") }}
        </div>

        <div class="sec-eq">
          <img src="../../assets/index6.png" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt26") }}</div>
        </div>

        <div class="sec-eq">
          <img src="../../assets/index7.png" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt27") }}</div>
        </div>

        <div class="sec-eq">
          <img src="../../assets/index8.png" alt="" style="width: 100%">
          <div class="sec-eq-bottom">{{ $t("message.index.txt28") }}</div>
        </div>

      </div>

      <hr />

      <div class="footer">
        <p>&copy;Venti Tevhnologies,Inc.</p>
        <p>info@ventitechnologies.com</p>
      </div>


    </div>

  </div>
</template>
<script>
  import Header from './headerApp.vue'

  export default {
    mounted() {
      this.rem()
    },
    components: {
      Header
    }
  }
</script>
<style lang="scss" scoped>
  @font-face {
    font-family: 'v1';
    src: url('../../assets/gbk.ttf');
  }
  @font-face {
    font-family: 'hua';
    src: url('../../assets/hua.otf');
  }
  @font-face {
    font-family: 'jian';
    src: url('../../assets/jian.ttf');
  }
  .mobile {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: .26rem;
    overflow: hidden;
  }

  .m-banner {
    position: relative;
  }

  .m-banner h2 {
    position: absolute;
    font-family: zzz !important;
    font-weight: 400 !important;
    font-size: 0.52rem;
    color: #fefefe;
    text-align: center;
    width: 100%;
    margin: 0;
    z-index: 999;
    top: 50%;
    margin-top: -0.24rem;
    letter-spacing: 0.03rem;
  }

  .m-main {
    padding: 0 0.4rem 0 0.4rem;
  }

  .ProximaNova-Regular {
    font-size: 0.36rem;
    font-family: ProximaNova-Regular;
    font-weight: 100;
    color: #222222;
    line-height: 0.54rem;
    /*width: 5.96rem;*/
    text-align: left;
    padding-top: 1rem;
  }

  .hua {
    margin-top: 0.1rem;
    /*width: 560px;*/
    /*height: 66px;*/
    font-size: 0.2rem;
    font-family: hua;
    font-weight: 400;
    font-style: oblique;
    color: #222222;
    line-height: 0.42rem;
  }

  .video-index-box {
    padding: 0.5rem 0 0.5rem 0;
  }

  .video-index {
    width: 100%;

  }

  .sec {
    padding-bottom: 0.6rem;
  }

  .sec-eq-top {
    font-size: 0.22rem;
    font-family: ProximaNova-Regular;
    font-weight: 100;
    color: #222222;
    padding: 0.5rem 0;
  }

  /*.sec-eq-img {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  background: url('../../assets/index1.png') no-repeat;*/
  /*  background-size: cover;*/
  /*}*/

  .sec-eq-bottom {
    /*width: 80%;*/
    font-size: 0.14rem;
    transform: scale(.8);
    /*font-size: 8px;*/
    font-family: ProximaNova-Regular;
    font-weight: 100;
    color: #444444;
    margin: 0.39rem auto 0;
    padding-bottom: 1rem;
    line-height: 0.24rem;
    text-align: center;
    /*height: 0.37rem;*/
  }

  /*.sec-eq a {*/
  /*  margin: auto;*/
  /*  display: block;*/
  /*  width: 70%;*/
  /*  font-size: 0.12rem;*/
  /*  transform:scale(.6);*/
  /*  text-align: center;*/
  /*  border: 2px solid black;*/
  /*  border-radius: 3px;*/
  /*  padding: 0.1rem 0;*/
  /*  color: #000;*/
  /*  text-decoration: none;*/
  /*}*/
  .sec-eq button {
    display: block;
    margin: auto;
    font-size: 0.12rem;
    transform: scale(.6);
    text-align: center;
    border: 2px solid black;
    border-radius: 3px;
    padding: 0.1rem 0.4rem;
    color: #000;
    background-color: #fff;
  }

  .txt {
    ont-size: 0.1rem;
    font-family: ProximaNova-Regular;
    font-weight: 100;
    color: #444444;
    line-height: 0.24rem;
    margin-top: 0.36rem;
    padding-bottom: 1rem;
    /*transform: scale(.5);*/
  }

  .footer {
    padding: 0.6rem 0;
    text-align: center;
    font-weight: 100;
    font-size: 0.2rem;
  }


</style>
