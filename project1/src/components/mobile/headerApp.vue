<template>
<div class="wrapm">
    <div class="header">
        <h1 @click="showtab">
            <img src="../../assets/dh.png" alt="">
        </h1>
        <h4>
            {{$t(act)}}
        </h4>
        <ul v-if="show">
            <li v-for="(item , index) in nav" :key="index"  @click="go(item , index)" v-if="item.title != act">
                {{$t(item.title)}}
            </li>
        </ul>
        <p v-for="(item , index) in options" :key="index" v-show="item.value != label" @click="tabLang(item)">{{item.label}}</p>
    </div>
</div>
    
</template>

<script>
export default {
    data() {
        return {
            nav : [
                {
                    title : 'Venti',
                    link : '/'
                },
                {
                    title : 'message.header.txt1',
                    link : '/usM'
                },
                {
                    title : 'message.header.txt2',
                    link : '/TechnologyM'
                },
                {
                    title : 'message.header.txt3',
                    link : '/parthersM'
                },
                {
                    title : 'message.header.txt4',
                    link : '/teamM'
                },
                {
                    title : 'message.header.txt5',
                    link : '/craeersM'
                },
                {
                    title : 'message.header.txt6',
                    link : '/ventiLifeM'
                },
                {
                    title : 'message.header.txt7',
                    link : '/newsM'
                },
                // {
                //     title : 'team-descriptions',
                //     link : '/team-descriptions'
                // }
            ],
            options: [
                {
                    value: 'Eng',
                    label: 'English'
                },
                {
                    value: 'Cha',
                    label: '中文'
                }
            ],
            label : 'Eng',
            active : 100,
            act : 'message.header.txt1',
            show : false
        }
    },
    methods: {
        go (item , index) {
            // this.active = index
            // console.log(item.title)
            this.show = false
            this.$router.push(item.link)
            // this.act = item.title
        },
        tabLang (item) {
            this.label = item.value
            this.$i18n.locale = item.value
            localStorage.setItem('defaulti18n', item.value)
        },
        showtab () {
            this.show = !this.show
        }
    },
    mounted() {
           this.label = window.localStorage.getItem('defaulti18n') ? window.localStorage.getItem('defaulti18n') : 'Eng'
           console.log(this.$router.history.current.path)
           let n = this.$router.history.current.path
           switch (n) {
               case '/usM' : 
               this.act = 'message.header.txt1'
               break;
               case '/TechnologyM' : 
               this.act = 'message.header.txt2'
               break;
               case '/parthersM' : 
               this.act = 'message.header.txt3'
               break;
               case '/teamM' : 
               this.act = 'message.header.txt4'
               break;
               case '/craeersM' : 
               this.act = 'message.header.txt5'
               break;
               case '/ventiLifeM' : 
               this.act = 'message.header.txt6'
               break;
                case '/newsM' : 
               this.act = 'message.header.txt7'
               break;
               case '/newsM' : 
               this.act = 'message.header.txt7'
               break;
               case '/team-descriptions' : 
               this.act = ''
               break;
               case '/mobile' : 
               this.act = 'Venti'
               break;
               
           }

    },
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'zzz';
  src: url('../../assets/bx.ttf');
}
.wrapm {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
}
.header {
    background:rgba(255,255,255,1);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    // padding: 0 .4rem;
    h1 {
        width:1rem;
        height:100%;
        // background: url('../../assets/dh.png') no-repeat center;
        // background-size: cover;
        margin-left: .4rem;
        display: flex;
        align-items: center;
        img{
            width:.26rem;
            height:.32rem;
        }
    }
    h4 {
        font-size:.24rem;
        font-family:zzz !important;
        font-weight:800;
        color:rgba(0,0,0,1);
        
    }
    >p {
        margin-right: .4rem;
        width:1rem;
        // height:.32rem;
        white-space: nowrap;
        font-size:.20rem;
        font-family:zzz !important;
        font-weight:800;
        color:rgba(0,0,0,1);
        
    }
    ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        // margin-left: .35rem;
        flex: 1;
        top: 1rem;
        left: 0;
        z-index: 9999;
        width: 100%;
        background: #fff;
        li {
            margin-left: .05rem;
            font-size:.12rem;
            font-family:zzz !important;
            // letter-spacing:.1rem;
            font-weight:800;
            color:rgba(156,156,156,1);
            cursor: pointer;
            white-space: nowrap;
            text-align: center;
            margin-top: .44rem;
        }
        li.active {
            color: #000;
        }
        li:nth-child(1) {
            margin: 0;
        }
    }
    .lang {
        p {
            font-size:.12rem;
            font-family:FZLTHK--GBK1-0;
            font-weight:400;
            color:rgba(34,34,34,1);
            cursor: pointer;
        }
    }
}
</style>
