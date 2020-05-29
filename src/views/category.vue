<template>
    <div class="category">
        <!-- 头部搜索框 -->
       <div class="top">
            <v-search-top></v-search-top>
       </div>
       <!-- 中间内容 -->
        <div class="context">
            <div class="left" ref ='product'>
                <!-- 左边一级分类 -->
                <ul>
                    <li ref ='li'  v-for ='(item,index) in city' @click ='erji(index)' :class ='[index ==0 ? "active" : index == 1 ? "bR" :""]' :key ='index'>
                        {{item.keyword || item.areaName}}
                    </li>
                </ul>
            </div>
            <div class="right" ref ='right' >
                <!-- 右边二级分类  -->
                <div v-if ='cityTwo.level1words'>
                        <div class="RightBox" v-for ='(item,index) in cityTwo.level2words||cityTwo.level1words' :key ='index'>
                    <div class="topTitle">
                        <p class="titl">{{item.keyword}}</p>
                    </div>
                    <div class="cityContent">
                        <ul>
                            <li v-for ='list in item.level2words' :key ='list.keywordId'> 
                                <img v-lazy="list.imageUrl">
                                <p class="name">{{list.keyword}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div v-if ='cityTwo.level2words'>
                    <div class="RightBox">
                         <div class="cityContent">
                        <ul>
                            <li v-for ='list in cityTwo.level1words' :key ='list.keywordId'> 
                                <img v-lazy="list.imageUrl">
                                <p class="name">{{list.keyword}}</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部文字 -->
       <div class="footersss">
            <v-footer></v-footer>
       </div>
    </div>
</template>

<script>
// npm install better-scroll --save-dev  安装
import BScroll from 'better-scroll'
import vFooter from '../assets/vue/footer'
import vSearchTop from '../assets/vue/searchTop'
import axios from 'axios'
export default {
    components:{vFooter,vSearchTop},
    data(){
        return {
            // 分类数据
            city : [],
            // 二级分类数据
            cityTwo:[]
        }
    },
    created(){
        // 分类数据请求
        this.getcity()
         this.$nextTick(() => {
    this.initScroll()
            })
    
    },
    methods:{
        erji(index){
        let li= this.$refs.li
        for(let i =0;i<li.length;i++){
            li[i].classList.remove('active')
            li[i].classList.remove('bR')
        }
        li[index].classList.add('active')
        li[index+1].classList.add('bR')
        this.cityTwo = this.city[index]
        },
  initScroll(){ //实例化       
    let product= this.$refs.product   //给需要区域滚动的内容的父盒子添加ref属性
    this.product= new BScroll(product, {click: true})   //better-scroll 默认会阻止浏览器的原生 click 事件,需要配置一下click属性
},
        getcity (){
            // 请求分类列表
             axios.get('https://www.easy-mock.com/mock/5ecafcbb88a8c62f93057b7b/city/city').then(res=>{
                //  一级分类数据存放
                 this.city = res.data.data
                //  获取第一个二级分类  刚进入页面要显示第一个分类
                 this.cityTwo = this.city[0]
             })
        }
    }
}
</script>

<style lang="less" scoped>
.footersss{
    position: absolute;
}
.top{
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
}
.context{
    width: 100%;
    // 头部导航固定定位 要marigin头部i导航宽度100px
    display: flex;
    position: absolute;
    top: 100px;
    bottom: 30px;
    background: #fff;
    // 左边一级分类
    .left{
        width: 20%;
        overflow: hidden;
        margin-bottom: 100px;
        ul{
            width: 100%;
            .active{
                background-color: #f6f6f6;
                position: relative;
                color:#DA8C7F;
            }
            .bR{
                border-top-right-radius: 10px;
            }
            .active::after{
                content : " ";
                position: absolute;
                width: 4px;
                height: 80%;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                background-color:#D6A9A7;
            }
            li{
                width: 100%;
                height: 100px;
                background-color: #fff;
                text-align: center;
                line-height: 100px;
            }
        }
    }
    // 一级分类结束
    // 右边二级分类开始
    .right::-webkit-scrollbar{
        width: 0;
    }
    .right{
        background-color: #f6f6f6;
        width: 80%;
        font-size: 35px;
        height: 90%;
        overflow: auto;
        .RightBox{
            margin-left: 5%;
            width: 95%;
            .topTitle{
                width: 100%;
                .titl{
                    height: 100px;
                    line-height: 100px;
                }
            }
            .cityContent{
                width: 95%;
                background-color: #fff;
                border-radius: 20px;
                padding :  30px;
                box-sizing: border-box;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li{
                        width: 28%;
                        text-align: center;
                        margin : 20px 0;
                        font-size: 30px;
                        p{
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        img{
                            width: 100%;
                            height: 170px;
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>