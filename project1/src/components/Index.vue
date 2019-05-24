<template>
  <div class="index">
    <div class="banner">
        <h2>Venti Technologies</h2>
    </div>
    <main>
      <div class="topMain">
          <div class="left">
              <div>VENTI IS THE LEADER IN SAFE SPEED <br/> AUTONOMOUS MOBILITY</div>
              <p>Improving our lives and improving our planet by disrupting <br /> transportation, commerce, and society. </p>
          </div>
          <div class="right">

          </div>
      </div>
      <div class="line"></div>
      <h3>THE VENTI ADVANTAGE</h3>
      <p class="power">
        The Power of People, Partnerships and Intelligent Science
      </p>  
      <div class="main">
        <div>
          <p class="title">THE VENTI ADVANTAGE</p>
          <div class="img"></div>
          <p class="txt">Our autonomy technology benchmarked top in China and is significantly cheaper than the competition.</p>
          <button>READ ABOUT OUR TECHNOLOGY</button>
        </div>
        <div>
          <p class="title">THE VENTI ADVANTAGE</p>
          <div class="img"></div>
          <p class="txt">Our autonomy technology benchmarked top in China and is significantly cheaper than the competition.</p>
          <button>READ ABOUT OUR TECHNOLOGY</button>
        </div>
        <div>
          <p class="title">THE VENTI ADVANTAGE</p>
          <div class="img"></div>
          <p class="txt">Our autonomy technology benchmarked top in China and is significantly cheaper than the competition.</p>
          <button>READ ABOUT OUR TECHNOLOGY</button>
        </div>
      </div>
      <div class="line1"></div>
      <div class="botMain">
        <p class="title">
          THE VENTI OPPORTUNITY
        </p>
        <p class="title2">
          Moving People and Moving Goods
        </p>
        <p class="txt">
          Our Safe Speed system is the fastest, most powerful, safest and most reliable in China and has powered 6 vehicle classes in industrial and people-moving applications.  It is fast, mature, and ready for large scale applications with a substantial cost advantage from our algorithmic power and uncompromising cost focus.
        </p>
        <div class="img">
          <div class="left">
              <div class="top"></div>
              <p>VENTI的工业应用不断专注于成本，价格更便宜，准确度更高，更可靠，并且实施时间更短。</p>
          </div>
          <div class="right">
              <div class="top"></div>
              <p>专注于成本，在移动货物应用方面具有30-60％的成本优势</p>
          </div>
        </div>
      </div>
      <div class="line3"></div>
      <div class="bottom">
        <p class="title">VENTI MAKES THE WORLD A BETTER PLACE</p>
        <p class="title2">Lives improve, Pollution reduces, Animals prosper</p>
        <div class="fotImg">
          <div>
            <div class="img"></div>
            <p>IMPROVING PEOPLE’S LIVES THROUGH COST-EFFECTIVE,RELAXING TRANSPORTATION</p>
          </div>
          <div>
            <div class="img"></div>
            <p>IMPROVING PEOPLE’S LIVES THROUGH COST-EFFECTIVE,RELAXING TRANSPORTATION</p>
          </div>
          <div>
            <div class="img"></div>
            <p>IMPROVING PEOPLE’S LIVES THROUGH COST-EFFECTIVE,RELAXING TRANSPORTATION</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './headerApp.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  components : {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  background: url('../assets/indexbanner.png') no-repeat;
  background-size: cover;
  h2 {
    font-size:60px;
    font-family:ProximaNova-Regular;
    font-weight:400;
    color:rgba(254,254,254,1);
    text-align: center;
    margin: 0;
  }
}
main {
  .topMain {
    margin-top: 104px;
    // background: red;
    display: flex;
    justify-content: space-between;
    .right {
      width:482px;
      height:314px;
      background: #aaa;
    }
    .left {
      div {
        font-size:36px;
        font-family:ProximaNova-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
      }
      p {
        margin-top: 50px;
        font-size:22px;
        font-family:SourceHanSerifCN-Medium;
        font-weight:500;
        font-style:italic;
        color:rgba(68,68,68,1);
      }
    }
  }
  .line {
    margin-top: 111px;
    width:100%;
    height:1px;
    background:rgba(232,232,232,1);
  }
  h3 {
    font-size:36px;
    font-family:ProximaNova-Regular;
    font-weight:400;
    color:rgba(34,34,34,1);
    margin-top: 60px;
  }
  .power {
    font-size:28px;
    font-family:Bodoni-Normal-Italic;
    font-weight:400;
    font-style:italic;
    color:rgba(34,34,34,1);
    margin-top: 48px;
  }
  .main {
    display: flex;
    justify-content: space-between;
    margin-top: 68px;
    >div {
      display: flex;
      flex-direction: column;
      width: 378px;
      .title {
        font-size:22px;
        font-family:ProximaNova-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
      }
      .img {
        width:378px;
        height:284px;
        background: #aaa;
        margin-top: 38px;
      }
      .txt {
        font-size:14px;
        font-family:ProximaNova-Regular;
        font-weight:400;
        color:rgba(68,68,68,1);
        margin-top: 39px;
        line-height:24px;
      }
      button {
        width:277px;
        height:46px;
        border:2px solid rgba(0,0,0,1);
        border-radius:3px;
        outline: none;
        cursor: pointer;
        font-size:12px;
        font-family:ProximaNova-Regular;
        font-weight:bold;
        color:rgba(0,0,0,1);
        margin-top: 44px;
      }
    }
      >div:nth-child(1) {
        .img {
          background: url('../assets/index1.png') no-repeat;
          background-size: cover;
        }
      }
      >div:nth-child(2) {
        .img {
          background: url('../assets/index2.png') no-repeat;
          background-size: cover;
        }
      }
      >div:nth-child(3) {
        .img {
          background: url('../assets/index3.png') no-repeat;
          background-size: cover;
        }
      }
  }
  .line1 {
    width: 100%;
    height:1px;
    background:rgba(232,232,232,1);
    margin-top: 40px;
  }
  .botMain {
    .title {
      font-size:36px;
      font-family:ProximaNova-Regular;
      font-weight:400;
      color:rgba(34,34,34,1);
      margin-top: 65px;
    }
    .title2 {
      font-family:Bodoni-Normal-Italic;
      font-weight:400;
      font-style:italic;
      color:rgba(34,34,34,1);
      margin-top: 38px;
    }
    .txt {
      font-size:13px;
      font-family:ProximaNova-Regular;
      font-weight:400;
      color:rgba(68,68,68,1);
      line-height:24px;
      margin-top: 36px;
    }
    .img {
      margin-top: 41px;
      display: flex;
      justify-content: space-between;
      .left {
        .top {
          background: url('../assets/index4.png') no-repeat;
          background-size: cover; 
          width:686px;
          height:536px;
        }
        p {
          font-size:12px;
          font-family:ProximaNova-Regular;
          font-weight:400;
          color:rgba(68,68,68,1);
          margin-top: 21px;
        }
      }
      .right {
        .top {
          width:480px;
          height:536px;
          background: url('../assets/index5.png') no-repeat;
          background-size: cover; 
        }
        p {
          font-size:12px;
          font-family:ProximaNova-Regular;
          font-weight:400;
          color:rgba(68,68,68,1);
          margin-top: 21px;
        }
      }
    }
  }
  .line3 {
    width:100%;
    height:1px;
    background:rgba(232,232,232,1);
    margin-top: 40px;
  }
  .bottom {
     .title {
      font-size:36px;
      font-family:ProximaNova-Regular;
      font-weight:400;
      color:rgba(34,34,34,1);
      margin-top: 65px;
    }
    .title2 {
      font-family:Bodoni-Normal-Italic;
      font-weight:400;
      font-style:italic;
      color:rgba(34,34,34,1);
      margin-top: 38px;
    }
    .fotImg {
      display: flex;
      justify-content: space-between;
      margin-top: 97px;
      >div {
        width:376px;
        .img {
          width: 100%;
          height:250px;
          background: lime;
        }
        p {
          font-size:12px;
          font-family:ProximaNova-Regular;
          font-weight:400;
          color:rgba(109,109,109,1);
          line-height:18px;
          margin-top: 21px;
          width: 298px;
        }
      }
       >div:nth-child(1) {
        .img {
          background: url('../assets/index6.png') no-repeat;
          background-size: cover;
        }
      }
      >div:nth-child(2) {
        .img {
          background: url('../assets/index7.png') no-repeat;
          background-size: cover;
        }
      }
      >div:nth-child(3) {
        .img {
          background: url('../assets/index8.png') no-repeat;
          background-size: cover;
        }
      }
    }
  }

}
</style>
