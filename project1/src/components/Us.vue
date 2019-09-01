<template>
  <div class="index">
      <div class="banner">
        <h2>{{$t('message.us.txt0')}}</h2>
        <img src="../assets/0f341017ecf47ade970da8429898.png" alt="">
      </div>
      <main>
        <div class="wr">
          <div class="a">
           <p class="fontTxt">{{$t('message.us.txt1')}}</p>
        <ul class="font">
          <li class="fontTxt">{{$t('message.us.txt2')}}</li>
          <li class="fontTxt">{{$t('message.us.txt3')}} </li>
          <li class="fontTxt">{{$t('message.us.txt4')}}</li>
          <li class="fontTxt">{{$t('message.us.txt5')}} </li>
          <li class="fontTxt">{{$t('message.us.txt6')}}</li>
        </ul> 
          </div>
        
        <footer>
          <p>{{$t('message.us.txt7')}}</p>
          <div>
            <ul>
              <li>{{$t('message.us.txt8')}}</li>
              <li>{{$t('message.us.txt9')}}</li>
              <li>{{$t('message.us.txt10')}}</li>
              <li>{{$t('message.us.txt11')}}</li>
              <li>{{$t('message.us.txt12')}}</li>
              <li>{{$t('message.us.txt13')}}</li>
            </ul>
          </div>
        </footer>
        </div>
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
@font-face {
  font-family: 'v1';
  src: url('../assets/gbk.ttf');
}
@font-face {
  font-family: 'jian';
  src: url('../assets/jian.ttf');
}
@font-face {
  font-family: 'Bodoni-Normal-Italic';
  src: url('../assets/SourceHanSerifCN-Light.otf');
}
.index {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.banner{
  position: relative;
  /* background: url('../assets/0f341017ecf47ade970da8429898.png') no-repeat center;
  background-size:100% 100%; */
}
.banner>img{
  width: 100%;
  height: 100%;
}
.fontTxt{
      font-size: 16px;
    font-family: jian;
    font-weight: 300;
    color: #444444;
}
.Up{
  position: absolute;
  z-index: 999;
  height:42px;
  font-size:62px;
  font-family:jian;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.wr {
    width: 1210px;
    margin: 0 auto;
   
  }
  .a {
    display: flex;
  }
  .a ul {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .a ul li {
    margin-left: 20px;
  }
  .a ul li:nth-child(1) {
    margin-left: 0;
  }
main .wr .a>p {
  /* margin-top: 134px; */
  margin-bottom: 35px;
  font-size:28px;
  font-family:Bodoni-Normal-Italic;
  font-weight:400;
  color:rgba(68,68,68,1);
  font-style: italic;
}

.font{
  margin: 0px;
  padding: 0px;
}

.font>li {
  margin-bottom: 35px;
  font-size:28px;
  font-family:v1;
  font-weight:400;
  color:rgba(68,68,68,1);
  font-style: italic;
  font-family: Bodoni-Normal-Italic;
}
li:nth-last-child() {
  margin: 0;
}


footer {
  border-top: 1px solid #E8E8E8;
   margin-top: 68px;
  height: 447px;
}

footer>p{
  margin-top: 64px;
  width: 308px;
  float: left;
  font-size:26px;
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
  
  font-size:20px;
  font-family:jian;
  font-weight:300;
  color:rgba(68,68,68,1);
  line-height:24px;
  line-height: 24px;
  margin-bottom: 20px;
  font-style: normal;
}

</style>

