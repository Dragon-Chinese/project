<template>
<div class="wrap">
    <div class="header">

    </div>
</div>
    
</template>

<script>
export default {
    
}
</script>
<style>
.wrap {
    width: 100%;
    height: 70px;;
}
@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .header {
    width: 1024px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1024px) {
  .header {
    width: 960px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1200px) {
  .header {
    width: 1200px;
    margin: 0 auto;
  }
}
.header {
    background: red;
    height: 70px;
}
</style>
