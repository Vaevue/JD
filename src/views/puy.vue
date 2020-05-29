<template>
    <div class="puy">
        <i-top :title ='title' :flag ='flag'></i-top>
        <!-- 收货地址 -->
        <p class="dz" ref ='topPuy'>
            <span class ='icon'></span>
            <span>上海</span>
            <span>陆家嘴</span>
            <span>176****1</span>
            <span>张先生</span>
        </p>
        <!-- 结算列表 -->
        <div class="shopList" ref='bt'>
            <ul>
                <li v-for ='item in shopList' :key ='item.name'>
                    <div class="left">
                        <img v-lazy="item.ImgUrl">
                    </div>
                    <div class="right">
                        <p class="Ritop">{{item.name}}</p>
                        <p class="js">
                            <span>{{item.colorName}}</span>
                            <span>{{item.sizeName}}</span>
                        </p>
                        <p class="info">
                            <span class ='price'>￥{{item.price}}</span>
                            <span class ='page'>x{{item.page}} </span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 支付-->
        <div class="bt">
            <p>
                <span>商品金额</span>
                <span class="BtRight">￥94.00</span>
            </p>
            <p>
                <span>运费</span>
                <span class="BtRight">+￥0.00</span>
            </p>
            <div class="zhifu">
                <span>在线支付</span>
            </div>
        </div>
        <!-- 底部LOGO -->
        <div class="logo">
            <img src="data:image/png;base64,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">
        </div>
    </div>
</template>

<script>
import iTop from '../assets/vue/top'
export default {
    data(){
        return {
            title :"确认订单",
            flag : false,
            shopList : []
        } 
    },
    created(){
        document.title = '确认订单'
      this.shopList = this.$route.query.data
    },
    mounted(){
        window.addEventListener('scroll',this.scrollTop)
    },
    methods:{
        scrollTop(){
           if(this.$refs.topPuy){
                if(window.pageYOffset >= 30){
                this.$refs.topPuy.style.position ='fixed'
                this.$refs.topPuy.style.top =0
                this.$refs.topPuy.style.width ='100%'
                this.$refs.bt.style.marginTop = '100px'
            }else {
                this.$refs.topPuy.style.position ='static'
                this.$refs.bt.style.marginTop = '0'
            }
           }
        }
    },
    components:{iTop}
}
</script>

<style lang="less" scoped>
.logo{
    text-align: center;
    margin-top: 80px;
    img{
        width: 200px;

    }
}
.puy{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f7f7f7;
    .dz{
        height: 100px;
        line-height: 100px;
        background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAKBAMAAACOO0tGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf///4u16Oxtbezz/J3B7NDh9vSmprjS8vGNjfjDw/vd3f7w8O57e0EOI68AAABSSURBVCjPY2CAAE4l7GACVJ4hUBArEIXJL8KuXw0mz4xdv2ABVJ77EHYDGmAGmGDXLwKT58CuX2cDTIEjdgOcYfJJ2A3Qgsmz4/CBwWgQUiMIAXzCOFELLk/nAAAAAElFTkSuQmCC') -7px bottom repeat-x;
        background-size: 100px 10px;
        background-color: #fff;
        span{
            margin : 0 30px;
        }
        .icon{
            display: inline-block;
            height: 40px;
            width: 40px;
            background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTM7Ozs3Nzc3Nzc7Ozs3NzdbW1s3Nzc3NzdHR0czMzPvJf4cAAAAKdFJOUwA46tVSdgy3mSArXJXMAAAA20lEQVQ4y41UWw4EIQgTUFTuf+DdTWZ9jEUl8Yc0lFYghCk0lixsLDnV4Adle4K/T6IDqw3W4BAaDURacclg5EucWXnJMDfmPsUHst4QvwWNBQupUhlLwg6ZnhT3HCHmf1IJcWdkRmfPurZIqB9pud7PYIUCNbYHGqgIqflazM6eAO2hdVYjNHz/hXKabjQUuhuz88LAtckeTsLlLtB7u8rlFjp6GBwWOq/gUzLdEGPyaVPHK8UnxU6byT+QaXN1XDdFd8D+lVy3uCadKRyiius0MukC96vJaRXyAbL3Hge5swSbAAAAAElFTkSuQmCC');
            background-size: cover;
            margin-right: 10px;
        }
    }
    .bt{
        background-color: #fff;
        margin-top: 30px;
        padding : 0 20px;
        .zhifu{
            width: 90%;
            margin: 20px auto;
            height: 100px;
            line-height: 100px;
            color:#fff;
            text-align: center;
            background-color: #3884ff;
            border-radius: 50px;
        }
        p{
            display: flex;
            font-size: 35px;
            justify-content: space-between;
            line-height: 50px;
            align-items: center;
            .BtRight {
                color:red;
            } 
        }
    }
    .shopList{
        margin-top: 40px;
        padding : 0 20px;
        background-color: #fff;
        ul{
            li{
                display: flex;
                width: 100%;
                margin : 30px 0;
                .left{
                    img{
                        width:  170px;
                        height: 170px;
                        border-radius: 20px;
                    }
                    
                }
                .right{
                    margin-left: 30px;
                    width: 100%;
                    overflow: hidden;
                    .Ritop{
                        font-size: 35px;
                        font-weight: 700;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .js{
                        margin-top: 20px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        span{
                            padding-right:20px;
                            color:#999;
                        }
                    }
                    .info{
                        margin-top: 20px;
                        .price{
                            color:red;
                            font-size: 30px;
                        }
                        .page{
                            float: right;
                            color:#999;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>