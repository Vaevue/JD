<template>
    <div class="me">
        <i-top :title ='title'></i-top>
        <!-- TOP用户设置 -->
        <div class="topInfo">
            <div class="left">
                <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png">
                <p>待实名认证></p>
            </div>
            <p class='shezhi'> <span></span> 账户设置</p>
            <div class="center">
                <p class="name">
                    jd_KPhpZboTbRxD
                    <span class ='ionc'></span> 
                </p>
                <p class="userName">
                  用户名 : jd_KPhpZboTbRxD
                </p>
                <p class="namess">
                    <span>京享值202</span>
                    <span>小白信用60.3 ></span>
                </p>
            </div>
             <div class="bts">
                 <div class="left">
                     <span></span>
                 </div>
                 <div class="center">
                     <span>买PLUS年卡，送30元红包  </span>
                 </div>
                 <div class="right">
                     <span>立即预约</span>
                 </div>
             </div>
        </div>

        <div class="box fk">
            <ul>
                <li>
                    <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png">
                    <p>待付款</p>
                </li>

                <li>
                    <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png">
                    <p>待收货</p>
                </li>

                <li>
                    <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png">
                    <p>退换/售后</p>
                </li>

                <li>
                    <img src="https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png">
                    <p>全部订单</p>
                </li>
            </ul>
        </div>

        <div class="box jd">
            <ul>
                <li>
                    <p class ='top'>0张</p>
                    <p>京东券</p>
                </li>

                 <li>
                    <p class ='top'>开通有礼</p>
                    <p>白条</p>
                </li>

                 <li>
                    <p class ='top'>0个</p>
                    <p>京豆</p>
                </li>

                 <li>
                    <p class ='top'>0元</p>
                    <p>红包</p>
                </li>
                
                <li>
                    <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png">
                    <p>我的资产</p>
                </li>
            </ul>
        </div>
        
        <div class="box sc">
            <ul v-if ='$store'>
                <li>
                    <p>0</p>
                    <p>商品收藏</p>
                </li>
                
                <li>
                    <p>0</p>
                    <p>店铺收藏</p>
                </li>

                <li>
                    <p>0</p>
                    <p>我的足迹</p>
                </li>
            </ul>
        </div>

        <div class="box fk">
            <ul>
                <li>
                    <img src="https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png.webp">
                    <p>我的预约</p>
                </li>

                <li>
                    <img src="https://img12.360buyimg.com/img/s64x64_jfs/t1/97016/19/15154/2382/5e6b8e86E17a7527c/eeed6fdf78de3847.png.webp">
                    <p>高价回收</p>
                </li>

                <li>
                    <img src="https://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png.webp">
                    <p>京东火车票</p>
                </li>

                <li>
                    <img src="https://img14.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png.webp">
                    <p>应用推荐</p>
                </li>

                
                <li>
                    <img src="https://img13.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png.webp">
                    <p>京东机票</p>
                </li>

                <li>
                    <img src="https://img30.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png.webp">
                    <p>京东酒店</p>
                </li>

                <li>
                    <img src="https://img12.360buyimg.com/img/s64x64_jfs/t1/102785/29/14987/2346/5e6b8ed9Ee5ab6266/d6d34952c182fb1b.png.webp">
                    <p>闲置管家</p>
                </li>
            </ul>
        </div>
        <!-- 客户服务 -->
        <div class="khfw box">
            <span>客户服务</span>
            <span class ='icon'></span>
        </div>
        <div class="logo box">
            <img src="data:image/png;base64,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">
        </div>
    </div>
</template>

<script>
import iTop from '../assets/vue/top'
export default {
    components:{iTop},
    data(){
        return {
            title : '我的京东'
        }
    },
}
</script>

<style lang="less" scoped>
.logo{
height: 400px;
text-align: center;
img{
    margin-top: 130px;
    width: 300px;
    height: 100px;
}
}
.khfw{
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    .icon{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'%3E%3Cpath fill='%23CCC' fill-rule='evenodd' d='M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z'/%3E%3C/svg%3E");
    }
}
.box{
    margin : 30px 0;
    background-color: #fff;
    width: 100%;
    padding :  20px;
    box-sizing: border-box;
}
.shezhi{
    position: absolute;
    right: 20px;
    top: 20px;
    color:rgba(76,0,0,.7);
    span{
        display: inline-block;
        height: 30px;
        width: 30px;
        background-repeat: no-repeat;
        background-image:url('https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png');
        background-size: cover;
    }
}
.me{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#f7f7f7;
    overflow: auto;
    font-size: 30px;
    .sc{
        ul{
            display: flex;
            justify-content: space-between;
            li{
                width: 33%;
                text-align: center;
                P:first-child{
                    font-size: 35px;
                }
                p{
                    line-height: 60px;
                }
            }
        }
    }
    .jd{
        font-size: 30px;
        ul{
            display: flex;
            li{
                width: 20%;
                text-align: center;
                img{
                    width: 50px;
                    height: 50px;
                    margin-bottom: 10px;
                }
                .top{
                    min-width: 50px;
                    height: 50px;
                    white-space: nowrap;
                    margin-bottom: 10px;
                    color: #e93b3d;
                }
            }
        }
    }
    .fk{

        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25%;
                text-align:center;
                margin: 20px 0;
                img{
                    width: 50px;
                    height: 50px;
                    margin-bottom: 20px;
                }
            }
        }
    }
    .topInfo{
    background: linear-gradient(90deg,#eb3c3c,#ff7459);
    box-shadow: 0 2px 4px rgba(228,57,60,.4);
    display: flex;
    padding : 80px 30px 100px 30px;
    align-items: center;
    position: relative;
    .left{
        position: relative;
        margin-right: 40px;
        height: 150px;
        width: 150px;
        img{
            width: 150px;
            height: 150px;
        }
        p{
             position: absolute;
             bottom: 0;
             width: 100%;
             white-space: nowrap;
             color: hsla(0,0%,100%,.7);
             background-color: rgba(0,0,0,.5);
             padding : 5px 10px;
             border-radius: 10px;
        }
    }
    .center{
        font-size: 34px;
        color:#fff;
        .ionc {
            display: inline-block;
            width: 30px;
            height: 30px;
            background-size: cover;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwB3a5m4Veb3H6QDji7WgAgChXPEAAAApElEQVQoz3WSSwLDIAhEMUHBtkm4/2mL+Ld1VvGN4gQByGKHgehCxzCKI0lVHCzfsYp85YcsOsp++ZGd4anOaccp3RMnXgpHPbDw4jC4MQ8+apzp0wF2/v4EdYwLQugcQJ3MJQANXJ26pGYYf7WIVEstXEthzzlwvTzH5YVrXPvBa+VpZ1rfmmfisTTR39fUXWvitu37h9o/bRoG+TsMbXxCH58vmgwXoPcjyaAAAAAASUVORK5CYII=');
        }
        p{
            padding: 10px 0;
        }
        .userName{
            color: hsla(0,0%,100%,.7);
            font-size: 20px;
        }
        .namess{
            span{
                margin-right: 20px;
                font-size: 20px;
                color: #fff;
                background: #c8483f;
                display: inline-block;
                padding : 5px 10px;
                text-align: center;
                border-radius: 20px;
            }
        }
    }
    }
    .bts{
        width: 90%;
        margin: 0 auto;
        background-image: url('https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png');
        background-size: cover;
        height: 80px;
        position: absolute;
        bottom: 0;
        left: 5%;
        display: flex;
        align-items: center;
        .left{
            width: 20%;
            height: 100%;
            background-image: url('https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png');
            background-size: 120px 30px;
            background-position: 50% 50%;
            display: inline-block;
            background-repeat: no-repeat;
        }
        .center{
            font-size: 30px;
            color:#ffe678;
            position: relative;
        }
        .center::after{
            content: " ";
            height: 20px;
            top: 5px;
            width: 2px;
            background-color: #ffe678;
            position: absolute;
            left: -20px;
        }
        .right{
            margin-left: 100px;
            color:#ffe678;
        }
    }
}
</style>