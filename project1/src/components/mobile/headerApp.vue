<template>
<div class="wrap">
    <div class="header">
        <h1 @click="go({link : '/mobile'} , 7)">

        </h1>
        <ul>
            <li v-for="(item , index) in nav" :key="index" :class="index==active ? 'active' : ''" @click="go(item , index)">
                {{$t(item.title)}}
            </li>
        </ul>
        <!-- <div class="lang">
            <p v-for="(item , index) in options" :key="index" v-show="item.value != label" @click="tabLang(item)">{{item.label}}</p>
        </div> -->
    </div>
</div>
    
</template>

<script>
export default {
    data() {
        return {
            nav : [
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
                    label: '简体中文'
                }
            ],
            label : 'Eng',
            active : 100
        }
    },
    methods: {
        go (item , index) {
            this.active = index
            this.$router.push(item.link)
        },
        tabLang (item) {
            this.label = item.value
            this.$i18n.locale = item.value
            localStorage.setItem('defaulti18n', item.value)
        }
    },
    mounted() {
           this.label = window.localStorage.getItem('defaulti18n') ? window.localStorage.getItem('defaulti18n') : 'Eng'
    },
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'zzz';
  src: url('../../assets/bx.ttf');
}
.wrap {
    width: 100%;
    height: 1rem;
    padding: 0 .4rem;
    border-bottom: 1px solid #ccc;
    
    // padding-top: .21rem;
}
.header {
    background:rgba(255,255,255,1);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    
    h1 {
        width:.49rem;
        height:.44rem;
        background: url('../../assets/logo.png') no-repeat;
        background-size: contain;
    }
    ul {
        display: flex;
        margin-left: .35rem;
        flex: 1;
        li {
            margin-left: .05rem;
            font-size:.12rem;
            font-family:zzz !important;
            // letter-spacing:.1rem;
            font-weight:800;
            color:rgba(156,156,156,1);
            cursor: pointer;
            white-space: nowrap;
        }
        li:hover {
            color: #000;
        }
        li.active {
            color: #000;
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
