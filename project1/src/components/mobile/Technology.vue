<template>
  <div class="mobile">
    <Header/>

    <div class="banner1">
      <img src="../../assets/header.jpg" alt="" style="width: 100%">
      <p>{{ $t("message.technology.txt0") }}</p>
    </div>
    <div class="m-main">

      <div class="banner2">

      </div>

      <div class="title">{{ $t("message.technology.txt1") }}</div>

      <div class="video">
        <video data-v-5899393c="" src="http://www.myzhangyao.com/static/Venti_Technology_Demo18.mp4" muted="muted" playsinline="" controls="controls" controlsList="nodownload" style="width: 100%"></video>
      </div>

      <div class="title">{{ $t("message.technology.txt2") }}</div>

      <div class="info">{{ $t("message.technology.txt3") }}</div>

      <div class="title">{{ $t("message.technology.txt4") }}</div>

      <div class="info">{{ $t("message.technology.txt5") }}</div>
      <div class="info">{{ $t("message.technology.txt6") }}</div>

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
    font-family: 'jian';
    src: url('../../assets/jian.ttf');
  }

  @font-face {
    font-family: 'Bodoni-Normal-Italic';
    src: url('../../assets/SourceHanSerifCN-Light.otf');
  }

  .mobile {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: .26rem;
    overflow: hidden;
  }

  .m-main {
    padding: 0 0.4rem 1rem 0.4rem;
  }

  .banner1 {
    position: relative;
  }

  .banner1 p {
    font-size: 0.6rem;
    font-family: zzz !important;
    font-weight: 100 !important;
    color: #fefefe;
    line-height: 0.9rem;
    text-align: center;
    position: absolute;
    top: 40%;
    margin-top: -0.45rem;
    letter-spacing: 0.03rem;
  }

  .video {
    padding-top: 0.4rem;
  }

  .title {
    font-size: 0.28rem;
    font-family: Bodoni-Normal-Italic;
    font-weight: 400;
    color: #444444;
    font-style: oblique;
    text-align: center;
    padding: 0.8rem 0 0;
  }

  .info {
    width: 100%;
    /*margin-top: 0.2rem;*/
    /*margin-bottom: 0.16rem;*/
    font-size: 0.16rem;
    font-family: ProximaNova-Light;
    font-weight: 100;
    color: #444444;
    line-height: 0.24rem;
    padding: 0.4rem 0 0 ;
  }



</style>
