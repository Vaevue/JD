<template>
    <div class="searchBox">
        <div class="top">
            <div class="left">
                {{title}}
            </div>

            <div class="right">
                <span class ='icon' v-show ='title == "最近搜索"' @click ='clear'></span>
                <span v-show ='title == "热门搜索"' @click ='sl'>隐藏</span>
            </div>
        </div>
        <div class ='searchList' v-if ='list && flag'>
            <span v-for ='(item,index) in list' :key ='index' @click ='goSearch(item)'>{{item.showword}}</span>
        </div>
        <div class="box" v-show ='!flag'>
            <span>已隐藏搜索发现</span>
        </div>
    </div>
</template>

<script>
import EventBus from '../../assets/js/EventBus'
export default {
    props:['title','list'],
    data(){
        return {
            flag : true
        }
    },
    methods:{
        goSearch(item){
           EventBus.$emit('BoxGoSearch',item)
           console.log(item)
           this.$router.push(`/search/${item.searchword}`)
           let arr = JSON.parse(localStorage.getItem('search')) || []
            arr.push(item)
            localStorage.setItem('search',JSON.stringify(arr))
        },
        clear(){
            localStorage.removeItem('search')
            this.$router.push('/search')
        },
        sl(){
            this.flag = !this.flag
        }
    }
}
</script>

<style lang="less" scoped>
.box{
    height: 300px;
    width: 100%;
    text-align: center;
    background-color: #fff;
    padding-top: 100px;
    box-sizing: border-box;
    span{
        color:#999;
    }
}
.searchBox{
    font-size: 32px;
        .icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position:0 -65px;
    background-image: url('https://st.360buyimg.com/so/images/layout/search-sprites.png');
    } 
    .top{
        display: flex;
        justify-content: space-between;
        font-size: 36px;
        .right{
            color:#999;
        }
    }
    .searchList{
        span{
            display: inline-block;
            height: 50px;
            min-width: 40px;
            padding : 0 30px;
            margin : 20px 20px 20px 0;
            border-radius: 10px;
            line-height: 50px;
            background-color: #f0f2f5;
            color:#686868;
        }
    }
}
</style>