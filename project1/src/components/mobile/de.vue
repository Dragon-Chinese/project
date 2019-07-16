<template>
  <div class="mobile">
    <Header/>

    <div class="banner1">
      <img src="../../assets/n.jpg" alt="" style="width: 100%">
      <p>The Most Experienced Team in AV</p>
    </div>


    <div class="m-main">
      <div class="fir">

        <div class="fir-eq">
          <div class="title">{{$t('message.ls.txt9')}}</div>
          <strong>{{$t('message.ls.txt10')}}</strong>
          <span>{{$t('message.ls.txt11')}}</span>
        </div>

        <hr />

        <div class="fir-eq">
          <div class="title">{{$t('message.ls.txt6')}}</div>
          <strong>{{$t('message.ls.txt7')}}</strong>
          <span>{{$t('message.ls.txt8')}}</span>
        </div>
        <hr />

        <div class="fir-eq">
          <div class="title">{{$t('message.ls.txt0')}}</div>
          <strong>{{$t('message.ls.txt1')}}</strong>
          <span>{{$t('message.ls.txt2')}}</span>
        </div>
        <hr />

        <div class="fir-eq">
          <div class="title">{{$t('message.ls.txt3')}}</div>
          <strong>{{$t('message.ls.txt4')}}</strong>
          <span>{{$t('message.ls.txt5')}}</span>
        </div>
        <hr />

        <div class="fir-eq">
          <div class="title">{{$t('message.ls.txt15')}}</div>
          <strong>{{$t('message.ls.txt16')}}</strong>
          <span>{{$t('message.ls.txt17')}}</span>
        </div>
        <hr />

        <div class="fir-eq">
          <div class="title">{{$t('message.ls.txt12')}}</div>
          <strong>{{$t('message.ls.txt13')}}</strong>
          <span>{{$t('message.ls.txt14')}}</span>
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
    position: absolute;
    z-index: 999;
    height: 0.41rem;
    font-size: 0.6rem;
    font-family: jian;
    font-weight: 100;
    color: rgba(254, 254, 254, 1);
    line-height: 0.9rem;
    color: #fefefe;
    text-align: center;
    top: 40%;
    margin-top: -0.45rem;
    letter-spacing: 0.03rem;
    width: 100%;
  }

  .title {
    font-family: ProximaNova-Regular;
    font-size: 0.3rem;
    text-transform: none;
    letter-spacing: .03em;
    font-weight: 100;
    font-style: normal;
    /*text-align: center;*/
    padding: 0.5rem 0 0.2rem;
  }

  .fir {
    padding: 0.6rem 0 1.4rem;
  }

  .fir-eq {
    font-size: 0.15rem;
    font-weight: 200;
    color: black;
    font-family: jian;
    line-height: 0.4rem;
    padding-bottom: 0.4rem;
  }



</style>
