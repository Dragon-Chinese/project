<template>
  <div class="index">
      <div class="banner">
          <p class="team">{{$t('message.team.txt0')}}</p>
          <!-- <img class="banner-img" src="../assets/team.png" alt=""> -->
          <img src="../assets/team.png" alt="">
      </div>
      <main>
        <div class="wr">
        <div class="main-top">
          <p class="top-left">{{$t('message.team.txt1')}}</p>
          <p class="top-right" @click="$router.push('/team-descriptions')">
            <span>
              <img src="../assets/Heidi.png" alt="">
            </span>
            <span>{{$t('message.team.txt2')}}</span>
          </p>
        </div>
        <div class="main-content" >
            <ul>
                <li @click="$router.push('/team-descriptions')">
                   <span>
                      <img src="../assets/daniela-headshot.png" alt="">
                    </span>
                    <span class="content-one">{{$t('message.team.txt3')}}</span>
                </li>
                <li @click="$router.push('/team-descriptions')">
                    <span>
                      <img src="../assets/saman.png" alt="">
                    </span>
                    <span>{{$t('message.team.txt4')}}</span>
                </li>
                <li @click="$router.push('/team-descriptions')">
                   <span>
                      <img src="../assets/XX+portrait.png" alt="">
                    </span>
                    <span>{{$t('message.team.txt5')}}</span>
                </li>
            </ul>
        </div>
        <div class="main-footer">
              <p>{{$t('message.team.txt6')}}</p>
              <ul>
                  <li @click="$router.push('/team-descriptions')">
                      <span>
                        <img src="../assets/zm.jpg" alt="">
                      </span>
                      <span>{{$t('message.team.txt7')}}</span>
                  </li>
                  <li @click="$router.push('/team-descriptions')">
                    <span>
                        <img src="../assets/yw.jpg" alt="">
                      </span>
                      <span>{{$t('message.team.txt8')}}</span>
                  </li>
                  <li @click="$router.push('/team-descriptions')">
                    <span>
                        <img src="../assets/teams.jpg" alt="">
                      </span>
                      <span>{{$t('message.team.txt9')}}</span>
                  </li>
              </ul>
        </div>
        </div>
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
  },
  mounted() {
    location.href
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'jian';
  src: url('../assets/jian.ttf');
}
.index {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.banner{
  position: relative;
  /* background: url('../assets/team.png') no-repeat center;
  background-size:100% 100%; */
}
.banner .team{
  position: absolute;
  z-index: 999;
  height:41px;
  font-size:60px;
  font-family:jian;
  font-weight:400;
  color:rgba(254,254,254,1);
  line-height:90px;
}
.wr {
    width: 1210px;
    margin: 0 auto;
  }
.main-top{
  width: 100%;
  height: 509px;
  margin-top: 118px;
  display: flex;
  justify-content: space-between;
}
.main-top .top-left{
  width:343px;
  height:30px;
  font-size:43px;
  font-family:jian;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:57px;
  margin: 14px 10px 0 0;
}
.top-right{
}
.top-right span:nth-child(1){
   width:848px;
    /* height:478px; */
    display: block;
  margin: 0 0 22px 1px;
  cursor: pointer;
    
} 
.top-right span:nth-child(1)>img{
  width: 100%;
  height: 100%;
  display: block;
}
.top-right span:nth-child(2){
  width:456px;
  height:9px;
  font-size:11px;
  font-family:jian;
  font-weight:400;
  color:rgba(10,10,10,1);
  line-height:26px;
}
.main-content{
  width: 100%;
  height: 406px;
  margin: 200px 0 71px 0;
}
.main-content ul{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.main-content ul li{
  width: 380px;
  cursor: pointer;
  /* margin-right: 30px; */
}
.main-content ul li span:nth-child(1){
  width:380px;
  height:355px;
  display: block;
}
.main-content ul li span:nth-child(1)>img{
    width: 100%;height: 100%;
    display: block;
}
.main-content ul li span:nth-child(2){
    display: block;
    width:100%;
    height:9px;
    font-size:11px;
    font-family:jian;
    font-weight:400;
    color:rgba(10,10,10,1);
    line-height:21px;
    margin-top:22px;
}

.main-footer{
  width: 100%;
  height: 473px;
}
.main-footer>p{
  width:548px;
  height:30px;
  font-size:43px;
  font-family:jian;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:57px;
  margin-bottom: 41px;
}
.main-footer ul{
  width: 100%;
  height: 100%;
  display: flex;
}
.main-footer ul li{
  width: 275px;
  margin-right: 39px;
  cursor: pointer;
}

.main-footer ul li:nth-child(3){
  width: 577px;
  height: 274px;
}
.main-footer ul li:nth-child(3) span:nth-child(1){
  width: 577px;
  height: 274px;
  display: block;
}
.main-footer ul li span:nth-child(1){
  width:274px;
  height:274px;
  display: block;
}
.main-footer ul li:nth-child(1) span:nth-child(2){
  display: block;
  width:282px;
  height:30px;
  font-size:11px;
  font-family:jian;
  font-weight:400;
  color:rgba(10,10,10,1);
  line-height:21px;
}
.main-footer ul li span:nth-child(1)>img{
    width: 100%;height: 100%;
    display: block;
}
.main-footer ul li span:nth-child(2){
    display: block;
    width:302px;
    height:9px;
    font-size:11px;
    font-family:jian;
    font-weight:400;
    color:rgba(10,10,10,1);
    line-height:21px;
    margin-top:22px;
}

</style>

