<template>
  <div class="mobile">
    <Header/>
    <div class="banner1">
      <img src="../../assets/par.jpg" alt="" style="width: 100%">
      <p>{{ $t("message.ventiLife.txt0") }}</p>
    </div>


    <div class="m-main">
      <div class="fir">
        <div class="line clearfix">
          <img src="../../assets/ventiLife-1.jpeg" alt="" class="line-imgl">
          <img src="../../assets/ventiLife-2.jpg" alt="" class="line-imgr">
        </div>

        <div class="line clearfix">
          <img src="../../assets/ventiLife-3.jpg" alt="" class="line-imgl">
          <img src="../../assets/ventiLife-4.jpg" alt="" class="line-imgr">
        </div>

        <div class="line clearfix">
          <img src="../../assets/ventiLife-5.jpg" alt="" class="line-imgl">
          <img src="../../assets/ventiLife-6.jpg" alt="" class="line-imgr">
        </div>

        <div class="line clearfix">
          <img src="../../assets/ventiLife-7.jpg" alt="" class="line-imgl">
          <img src="../../assets/ventiLife-8.jpg" alt="" class="line-imgr">
        </div>

        <div class="line clearfix">
          <img src="../../assets/ventiLife-9.jpg" alt="" class="line-imgl">
          <img src="../../assets/ventiLife-10.jpg" alt="" class="line-imgr">
        </div>

        <div class="last-line clearfix">
          <img src="../../assets/ventiLife-11.jpg" alt="" class="line-imgl">
        </div>

      </div>

      <hr />

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

  .clearfix:after{
    content:"";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }

  .clearfix{zoom:1}

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

  .fir {
    padding: 0.4rem 0 1rem;
  }

  .line {
    width: 100%;
    padding: 0.2rem 0;
  }

  .line-imgl {
    width: 48%;
    float: left;
  }

  .line-imgr {
    width: 48%;
    float: left;
    padding-left: 4%;
  }

  .last-line {

  }

  .last-line img {
    width: 100%;
  }

</style>
