<template>
  <div class="mobile">
    <Header/>
    <div class="us_banner">
      <img src="../../assets/0f341017ecf47ade970da8429898.png" alt="">
      <p>{{ $t("message.us.txt0") }}</p>
    </div>

    <div class="m-main">
      <div class="fir">
        <p>{{ $t("message.us.txt1") }}</p>
        <p>{{ $t("message.us.txt2") }}</p>
        <p>{{ $t("message.us.txt3") }}</p>
        <p>{{ $t("message.us.txt4") }}</p>
        <p>{{ $t("message.us.txt5") }}</p>
        <p>{{ $t("message.us.txt6") }}</p>
      </div>

      <hr/>

      <div class="sec">
        <div class="title">{{ $t("message.us.txt7") }}</div>
        <div class="info">{{ $t("message.us.txt9") }}</div>
        <div class="info">{{ $t("message.us.txt10") }}</div>
        <div class="info">{{ $t("message.us.txt11") }}</div>
<!--        <div class="info">{{ $t("message.us.txt12") }}</div>-->
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

  .us_banner {
    position: relative;

  }

  .us_banner img {
    width: 100%;
  }

  .us_banner p {
    ont-size: 0.6rem;
    font-family: zzz !important;
    font-weight: 400 !important;
    color: #fefefe;
    line-height: 0.9rem;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -0.45rem;
    letter-spacing: 0.03rem;
    width: 100%;
  }

  .m-main {
    padding: 0 0.4rem 0 0.4rem;
  }

  .fir {
    padding: 0.6rem 0;

  }

  .fir p {
    font-size: 0.28rem;
    font-family: Bodoni-Normal-Italic;
    font-weight: 100;
    color: rgba(68, 68, 68, 1);
    font-style: italic;
    padding: 0.1rem 0;
  }

  .sec {
    padding: 0.8rem 0;
  }

  .title {
    text-align: center;
    font-size: 0.36rem;
    font-family: ProximaNova-Light;
    font-weight: 300;
    color: rgba(68,68,68,0.7);
    padding-bottom: 0.2rem;
  }

  .info {
    font-size: 0.16rem;
    font-family: jian;
    font-weight: 100;
    color: rgba(68,68,68,0.7);
    line-height: 0.24rem;
    line-height: 0.24rem;
    margin-bottom: 0.2rem;
    font-style: normal;
    padding: 0.1rem 0 0;
  }

</style>
