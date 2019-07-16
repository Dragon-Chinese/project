<template>
  <div class="mobile">
    <Header/>

    <div class="banner1">
      <img src="../../assets/team.png" alt="" style="width: 100%">
      <p>{{ $t("message.team.txt0") }}</p>
    </div>


    <div class="m-main">
      <div class="fir">
        <div class="title">
          {{ $t("message.team.txt1") }}
        </div>
        <div class="eq">
          <img src="../../assets/Heidi.png" alt="" @click="$router.push('/team-descriptionsM')">
          <p>{{ $t("message.team.txt2") }}</p>
        </div>
        <div class="eq">
          <img src="../../assets/daniela-headshot.png" alt="">
          <p>{{ $t("message.team.txt3") }}</p>
        </div>
        <div class="eq">
          <img src="../../assets/saman.png" alt="">
          <p>{{ $t("message.team.txt4") }}</p>
        </div>
        <div class="eq">
          <img src="../../assets/XX+portrait.png" alt="">
          <p>{{ $t("message.team.txt5") }}</p>
        </div>
      </div>
      <div class="sec">
        <div class="title">{{ $t("message.team.txt6") }}</div>

        <div class="eq">
          <img src="../../assets/zm.jpg" alt="">
          <p>{{ $t("message.team.txt7") }}</p>
        </div>
        <div class="eq">
          <img src="../../assets/yw.jpg" alt="">
          <p>{{ $t("message.team.txt8") }}</p>
        </div>
        <div class="eq">
          <img src="../../assets/teams.jpg" alt="">
          <p>{{ $t("message.team.txt9") }}</p>
        </div>
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
    top: 50%;
    margin-top: -0.45rem;
    letter-spacing: 0.03rem;
    width: 100%;
  }

  .title {
    font-size: 0.43rem;
    font-family: ProximaNova-Light;
    font-weight: 300;
    color: rgba(10,10,10,1);
    line-height: 0.57rem;
    text-align: center;
    padding-top: 1rem;
  }

  .eq {
    padding: 0.8rem 0 0;
  }

  .eq p {
    font-size: 0.11rem;
    font-family: jian;
    font-weight: 100;
    color: rgba(10,10,10,0.5);
    line-height: 0.26rem;
    text-align: center;
  }

</style>
