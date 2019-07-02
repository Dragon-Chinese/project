<template>
  <div class="index">
    <div class="banner">
      <h2>The Most Experienced Team in AV</h2>
      <img src="../assets/n.jpg" alt="">
    </div>
    <main>
        <li>
            <h2>Saman Amarasinghe, Ph.D., FOUNDER, VENTI TECHNOLOGIES</h2>
            <p>
                <strong>Professor Saman Amarasinghe</strong>
                is a Professor of Electrical Engineering and Computer Science at MIT and Associate Department Head of that department.  He is a member of CSAIL, and an advisor to the President of Sri Lanka on STEM education. He is a world leader in high performance domain-specific languages. His team has developed domain-specific languages providing unprecedented performance for target applications such as image processing, flow computing and graphics analysis.  He is a successful entrepreneur having founded the software company Determina which was acquired by VMWare.
            </p>
        </li>
        <li>
            <h2>Xinxin Du, PhD., FOUNDING CHIEF TECHNOLOGY OFFICER</h2>
            <p>
                <strong>Dr. Du </strong>
                holds a Ph.D from the National University of Singapore and worked as a Postdoctoral Fellow in the Singapore-MIT Alliance for Research and Technology Centre focusing on autonomous vehicles.  He holds a Bachelor degree from Nanyang Technological University.  He worked for six years doing leading research in AV technologies; Daniela Rus was his postdoctoral supervisor at SMART. He is a leading figure in the commercialization of driverless technology.
            </p>
        </li>
         <li>
            <h2>Daniela Rus, Ph.D., FOUNDER, VENTI TECHNOLOGIES</h2>
            <p>
                <strong>Professor Daniela Rus</strong>
                is a pioneer of driverless technology and Global AI, having started work in 2008. Rus is a Professor of Electrical Engineering and Computer Science at MIT and Director of MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL), MIT”s largest lab with over 1,000 people. She is a member of the National Academy of Engineering and the American Academy of Arts and Sciences. Rus has won numerous awards and speaks globally; she has twice attended Davos and presented on AI.  Prizes: 2017, Joseph Engelberger prize (the Nobel Prize in robotics science); 2002, MacArthur fellowship; 1996, NSF outstanding young professor award
            </p>
        </li>
         <li>
            <h2>Heidi Wyle, Ph.D., FOUNDER & CEO, VENTI TECHNOLOGIES; CHAIRMAN, VENTI CHINA</h2>
            <p>
                <strong>Heidi Wyle, Ph.D.</strong>
                has founded three companies including Computational Biology Corporation which was acquired by Agilent; she worked in venture capital with Bessemer. She is an expert in tech entrepreneurship and a sought-after speaker, mentor and advisor. Dr. Wyle holds a B.S. from Brown, a Ph.D. from MIT, and an M.B.A. from Harvard Business School as a Baker Scholar. Her Board service includes MIT, Harvard Medical School, Brown Medical School, the Brigham and Women’s Hospital Venture Advisory Board and Connors Center for Women’s Health, and MIT’s Koch Institute for Integrative Cancer Research. Board Member of the Massachusetts Women’s Forum. Fellow of the Royal Canadian Geographical Society. 
            </p>
        </li>
         <li>
            <h2>Wu Yang, VP of Business Development</h2>
            <p>
                <strong>Wu Yang</strong>
                holds a Master of Automotive Engineering from Tsinghua University and an MBA from CEIBS. He has 12 years experience in the automotive industry and mobility in Bosch, Ford, and Byton. He led Bosch’s Park Pilot China business during which time it grew from zero to 20+ programs with 10+ OEMs.  He was a founding member of Ford AP Smart Mobility and Byton Mobility in which positions he led strategy, partnership setup, and key program implementation.
            </p>
        </li>
         <li>
            <h2>Shuyan Zhao, Ph.D., Acting CEO Venti China & VP, Engineering</h2>
            <p>
                <strong>Dr. Zhao </strong>
                has a PhD in Computer Vision and Machine Learning from the Hamburg University of Technology, Germany.  Prior to joining Venti she was Senior Director of Bosch China. She led new product development from concept to mass production and was responsible for the development of Bosch’s ADAS product and the AD business unit from idea through achievement of the number one position in the China market; the product had a share of over 40% in China’s vision products market.
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
            font-weight: 800;
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
