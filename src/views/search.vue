<template>
    <div class="search">
        <div class="topSearch">
            <div class="left" @click ='back'>
                <span class ='icon'></span>
            </div>
            <div class="center">
                <input v-if ='list2[5]' type="text" @keyup="keyuop(vm)" :placeholder="list2[5].searchword" v-model ='KeyWords'>
                <span></span>
            </div>
            <div class="right">
                <span @click ='seach'>搜索</span>
            </div>
        </div>
        <div class="searchHistory" v-show ='KeyWords.length == 0'>
            <!-- 最近搜索 -->
            <s-box :title='title' v-show ='list.length !== 0' :list ='list'></s-box>
            <!-- 热门搜索 -->
            <s-box :title ='title2' :list ='list2'></s-box>
        </div>
        <!-- 搜索填充 -->
        <div class="searchList" v-show ='flag && KeyWords.length !== 0'>
            <ul>
                <li  v-for ='item in SearchList' :key ='item.key' @click ='goSearchInfo(item)'>
                    <span class="left">
                        {{item.key}}
                    </span>
                    <div class="right" v-if ='item.tag'>
                        <span v-for ='list in item.tag' :key ='list.tsh'>{{list.tsh}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import sBox from '../components/search/searchBox'
import {debounce} from '../assets/js/fangdou'
export default {
    components:{sBox},
    data(){
        return {
            title  : '最近搜索',
            title2 :　'热门搜索',
            list2 :[],
            list : [],
            KeyWords:'',
            searKeywords:[],
            vm :this,
            SearchList :[],
            flag:false
        }
    },
    created(){
        this.jsonp('https://wq.jd.com/bases/searchpromptwords/searchpromptwords?_=1590135809223&sceneval=2&callback=jsonpCBKA')
        window.jsonpCBKA = res=>{
           this.list2 =  res.searchwords
        }
        this.getSearchHistory()
    },
    methods:{
        goSearchInfo(item){
            this.flag = true
            this.$router.push(`/search/${item.key}`)
        },
        back(){
            this.$router.back()
        },
        keyuop: debounce((vm)=> {
            vm.SearchList = []
            vm.jsonp(`https://wq.jd.com/bases/searchdropdown/getdropdown?terminal=m&zip=1&key=${vm.KeyWords}&newjson=1&_=1590153790696&sceneval=2`,(err,res)=>{
              vm.SearchList = res
              vm.flag = true
            })
         },500),
        seach(){
            if(this.KeyWords == ''){
                return 
            }
        let obj = {
            showword : this.KeyWords,
            searchword : this.KeyWords
        }
        let arr = JSON.parse(localStorage.getItem('search')) || []
        if(arr.length >=8){
            arr.pop()
            arr.unshift(obj)
            localStorage.setItem('search',JSON.stringify(arr))
            return 
        }
        arr.push(obj)
        localStorage.setItem('search',JSON.stringify(arr))
        this.$router.push(`/search/${obj.searchword}`)
    },

    getSearchHistory(){
        let list = JSON.parse(localStorage.getItem('search')) || []
        this.list = list
    }
    }
}
</script>

<style lang="less" scoped>
.searchList{
    background-color: #fff;
    ul{
        padding : 0 20px;
        li{
            line-height: 90px;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            .left{
            width: 20%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            }
            .right{
                max-width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
                span{
                    display: inline-block;
                    min-width: 50px;
                    padding : 0 20px;
                    height: 50px;
                    margin : 0 20px;
                    text-align: center;
                    line-height: 50px;
                    background-color: #f0f2f5;
                    color: #686868;
                    text-overflow: ellipsis;
                    border-radius: 10px;
                }
            }
        }
    }
}
.icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-repeat: no-repeat;
}
.search{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .searchHistory{
        background-color: #fff;
        padding : 20px;
        padding-bottom: 50px;
    }
    .topSearch{
        display: flex;
        height: 100px;
        align-items: center;
        background-color: #fff;
        padding : 0 20px;
        border-bottom: 1px solid #ddd;
        .left{
            width: 5%;
            span{
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTF1famFhal1fal1fal5ga39/f15hbF5ga2JidV1fasLnCw4AAAAKdFJOUwDxN13aWgVemg1awhgkAAAATUlEQVQoz2NgGAjA5FiAKai4SgxToRQWQcVVqwKwKFyMTaHBUFTI4IVFIeeqVQ0MRKnEGkAg25cyEGc9VocOCqUBxKUQrGkJe6qjEgAAfcYsJDT7oy4AAAAASUVORK5CYII=');
            }
        }
        .center{
            width: 75%;
            margin : 0 5%;
            position: relative;
            input{
                width: 100%;
                height: 70px;
                background-color: #f5f5f5;
                border-radius: 20px;
                padding-left: 50px;
                box-sizing: border-box;
            }
            span{
                position: absolute;
                height: 40px;
                width: 40px;
                left: 10px;
                top: 50%;
                margin-top: -20px;
                background:url('https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline=') no-repeat;
                background-position: -165px 5px;
                background-size: 400px 400px;
          }
        }
        .right{
            height: 70px;
            width: 13%;
            text-align: center;
            line-height: 70px;
            background-color: #e93b3d;
            color:#fff;
            border-radius: 10px;
        }
    }
}
</style>