<template>
  <div class="mobile">
    <Header/>

    <div class="banner1">
      <img src="../../assets/par.png" alt="" style="width: 100%">
      <p>{{ $t("message.parthers.txt0") }}</p>
    </div>


    <div class="m-main">

      <div class="fir">
        <div class="title">{{ $t("message.parthers.txt1") }}</div>
        <p>{{ $t("message.parthers.txt2") }}</p>
        <div class="title">{{ $t("message.parthers.txt3") }}</div>
      </div>

      <div class="sec">
        <img src="../../assets/partherLeft.png" alt="">
        <p>{{ $t("message.parthers.txt4") }}</p>
        <img src="../../assets/HW & Neolix CEO shaking hands.jpg" alt="">
        <img src="../../assets/HW & Neolix CEO shaking hands2.jpg" alt="">
        <video data-v-7988fbbe="" src="http://www.myzhangyao.com/static/Venti_ChinaLife_Short19.mp4"  playsinline="" controlsList="nodownload" controls="controls"></video>
      </div>

      <div class="thi">
        <div class="title">{{ $t("message.parthers.txt6") }}</div>
        <p>{{ $t("message.parthers.txt8") }}</p>
        <div class="info">{{ $t("message.parthers.txt7") }}</div>
        <div class="info">{{ $t("message.parthers.txt9") }}</div>
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

  img,
  video{
    width: 100%;
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
    width: 100%;
  }

  .fir {
    padding: 0.5rem 0 ;
  }

  .title {
    text-align: center;
    font-size: 0.36rem;
    font-family: ProximaNova-Light;
    font-weight: 300;
    color: #444444;
    padding: 0.5rem 0;
  }

  .fir p {
    font-size: 0.28rem;
    font-family: Bodoni-Normal-Italic;
    font-weight: 400;
    color: #444444;
    line-height: 0.42rem;
    font-style: oblique;
    text-align: center;
  }

  .sec img {
    padding: 0.2rem 0;
  }

  .sec p {
    font-size: 0.16rem;
    font-family: ProximaNova-Light;
    font-weight: 100;
    color: #444444;
    line-height: 0.3rem;
  }

  .thi p {
    font-size: 0.25rem;
    font-family: Bodoni-Normal-Italic;
    font-weight: 400;
    color: #444444;
    line-height: 0.42rem;
    font-style: oblique;
    padding-bottom: 0.4rem;
  }

  .info {
    font-size: 0.14rem;
    font-family: ProximaNova-Light;
    font-weight: 100;
    color: #444444;
    line-height: 0.24rem;
    padding-bottom: 0.2rem;
  }


</style>
