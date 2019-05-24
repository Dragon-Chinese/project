<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/headerApp.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    Header
  },
  mounted() {
    
  },
}
</script>

<style>
html , body , #app , .index , .wrap{
  height: 100%;
  width: 100%;
}

.banner {
  width: 100%;
  height: 438px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  list-style: none;
  margin: 0;
  padding: 0;
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
</style>
