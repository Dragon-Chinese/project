<template>
  <div class="trem">
      <div class="banner">
        <img src="" alt="">
      </div>
      <main>
       
      </main>
  </div>
</template>

<script>
export default {
  name: 'team',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trem {
  width: 100%;
  height: 100%;
}
.banner {
  width: 100%;
  height: 300px;
  background: lightblue;
}
@media screen and (max-width: 1200px) and (min-width: 1024px) {
  main {
    width: 1024px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1024px) {
  main {
    width: 960px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1200px) {
  main {
    width: 1200px;
    margin: 0 auto;
  }
}

</style>

