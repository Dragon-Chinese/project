<template>
  <div class="index">
      <div class="banner">
          <p class="team">Dedicated Team</p>
          <img class="banner-img" src="../assets/team.png" alt="">
      </div>
      <main>
        <div class="main-top">
          <p class="top-left">OUR FOUNDERS </p>
          <p class="top-right">
            <span>
              <img src="../assets/Heidi.png" alt="">
            </span>
            <span>HEIDI WYLE, FOUNDER & CEO, VENTI TECHNOLOGIES; CHAIRMAN, VENTI CHINA</span>
          </p>
        </div>
        <div class="main-content">
            <ul>
                <li>
                   <span>
                      <img src="../assets/daniela-headshot.png" alt="">
                    </span>
                    <span class="content-one">DANIELA RUS, PH.D., FOUNDER, VENTI TECHNOLOGIES</span>
                </li>
                <li>
                    <span>
                      <img src="../assets/saman.png" alt="">
                    </span>
                    <span>SAMAN AMARASINGHE, PH.D., FOUNDER, VENTI TECHNOLOGIES</span>
                </li>
                <li>
                   <span>
                      <img src="../assets/XX+portrait.png" alt="">
                    </span>
                    <span>XINXIN DU, PHD., FOUNDING TECHNOLOGY OFFICER</span>
                </li>
            </ul>
        </div>
        <div class="main-footer">
              <p>OUR MANAGEMENT TEAM</p>
              <ul>
                  <li>
                      <span>
                        <img src="../assets/Shuyan+portrait.png" alt="">
                      </span>
                      <span>SHUYAN ZHAO, PH.D., ACTING CEO VENTI CHINA & VP, ENGINEERING</span>
                  </li>
                  <li>
                    <span>
                        <img src="../assets/saonan.png" alt="">
                      </span>
                      <span>WU YANG, VP OF BUSINESS DEVELOPMENT</span>
                  </li>
              </ul>
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
  background-image: url('../assets/team.png');
  background-size: 100% 100%;
}
.banner .team{
  position: absolute;
  z-index: 999;
  height:41px;
  font-size:60px;
  font-family:ProximaNova-Regular;
  font-weight:400;
  color:rgba(254,254,254,1);
  line-height:90px;
}

.main-top{
  width: 100%;
  height: 509px;
  margin-top: 118px;
  display: flex;
}
.main-top .top-left{
  width:343px;
  height:30px;
  font-size:43px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:57px;
  margin: 14px 203px 0 0;
}
.top-right{
}
.top-right span:nth-child(1){
   width:651px;
    height:478px;
    display: block;
  margin: 0 0 22px 1px;
    
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
  font-family:ProximaNova-Bold;
  font-weight:bold;
  color:rgba(10,10,10,1);
  line-height:26px;
}
.main-content{
  width: 100%;
  height: 406px;
  margin: 44px 0 71px 0;
}
.main-content ul{
  width: 100%;
  height: 100%;
  display: flex;
}
.main-content ul li{
  width: 380px;
  margin-left: 30px;
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
    font-family:ProximaNova-Bold;
    font-weight:bold;
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
  font-family:ProximaNova-Light;
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
  width: 380px;
  margin-left: 30px;
}
.main-footer ul li span:nth-child(1){
  width:380px;
  height:355px;
  display: block;
}
.main-footer ul li:nth-child(1) span:nth-child(2){
  display: block;
  width:282px;
  height:30px;
  font-size:11px;
  font-family:ProximaNova-Bold;
  font-weight:bold;
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
    font-family:ProximaNova-Bold;
    font-weight:bold;
    color:rgba(10,10,10,1);
    line-height:21px;
    margin-top:22px;
}
</style>

