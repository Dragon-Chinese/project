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
                    link : '/'
                },
                {
                    title : 'message.header.txt3',
                    link : '/'
                },
                {
                    title : 'message.header.txt4',
                    link : '/team'
                },
                {
                    title : 'message.header.txt5',
                    link : '/'
                },
                {
                    title : 'message.header.txt6',
                    link : '/'
                }
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
            active : 6
        }
    },
    methods: {
        go ({...item} , index) {
            this.active = index
            this.$router.push(item.link)
        },
        tabLang ({...item}) {
            this.label = item.value
            this.$i18n.locale = item.value
            localStorage.setItem('defaulti18n', item.value)
        }
    },
}
</script>
<style lang="scss" scoped>
.wrap {
    width: 100%;
    height: 75px;;
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
    height: 75px;
    display: flex;
    align-items: center;
    h1 {
        width:43px;
        height:53px;
        background: lightgreen;
    }
    ul {
        display: flex;
        margin-left: 65px;
        flex: 1;
        li {
            margin-left: 15px;
            font-size:15px;
            font-family:ProximaNova-Bold;
            font-weight:bold;
            color:rgba(156,156,156,1);
            cursor: pointer;
        }
        li:hover {
            color: lightskyblue;
        }
        li.active {
            color: lightskyblue;
        }
    }
    .lang {
        p {
            font-size:8px;
            font-family:FZLTHK--GBK1-0;
            font-weight:400;
            color:rgba(34,34,34,1);
            cursor: pointer;
        }
    }
}
</style>
