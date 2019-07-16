<template>
  <div class="mobile">
    <Header/>

    <div class="banner1">
      <img src="../../assets/0f341017ecf47ade970da842108765c.png" alt="" style="width: 100%">
      <p>{{ $t("message.careers.txt0") }}</p>
    </div>


    <div class="m-main">
      <div class="fir">
        <div class="title">{{ $t("message.careers.txt1") }}</div>
        <h3>{{ $t("message.careers.txt2") }}</h3>
        <p>{{ $t("message.careers.txt3") }}</p>
        <p>{{ $t("message.careers.txt4") }}</p>
        <p>{{ $t("message.careers.txt5") }}</p>
      </div>

      <div class="sec">
        <div class="must">{{ $t("message.careers.txt6") }}</div>
        <div class="name clearfix">
          <div class="name-eq">
            <input type="text">
            <p>{{ $t("message.careers.txt7") }}</p>
          </div>
          <div class="name-eq">
            <input type="text">
            <p>{{ $t("message.careers.txt8") }}</p>
          </div>
        </div>

        <div class="email">
          <div class="must">{{ $t("message.careers.txt9") }}</div>
          <input type="text">
        </div>

        <div class="tell">
          <div class="must">{{ $t("message.careers.txt10") }}</div>
          <input type="text">
        </div>

        <button>{{ $t("message.careers.txt11") }}</button>

        <br />
        <br />
        <hr />



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

  .mobile {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: .26rem;
    overflow: hidden;
  }

  .clearfix:after{
    content:"";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }

  .clearfix{zoom:1}

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

  .fir {
    padding: 0.8rem 0;
  }

  .title {
    font-size: 0.36rem;
    font-family: DengXian-Regular;
    font-weight: 400;
    color: rgba(10,10,10,1);
    line-height: 0.85rem;
  }

  .fir h3 {
    font-size: 0.15rem;
    font-family: DengXian-Regular;
    font-weight: 100;
    color: rgba(10,10,10,1);
    line-height: 0.40rem;
  }

  .fir p {
    padding-top: 0.21rem;
    font-size: 0.15rem;
    font-family: ProximaNova-Light;
    font-weight: 100;
    color: rgba(10,10,10,1);
    line-height: 0.25rem;
  }

  input {
    width: 2.91rem;
    height: 0.45rem;
    background: rgba(250,250,250,1);
    text-indent: 1em;
    border: 1px solid rgba(167,167,167,1);
  }

  .must {
    display: block;
    font-size: 0.15rem;
    font-family: ProximaNova-Light;
    font-weight: 400;
    color: rgba(10,10,10,1);
    line-height: 0.21rem;
    padding: 0.1rem 0;
  }

  .name-eq {
    float: left;
    padding-right: 0.1rem;
  }

  .name-eq p {
    display: block;
    font-size: 0.12rem;
    font-family: ProximaNova-Light;
    font-weight: 100;
    color: rgba(10,10,10,1);
    line-height: 0.21rem;
    padding: 0.1rem 0;
  }

  .email,
  .name,
  .tell{
    padding-bottom: 0.3rem;
  }

  button {
    width: 1.46rem;
    height: 0.53rem;
    background: rgba(255,255,255,1);
    border: 2px solid rgba(23,23,23,1);
    font-size: 0.20rem;
    font-family: ProximaNova-Regular;
    font-weight: 300;
    color: rgba(10,10,10,1);
    line-height: 0.21rem;
    outline: none;
    cursor: pointer;
    display: block;
    margin: 0.5rem auto;
  }

</style>
