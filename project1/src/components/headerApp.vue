<template>
<div class="wrap">
    <div class="header">
        <h1 @click="go({link : '/'} , 7)">

        </h1>
        <ul>
            <li v-for="(item , index) in nav" :key="index" :class="index==active ? 'active' : ''" @click="go(item , index)">
                {{$t(item.title)}}
            </li>
        </ul>
        <div class="lang">
            <p v-for="(item , index) in options" :key="index" v-show="item.value != label" @click="tabLang(item)">{{item.label}}</p>
        </div>
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
                    link : '/us'
                },
                {
                    title : 'message.header.txt2',
                    link : '/Technology'
                },
                {
                    title : 'message.header.txt3',
                    link : '/parthers'
                },
                {
                    title : 'message.header.txt4',
                    link : '/team'
                },
                {
                    title : 'message.header.txt5',
                    link : '/craeers'
                },
                {
                    title : 'message.header.txt6',
                    link : '/ventiLife'
                },
                {
                    title : 'message.header.txt7',
                    link : '/news'
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
  src: url('../assets/bx.ttf');
}
.wrap {
    width: 100%;
    height: 99px;
    padding-top: 21px;
}
@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .header {
    width: 1024px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1024px) {
  .header {
    width: 960px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1200px) {
  .header {
    width: 1200px;
    margin: 0 auto;
  }
}
.header {
    background:rgba(255,255,255,1);
    // height: 120px;
    display: flex;
    align-items: center;
    h1 {
        width:69px;
        height:84px;
        background: url('../assets/logo.png') no-repeat;
        background-size: contain;
        cursor: pointer;
    }
    ul {
        display: flex;
        margin-left: 35px;
        flex: 1;
        li {
            margin-left: 25px;
            font-size:12px;
            font-family:zzz !important;
            letter-spacing: 1px;
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
            font-size:13px;
            font-family:zzz !important;
            letter-spacing: 1px;
            font-weight:800;
            color:#000;
            cursor: pointer;
            white-space: nowrap;
        }
    }
}
</style>
