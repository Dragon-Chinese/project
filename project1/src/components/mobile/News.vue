<template>
  <div class="mobile">
    <Header/>
    <div class="banner1">
      <img src="../../assets/news.png" alt="" style="width: 100%">
      <p>{{ $t("message.news.txt0") }}</p>
    </div>


    <div class="m-main">
      <div class="new-eq">
        <img src="../../assets/jr.png" alt="">
        <h4>{{ $t("message.news.txt1") }}</h4>
        <p>{{ $t("message.news.txt2") }}</p>
      </div>

      <div class="new-eq">
        <img src="../../assets/girl.png" alt="">
        <h4>{{ $t("message.news.txt3") }}</h4>
        <p>{{ $t("message.news.txt4") }}</p>
      </div>

      <div class="new-eq">

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

  .m-main {
    padding: 0 0.4rem 1rem 0.4rem;
  }

  img {
    width: 100%;
  }

  .banner1 {
    position: relative;
  }

  .banner1 p {
    font-size: 0.6rem;
    font-family: zzz !important;
    font-weight: 400 !important;
    color: #fefefe;
    line-height: 0.90rem;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -0.45rem;
    letter-spacing: 0.03rem;
    width: 100%;
  }

  .new-eq {
    padding-top: 0.8rem;
  }

  .new-eq h4 {
    font-size: 0.14rem;
    font-family: jian !important;
    font-weight: 200;
    color: #0a0a0a;
    line-height: 0.3rem;
    /*white-space: nowrap;*/
    text-decoration: none;
    text-align: center;
    padding: 0.4rem;
  }

  .new-eq p {
    font-size: 0.14rem;
    font-family: jian !important;
    font-weight: 100;
    color: rgba(10,10,10,0.5);
    line-height: 0.30rem;
    /*white-space: nowrap;*/
    text-decoration: none;
    text-align: center;
  }

</style>
