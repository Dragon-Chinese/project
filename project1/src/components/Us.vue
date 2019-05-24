<template>
  <div class="index">
      <div class="banner">
        <p class="Up">{{$t('message.us.txt0')}}</p>
      </div>
      <main>
        <p>{{$t('message.us.txt1')}}</p>
        <ul>
          <li>{{$t('message.us.txt2')}}</li>
          <li>{{$t('message.us.txt3')}} </li>
          <li>{{$t('message.us.txt4')}}</li>
          <li>{{$t('message.us.txt5')}} </li>
          <li>{{$t('message.us.txt7')}}</li>
        </ul>
        <hr>
        <footer>
          <p>{{$t('message.us.txt6')}}</p>
          <div>
            <ul>
              <li>{{$t('message.us.txt8')}}</li>
              <li>{{$t('message.us.txt9')}}</li>
              <li>{{$t('message.us.txt10')}}</li>
              <li>{{$t('message.us.txt11')}}</li>
            </ul>
          </div>
        </footer>
      </main>
  </div>
</template>

<script>
export default {
  name: 'us',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.banner{
  position: relative;
  background-image: url('../assets/0f341017ecf47ade970da8429898.png')
}
.banner>img{
  width: 100%;
  height: 100%;
}
.Up{
  position: absolute;
  z-index: 999;
  height:42px;
  font-size:62px;
  font-family:ProximaNova-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
}
main>p {
  margin-top: 134px;
  margin-bottom: 45px;
  font-size:28px;
  font-family:Bodoni-Normal-Italic;
  font-weight:400;
  color:rgba(68,68,68,1);
}

ul{
  margin: 0px;
  padding: 0px;
}

ul li {
  margin-bottom: 46px;
  font-size:28px;
  font-family:Bodoni-Normal-Italic;
  font-weight:400;
  color:rgba(68,68,68,1);
}

li:nth-last-child() {
  margin: 0;
}

hr{
  margin-top: 68px;
  background:rgba(232,232,232,1);
}

footer {
  height: 647px;
}

footer>p{
  margin-top: 64px;
  width: 308px;
  float: left;
  font-size:36px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(68,68,68,1);
}

footer>div{
  margin-top: 55px;
  float: left;
  width:890px;
  height:350px;
  font-size:16px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(68,68,68,1);
  line-height:24px;
}
footer div ul {
  width:890px;
  height:350px;
}
footer>div ul li{
  
  font-size:16px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(68,68,68,1);
  line-height:24px;
  line-height: 24px;
  margin-bottom: 20px;
}

</style>

