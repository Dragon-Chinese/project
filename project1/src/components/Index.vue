<template>
  <div class="index">
    <div class="banner">
        <h2>Venti Technologies</h2>
    </div>
    <main>
      <div class="topMain">
          <div class="left">
              <div>VENTI IS THE LEADER IN SAFE SPEED <br/> AUTONOMOUS MOBILITY</div>
              <p>Improving our lives and improving our planet by disrupting <br /> transportation, commerce, and society. </p>
          </div>
          <div class="right">

          </div>
      </div>
      <div class="line"></div>
      <h3>THE VENTI ADVANTAGE</h3>
      <p class="power">
        The Power of People, Partnerships and Intelligent Science
      </p>
    </main>
  </div>
</template>

<script>
import Header from './headerApp.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  h2 {
    font-size:60px;
    font-family:ProximaNova-Regular;
    font-weight:400;
    color:rgba(254,254,254,1);
    text-align: center;
    margin: 0;
  }
}
main {
  .topMain {
    margin-top: 104px;
    // background: red;
    display: flex;
    justify-content: space-between;
    .right {
      width:482px;
      height:314px;
      background: #aaa;
    }
    .left {
      div {
        font-size:36px;
        font-family:ProximaNova-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
      }
      p {
        margin-top: 50px;
        font-size:22px;
        font-family:SourceHanSerifCN-Medium;
        font-weight:500;
        font-style:italic;
        color:rgba(68,68,68,1);
      }
    }
  }
  .line {
    margin-top: 111px;
    width:100%;
    height:1px;
    background:rgba(232,232,232,1);
  }
  h3 {
    font-size:36px;
    font-family:ProximaNova-Regular;
    font-weight:400;
    color:rgba(34,34,34,1);
    margin-top: 60px;
  }
  .power {
    font-size:28px;
    font-family:Bodoni-Normal-Italic;
    font-weight:400;
    font-style:italic;
    color:rgba(34,34,34,1);
    margin-top: 48px;
  }
}
</style>
