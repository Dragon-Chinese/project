<template>
  <div class="index">
    <div class="banner">
      <h2>The Most Experienced Team in AV</h2>
      <img src="../assets/n.jpg" alt="">
    </div>
    <main>
         <li>
            <h2>{{$t('message.ls.txt9')}}</h2>
            <p>
                <strong>{{$t('message.ls.txt10')}}</strong>
                {{$t('message.ls.txt11')}}
            </p>
        </li>
        <li>
            <h2>{{$t('message.ls.txt6')}}</h2>
            <p>
                <strong>{{$t('message.ls.txt7')}}</strong>
                {{$t('message.ls.txt8')}}
            </p>
        </li>
        <li>
            <h2>{{$t('message.ls.txt0')}}</h2>
            <p>
                <strong>{{$t('message.ls.txt1')}}</strong>
                {{$t('message.ls.txt2')}}
            </p>
        </li>
        <li>
            <h2>{{$t('message.ls.txt3')}}</h2>
            <p>
                <strong>{{$t('message.ls.txt4')}}</strong>
                {{$t('message.ls.txt5')}}
            </p>
        </li>
          <li>
            
             <h2>{{$t('message.ls.txt12')}}</h2>
            <p>
                <strong>{{$t('message.ls.txt16')}}</strong>
                {{$t('message.ls.txt17')}}
            </p>
        </li>
         <li>
           <h2>{{$t('message.ls.txt15')}}</h2>
            <p>
                <strong>{{$t('message.ls.txt13')}}</strong>
                {{$t('message.ls.txt14')}}
            </p>
        </li>
    </main>
  </div>
</template>

<script>

import Mp from '../assets/v1.webm'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  mounted() {

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@font-face {
  font-family: 'jian';
  src: url('../assets/jian.ttf');
}

.banner {
  // background: url('../assets/news.png') no-repeat center;
  // background-size:100% 100%;
  // background-size: cover;
  position: relative;
}
main {
    // width: 100%;
    li {
        margin-top: 61px;
        border-bottom: 1px solid rgba(210,210,210,1);
        padding-bottom: 61px;
        h2 {
            font-family: ProximaNova-Regular;
            font-size: 21px;
            text-transform: none;
            letter-spacing: .03em;
            font-weight: 100;
            font-style: normal;
        }
        p {
            font-size:15px;
            font-weight:200;
            color:rgba(0,0,0,1);
            margin-top: 30px;
            font-family: jian;
            line-height: 23px;
            strong {
                
                font-family: jian;
                font-size:15px;
                font-weight: 800;
            }
        }
    }
    li:last-child {
        border: none;
    }
}
</style>
