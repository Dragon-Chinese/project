<template>
  <div class="index">
      <div class="banner">
        <p class="Up">Venti Technologies</p>
      </div>
      <main>
        <footer>
          <div class="left">
            <h4>Jobs</h4>
            <p>Our motto is Best-of-the-Best.  </p>
            <ul>
              <li>If you aspire to change the world through your job, if you want to work with top professionals, if excellence is your mantra—then Venti is your place.  </li>
              <li>You will be challenged. You will be your best self. You will build the future today.</li>
              <li> We invite you to contact us.</li>
            </ul>
          </div>
          <div class="rigth">
            <form action="">
              <ul>
                <li>
                  <div class="first">
                    <b style="margin-bottom:12px;">Name *</b>
                    <input type="text">
                    <b style="margin-top:5px;">First Name </b>
                  </div>
                  <div class="last">
                    <input type="text">
                    <b style="margin-top:5px;">Last Name </b>
                  </div>
                </li>
                <li>
                  <b>Email Addres *</b>
                  <input type="text">
                </li>
                <li>
                  <b>Tell us about yourself. *</b>
                  <textarea></textarea>
                </li>
              </ul>
              <button>SUBMIT</button>
            </form>
          </div>
        </footer>
      </main>
  </div>
</template>

<script>
export default {
  name: 'craeers',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  background-image: url('../assets/0f341017ecf47ade970da842108765c.png')
}

/* .banner>img{
  width: 100%;
  height: 100%;
} */
.Up{
  position: absolute;
  z-index: 999;
  height:42px;
  font-size:62px;
  font-family:ProximaNova-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
}
footer{
  height: 884px;
}

.left{
  float: left;
  width: 604px;
}
.left h4 {
  margin-top: 126px;
  font-size:46px;
  font-family:ProximaNova-Bold;
  font-weight:bold;
  color:rgba(10,10,10,1);
  line-height:85px;
}
.left p{
  margin-top: 40px;
  font-size:21px;
  font-family:ProximaNova-Bold;
  font-weight:bold;
  color:rgba(10,10,10,1);
  line-height:40px;
}
.left ul{
  margin-top: 40px;
}
.left ul li {
  margin-bottom: 21px;
  font-size:15px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:21px;
}
.rigth{
  float: left;
  margin-top: 113px;
}
.rigth ul li:nth-child(1) {
  display: flex;
  margin-bottom: 38px;
}
.rigth ul li:nth-child(1) .first{
  width: 291px;
}

.rigth ul li:nth-child(1) .first b {
  font-style: none;
  display: block;
  font-size:15px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:21px;
}

.rigth ul li:nth-child(1) .first>input{
  width:291px;
  height:45px;
  background:rgba(231,231,231,1);
  text-indent: 1em;
  border:1px solid rgba(167,167,167,1);
}

.rigth ul li:nth-child(1) .last b{
  font-style: none;
  display: block;
  font-size:15px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:21px;
}

.rigth ul li:nth-child(1) .last{
  margin-top: 33px;
  width: 291px;
  margin-left: 11px;
}

.rigth ul li:nth-child(1) .last>input{
  width:291px;
  height:45px;
  background:rgba(231,231,231,1);
  border:1px solid rgba(167,167,167,1);
}

.rigth ul li:nth-child(2)>b{
  display: block;
  margin-bottom: 11px;
  font-size:15px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:21px;
}
.rigth ul li:nth-child(2)>input{
  width: 593px;
  height:45px;
  background:rgba(231,231,231,1);
  border:1px solid rgba(167,167,167,1);
}

.rigth ul li:nth-child(3)>b{
  margin-top: 40px;
  display: block;
  font-size:15px;
  font-family:ProximaNova-Light;
  font-weight:300;
  color:rgba(10,10,10,1);
  line-height:21px;
  margin-bottom: 8px;
}
.rigth ul li:nth-child(3)> textarea{
  width:593px;
  height:129px;
  background:rgba(231,231,231,1);
  border:1px solid rgba(167,167,167,1);
  text-indent: 1em;padding-top: 10px;
}

.rigth button {
  margin-top: 45px;
  width:146px;
  height:53px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(23,23,23,1);
  font-size:20px;
  font-family:ProximaNova-Regular;
  font-weight:400;
  color:rgba(10,10,10,1);
  line-height:21px;
  outline: none;
  cursor: pointer;
}
</style>

