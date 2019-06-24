<template>
  <div id="app" v-if="show" >
    <Header/>
    <router-view  />
    <div class="line9"></div>
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
}
</script>

<style>
html , body , #app , .index , .wrap{
  height: auto;
  width: 100%;
}

.banner {
  width: 100%;
  height: auto;
  min-height: 700px;
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
    height: 1px;
    background: rgba(232, 232, 232, 1);
    margin-top: 100px;
    margin-bottom: 48px;
    display: none;
}
</style>
