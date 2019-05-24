<template>
  <div class="index">
      <div class="banner">
        <p class="Up">VENTI IS</p>
      </div>
      <main>
        <p>AN AUTONOMY LEADER.</p>
        <ul>
          <li>A DISRUPTOR. </li>
          <li>AN INNOVATOR. </li>
          <li>AN ENABLER.</li>
          <li>AN INTEGRATOR. </li>
          <li>AN IMPLEMENTOR.</li>
        </ul>
        <hr>
        <footer>
          <p>WHY VENTI</p>
          <div>
            <ul>
              <li>
                Venti combines the intellectual might of powerful technology with the power of Asia’s huge urbanization-driven markets. Our Safe
                Speed autonomy has benchmarked top in China, and powered 6 vehicle classes.  Our vehicles had 0 software disengagements 
                in 5,000 kilometers of testing and 0 incidents in 9 years of testing in China, US and Singapore.  Venti’s system is fast, mature, and
                ready for large scale applications with a significant cost advantage over the competition
              </li>
              <li>
                Our powerful strategic partners including China’s number one insurance company, two industrial partners, a top 10 real estate 
                builder, multiple leading vehicle manufacturers, and SIP, China’s best industrial park, are pathways for explosive growth and AV 
                leadership in moving people and goods.
              </li>
              <li>
                Venti has an unsurpassed team, 56% of whom are MIT-trained; our best-in-class management team includes AI experts paired 
                with seasoned automotive and business stars from leading automotive Tier-1 OEMs.
              </li>
              <li>
                Our autonomy system has a modular design, leading 3D components and more powerful algorithms. These factors yield higher 
                safety and reliability, deployment of a new vehicle class within a week, mapping a new area in a morning, and greater flexibility 
                for initial application and modifications.    Come ride with us into the future. 
              </li>
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

