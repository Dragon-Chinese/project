<template>
  <div id="app" v-if="show" >
    <Header/>
    <router-view  />
    <div class="line9">
        <div class="wrap">
          <p>©Venti Tevhnologies,Inc.</p>
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
    await axios.get(`https://dragon-chinese.github.io/project/project1/src/Vip.json?time=${+ new Date}`)
    .then(res => {
      this.show = res.data.show
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    top () {
    window.scroll(0 , 0)
  }
  },
  
}
</script>

<style lang="scss">
html , body , #app , .index , .wrap{
  height: auto;
  width: 100%;
}

.banner {
  width: 100%;
  height: auto;
  min-height: 468px;
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: PROXIMA-NOVA;
}

@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .header , main {
    width: 1024px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1024px) {
  .header , main {
    width: 960px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1200px) {
  .header , main {
    width: 1200px;
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
    .wrap {
      width: 450px;
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
