<template>
  <div id="app" v-if="show" >
    <Header/>
    <router-view  />
    <div class="line9">
        <div class="wrapp">
          <p>©Venti Technologies,Inc.</p>
          <p>info@ventitechnologies.com</p>
        </div>
        <div class="top" @click="top">
          TOP
        </div>
    </div>
  </div>
</template>

<script>
import Header from './components/headerApp.vue'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      show : true 
    }
  },
  components : {
    Header
  },
  async mounted() {
    
  },
  methods: {
    top () {
    window.scroll(0 , 0)
  }
  },
  
}
</script>

<style lang="scss">

@font-face {
  font-family: 'zzz';
  src: url('./assets/bx.ttf');
}

html , body , #app , .index , .wrap{
  min-height: 100%;
  height: auto;
  width: 100%;
  // min-width: 1300px;
}

.banner {
  width: 100%;
  min-height: 700px;
  height: auto;
  // min-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size:60px;
    font-family:zzz !important;
    font-weight:400 !important;
    color:rgba(254,254,254,1);
    line-height:90px;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -45px;
    letter-spacing: 3px;
  }
 img {
    width: 100%;
  }
}

* {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: PROXIMA-NOVA;
  font-style: normal !important;
}

@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .header , main {
    width: 1300px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1024px) {
  .header , main {
    width: 1300px;
    margin: 0 auto;
  }
  //  main {
  //   padding: 0 30px;
  // }
}
@media screen and (min-width: 1300px) {
  .header , main {
    width: 1300px;
    margin: 0 auto;
  }
}

.header{
    background: red;
    height: 75px;
}
.line9 {
    width: 100%;
    height: 70px;
    border-top: 1px solid rgba(232, 232, 232, 1);
    // display: none;
    position: relative;
    margin-top: 100px;
    .wrapp {
      width: 450px !important;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      line-height: 70px;
      p {
        font-size:12px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(68,68,67,1);
      }
    }
    .top {
      height: 30px;
      width: 30px;
      position: absolute;
      right: 40px;
      top: 20px;
      background:rgba(221,217,216,1);
      text-align: center;
      line-height: 30px;
      font-size: 13px;
      cursor: pointer;
    }
}
</style>
