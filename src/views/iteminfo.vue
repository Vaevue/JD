<template>
    <div class="iteminfo"> 
        <div class="top">
            <div class="topbtn">
                <div class="left" @click ='back'>
                    <span class ='icon'></span>
                </div>
                <div class="right">
                    <span class ='icon'></span>
                </div>
            </div>
            <mt-swipe :auto="4000" v-if ='shuju.item'>
             <mt-swipe-item v-for ='(item,index) in shuju.item.image || []' :key ='index'>
                 <img :src=" '//m.360buyimg.com/mobilecms/s843x843_' +item">
             </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="container">
              <div class="ztr">
            <div class="price">
                <i>￥</i>
                {{info.dredisprice}}
            </div>
            <div class="list">
                <div class="listLeft">
                    <span class ='listIcon'></span>
                    <p class="text">降价提醒</p>
                </div>
                <div class="listRight">
                    <span class="listIcon"></span>
                    <p class="text">收藏</p>
                </div>
            </div>
        </div>
        <p class="itemName pd" v-if ='shuju'>{{shuju.skuName}}</p>
        <p class="js pd" v-if ='shuju.AdvertCount' v-html ='shuju.AdvertCount.ad'></p>
        <div class="bt pd">
            <i></i>
            <p>送运费险·闪电退款·服饰材质保障</p>
        </div>
        </div>
         <div class="xuanz content pd">
            <div class="xztop" @click ='xz'>
                <h3>已选</h3>
                <span v-if ='names'>{{colorName}},{{sizeName}}</span>
                <i class ='sgd'></i>
            </div>
            <div class="xzcenter">
                <h3>送至</h3>
                <div class="center">
                    <p class='dizhi'>北京朝阳区三环到四环之间</p>
                    <p class="fh">
                        <span class ='red' >现货</span>
                        由商家从 <span v-if ='shuju.stock'>{{shuju.stock.D.df || '中国'}}</span> 发货
                    </p>
                    <i class ='sgd'></i>
                </div>
            </div>
            <div class="xzbottom">
                <h3>运费</h3>
                <span>免运费</span>
            </div>
            <div class="dbwz">
                <p>
                    <span class ='bj onebg'></span>
                    商家发货&售后
                </p>
                <p>
                    <span class="bj twobg"></span>
                    7天无理由退货
                </p>
                <i class ='sgd'></i>
            </div>
        </div>
        <!-- 评价 -->
        <div class="pj content">
           <div class="pjtop">
               <v-ziti :title='title' :pageSize ='10' :rightTitle ='rightTitle'></v-ziti>
           </div>
           <!-- 舒服评价 -->
           <div class="list">
               <ul>
                   <li>
                       柔软舒服
                   </li>

                   <li>
                       柔软舒服
                   </li>

                   <li>
                       柔软舒服
                   </li>

                   <li>
                       柔软舒服
                   </li>

                   <li>
                       柔软舒服
                   </li>

                   <li>
                       柔软舒服
                   </li>
               </ul>
           </div>
           <!-- 用户评论 -->
           <div class="pl">
            <ul>
               <li>
                   <div class="plTop">
                       <div class="left">
                           <img src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png">
                            <span>苏******下</span>
                       </div>
                       <div class="right">
                           2020-05-11
                       </div>
                   </div>
                   <div class="context">
                       <p>睡衣收到啦，特别美美滴，颜色简直不要太好看，上面的图案也可爱，衣服款式不错，手感摸着也顺滑，试穿了下，很轻凉</p>
                   </div>
                   <div class="imgList">
                       <img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/113734/10/6328/80901/5eb95d8eE2d1e64f7/5cb3e7f4b59278b3.jpg!cc_100x100!q70.dpg.webp">
                       <img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/113734/10/6328/80901/5eb95d8eE2d1e64f7/5cb3e7f4b59278b3.jpg!cc_100x100!q70.dpg.webp">
                       <img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/113734/10/6328/80901/5eb95d8eE2d1e64f7/5cb3e7f4b59278b3.jpg!cc_100x100!q70.dpg.webp">
                       <img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/113734/10/6328/80901/5eb95d8eE2d1e64f7/5cb3e7f4b59278b3.jpg!cc_100x100!q70.dpg.webp">
                   </div>
               </li>

                              <li>
                   <div class="plTop">
                       <div class="left">
                           <img src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png">
                            <span>苏******下</span>
                       </div>
                       <div class="right">
                           2020-05-11
                       </div>
                   </div>
                   <div class="context">
                       <p>睡衣收到啦，特别美美滴，颜色简直不要太好看，上面的图案也可爱，衣服款式不错，手感摸着也顺滑，试穿了下，很轻凉</p>
                   </div>
               </li>
           </ul>
           <div class ='text'>
                <p>查看更多评价</p>               
           </div>
           <div class="wd">
               <v-ziti title ='问答' rightTitle ='暂无提问信息,去提问'></v-ziti>
               <ul>
                   <li>
                      <div class="left">
                           <span>问</span>
                            你好我身高1.68体重53公斤应该穿多少码的 
                      </div>
                      <div class="right">
                          共2个回答
                      </div>
                   </li>
               </ul>
           </div>
           </div>
        </div>  
        <!-- 商品详情 -->
         <div class="iteminfo content">
                <div class="infotop shuxian">
                    商品介绍
                </div>
                <div class="ImgContent" ref ='bg' >
                    <div class="im" v-html ='imgInfo'>

                    </div>
                </div>
            </div>

            <div class="footerNav"  ref ='xzf'>
                <ul>
                    <li class ='xiao'>
                        <span class="top"></span>
                        <p>客服</p>
                    </li>
                    <li class ='xiao'>
                        <span class ='bts'></span>
                        <p>店铺</p>
                    </li>
                    <li class ='xiao'>
                        <span class ='cart'></span>
                        <p>购物车</p>
                    </li>
                    <li class="pushcart car"  @click ='xz'>
                        加入购物车
                    </li>
                    <li class ='puy car'>
                        立即购买 
                    </li>
                </ul>
            </div>
            <div class="xz" @click.prevent ='gb' ref ='xz'>
                <div class="xznr" ref='xznr'>
                    <div class="topxz">
                        <img :src="shuju.image">
                        <div class="topT">
                            <p class="price" v-if ='shuju.price'>
                                <span>￥</span>
                                {{shuju.price.p}}
                            </p>
                            <p>
                               <span class ='text'> 已选 </span>
                               <span>
                                    {{colorName}} ， {{sizeName}} ， {{page}}个
                                </span> 
                            </p>
                        </div>
                    </div>
                    <!-- 颜色 -->
                    <div class="cent">
                        <div class="yanse">
                        <h3>颜色</h3>
                        <ul data-id ='1'>
                            <li v-for ='(item,index) in colorList[1]' :class ='[index == 0 ? "xzactive" :""]'  @click.stop ='select' :key ='index'>{{item}}</li>
                        </ul>
                    </div>
                    <!-- 尺码 -->
                      <div class="yanse" v-show ='colorList[2] != []'>
                        <h3>尺码</h3>
                        <ul data-id='2'>
                            <li v-for ='(item,index) in colorList[2]' :class ='[index == 0 ? "xzactive" :""]' :key ='index' @click.stop ='select'>{{item}}</li>
                        </ul>
                    </div>
                    <!-- 选择 -->
                    <div class="cls">
                        <span class="pop" ref ='jian' @click ='page >=1 ? page-- : page'>-</span>
                        <input type="text" v-model='page'>
                        <span class="push" @click.stop ='page++'>+</span>
                    </div>
                    </div>
                     <div class="xzfooter">
                            <span @click.stop ='jr'>加入购物车</span>
                            <span>立即购买</span>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import Vue from 'vue'
import {Swipe,SwipeItem} from 'mint-ui' 
import 'mint-ui/lib/swipe/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import vZiti from '../assets/vue/ziti'
import { Toast } from 'mint-ui';
import 'mint-ui/lib/toast/style.css'
export default {
    components:{vZiti},
    data(){
        return {
            rightTitle : '好评度 100%',
            title :'评价 <small>10+</small>',
            swiperList :[],
            info : this.$route.query.data,
            names : [],
            imgInfo:[],
            shuju :{},
            colorList : [],
            colorName : '请选择',
            sizeName : '请选择',
            page : 1
        }
    },
    mounted(){
        if(this.page == 1){
            this.$refs.jian.style.display ='none'
        }
    },
    watch:{
        page(newpage,oldpage){
            if(newpage == 1){
                this.$refs.jian.style.display ='none'
            }else {
                this.$refs.jian.style.display ='inline-block'
            }
        }
    },
    created(){
        document.title = this.info.Content.warename
        this.getfl()
        this.getYX()
        window.scrollTo(0,0)
         this.getInfo()
         this.getImgList()
    },
    methods:{
        jr(){
            let obj = {
                name : this.shuju.skuName,
                price : this.info.dredisprice,
                colorName : this.colorName,
                sizeName : this.sizeName,
                page : this.page,
                ImgUrl : this.shuju.image,
                IsSelect : true
            }
            // 购物车
            let arr = JSON.parse(localStorage.getItem('cart')) || []
            if(arr){
            if(arr.length == 0){
                arr.push(obj)
                localStorage.setItem('cart',JSON.stringify(arr))
            }else {
                for(let i =0;i<arr.length;i++){
                    if(arr[i].name === obj.name){
                    Toast({
                    message: '您已经添加了此商品，请勿反复操作',
                    position: 'top',
                    duration: 3000
                    });
                        // 进到这里 如果该商品已经存在购物车了 那么就把数量相加
                        return 
                    }
                }
            }
            arr.push(obj)
            localStorage.setItem('cart',JSON.stringify(arr))
            this.gb()
            Toast({
                message: '添加成功,快去购物车查看吧!',
                position: 'top',
                duration: 3000
            });
            }
        },  
        xz(){
                this.$refs.xz.style.opacity = 1
                this.$refs.xz.style.height = 'auto'
                this.$refs.xznr.style.height = '70%'
                this.$refs.xzf.style.zIndex = '99'
                document.body.style.overflow = 'hidden'
                document.body.style.height ='100vh'
        },  
        gb(){
                this.$refs.xz.style.opacity = 0
                this.$refs.xz.style.height = '0'
                this.$refs.xznr.style.height = '0'
                this.$refs.xzf.style.zIndex= '9999999'
                document.body.style.overflow = 'auto'
                document.body.style.height = 'auto'
        },
        select(e){
            let li = e.target.parentElement.children
            for(let i = 0;i<li.length;i++){
                li[i].classList.remove('xzactive')
            }
            e.target.classList.add('xzactive')
            let id = e.target.parentElement.getAttribute('data-id')
            if(id == 1){
                this.colorName = e.target.innerText
            }else if(id == 2){
                this.sizeName = e.target.innerText
            }
        },
        back(){
            this.$router.back()
        },
        getImgList(){
            this.jsonp(`https://wqsitem.jd.com/detail/${this.info.wareid}_d12913096977_normal.html`)
            let callbackName = `cb${this.info.wareid}`
            window[callbackName] = res=>{
                this.imgInfo = res.content
            }
        },
        getInfo(){
            // 图片
            this.jsonp(`https://wq.jd.com/mshop/BatchGetShopInfoByVenderId?callback=getVenderInfoCBA&venderIds=${this.$route.query.data.vender_id}&t=0.9964376555851175`)
            window.getVenderInfoCBA = res=>{
                this.swiperList = res.data[0].skuInfo
            }
      },
      getfl(){
          this.jsonp(`https://item.m.jd.com/item/mview2?datatype=1&cgi_source=mitem&sku=${this.$route.query.data.wareid}&t=0.577031214993081`,(err,res)=>{
            this.shuju = res
            this.colorList = res.item.salePropSeq
            this.colorName = this.colorList[1][0]
            this.sizeName = this.colorList[2][0]
          })
      },
      getYX(){
          this.jsonp(`https://yx.3.cn/service/info.action?ids=${this.info.wareid}`,(err,res)=>{
             this.names =  res[69051519108]
          })
      }
    },
    destroyed(){
        document.body.style.overflow = 'auto'
        document.body.style.height =' auto'
    }
}
</script>

<style lang="less" scoped>
.cls{
    margin-top: 100px;
    float: right;
    margin-right: 100px;
    span{
        display: inline-block;
        height: 50px;
        width: 50px;
        background: #fff;
        line-height: 50px;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
    }
    input{
        width: 100px;
        height: 50px;
    }
}
.xzactive {
    color: #f2270c !important;
    font-weight: 700;
    background: #fcedeb !important;
    border-color:#f2270c !important;
}
.xz{
    position: fixed;
    opacity: 0;
    height: 0;
    transition: all .5s ease;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.7);
    z-index:1000;
    .cent{
        overflow: auto;
        height: 100%;
        margin-top: 230px;
        padding-bottom: 30px;
    }
    .xzfooter{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        span:first-child{
                background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
        }
        span:last-child{
                background-image: linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);
        }
        span{
            display: inline-block;
            width: 46%;
            margin : 1%;
            border-radius: 30px;
            height: 80px;
            line-height: 80px;
            color:#fff;
            text-align: center;
        }
    }
    .yanse{
        margin-top: 40px;
        h3{
            font-weight: 600;
            font-size: 35px;
        }
        ul{
            display:flex;
            flex-wrap: wrap;
            li{
                padding: 20px 30px;
                margin : 20px;
                color: #262626;
                background: #f2f2f2;
                border-radius: 40px;
                border:3px solid #f2f2f2;
            }
        }
    }
    .xznr{
        transition: all .2s ease;
        max-height: 70%;
        height: 70%;
        width: 100%;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        padding : 20px;
        z-index: 1001;
        overflow: auto;
        .topxz{
            position: fixed;
            // top:20px;
            padding-bottom: 20px;
            width: 100%;
            background-color: #fff;
            display: flex;
            img{
                width: 240px;
                height: 240px;
                border-radius: 30px;
            }
            .topT{
                position: absolute;
                bottom: 0;
                left: 270px;
                p{
                    font-size: 30px;
                    color:#333;
                }
                .price{
                    font-size: 40px;
                    color:red;
                    margin-bottom: 30px;
                    span{
                        font-size: 30px;
                    }
                }
                .text{
                    color: #8c8c8c;
                }
            }
        }
    }
}
.footerNav{
    position: fixed;
    bottom: 0;
    height: 130px;
    width: 100%;
    background-color:#fff;
    z-index: 98999;
    ul{
        display: flex;
        height: 130px;
        align-items: center;
        .car{
            width: 230px;
            height: 90px;
            margin-right: 20px;
            border-radius: 40px;
            line-height: 90px;
            text-align: center;
            color:#fff;
            font-weight: 600;
        }
        .pushcart{
                background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
        }
        .puy{
                background-image: linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);
        }
        .xiao{
            padding :  0 30px;
            text-align: center;
            p{
                white-space: nowrap;
            }
            span{
                display: inline-block;
                background-repeat: no-repeat;
                width: 50px;
                height: 50px;
                background-size: cover;
            }
            .top{
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTCcnJygoKCYmJiYmJiYmJjU1NS0tLSYmJiYmJicnJyYmJiYmJiYmJikpKScnJyYmJiYmJiYmJiYmJo/aPS4AAAATdFJOUwBnLMf61QkRufFZ43iKHU9AnalhwN5+AAABwUlEQVQ4y9VV2baDIAyUPaxC+f9/vWGrWPCevpY34zhJJhM8jt8/6vTArNaWgT/Vf0hJGM/T4YzIJ1Kv83K039KbCuWYnQapaDRONLhZaV/lhSA3ntDwrw9yVaLiXPMRW16oBZvkvpNPNMNiyZNGBhVi16ND7Pms6IncbjxQ/BR5jU0rMFkUAyvhtAdQCDiOyLNewTrzeByAkvQWkJjWAKzgFqVI3XokDdU4ytBxHs7Epk3PB7XQVgUZ1ZVu+9B166l1QkYdrFbxPmLYQkxBOtTDGanbjEFoLcDNQZmz7Q1nrA9Y2KscGFQwH3lDKUZs0UGUAsJgxk5xfIplS1cstZmpOsRWM87Hl7Igc//hJel5Bnlhaqe6BGTCXLOhVfFn9aLEvuJbrKYpLe4DEqnCTSFQ3EaH0+wwOEJ6cwamjeXQNyroMcA2lre9lUlN52RGSIp5QhS/ZI+XhILJoSU7Jt0J14Weihiro91uCYme9+RCZ2vkpoSsl5UrsmE83S+4gt2aZhjZQvKehNGLe7oXxXTJmUbsn7c+umsqaBR734sNP40nqZecRRtl+c2lDp1fffUP6A3QL38ZZ0KThB//7/0BZ1AeT5gMIUIAAAAASUVORK5CYII=');
            }
            .bts{
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTCYmJiYmJigoKC0tLScnJyYmJiYmJiYmJicnJygoKCgoKCYmJgxMKE0AAAAMdFJOUwDxfRoSV+DK+r1lSKRYoZoAAAD6SURBVCjPY2CgLeAqPIMExBdARJnnnEEBJw3Awpxn0MAEsPCaE8rIRhr1nALTNYdQrdI5DqZkDqMK2xwEU2cOoArznBm2wkxCIKaiAkIYHCYeJxwYGFh6WhBhMucokIg5E8DAwHoGzISEoM4xBwaWnDMpDAxuZ8BMSEA7nkl1Djtz5liwac6ZM6kmYWdEwMKsPaCY0gARh8DMAIiLAoFMaVaZM2cOBmwECUMdyqIuWOTA4FQorgJi1pzBmmp4yBMGexlTuKcBlOSAjj5mgCwMCSuQ0xQwhDFVoyYraACiJ0JoEkRLsrAEi5HAJzBgyw7QzICWeWBZhwoAAIOGsvXzbOIqAAAAAElFTkSuQmCC');
            }
            .cart{
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTCYmJiwsLCYmJiYmJiYmJj09PSYmJikpKSYmJiYmJiYmJicnJycnJyYmJikpKSYmJk5o+D8AAAAQdFJOUwDUDrR3agX2GceE6lVDkiaLaM1VAAABOElEQVQ4y81V2RKDIAyUmwhq/v9ri3IYsAIzfWmeOuk2x+6GLsu/xGrWebBBo6fBDvGYBgPiNg0WiGp+QUR57YkvYZi0GawQ92vPTjifwBui6Fa+IqEPRNad8/CBMBcn4WGqwVqWIa6FaDtAq9J9gujQ3RWi/RicRt0j0b0IjEFFdC/2AvGR6F6wvJYeEn1KkW1MiK5lLFehSO+A4OVThf5iTFbs/72yNuQ+RkRvdKl9YP+dcisHRDPqhwHRhLhKzDfLkVq2eGriok9quFZgHCjy3pwZA4qb+mEJjpYQuWWWnsd1rI0bJFGCpdqa3bnKwdadeklrpSnzqTvjeKtR/DntUTLweErj0VoKzhnzCxjupuKRacfw9zr+sWDrMg25N+g2Ix5/DDx9B/w9Q2p7EcT1T7n18mfxAZ6oHL1x+TvFAAAAAElFTkSuQmCC');
            }
        }
    }
}
.iteminfo{
    .infotop{
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        position: relative;
        padding-bottom: 20px;
    }
}
.gasLike{
    .liketop{
        font-size: 35px;
        padding :  20px;
        position: relative;
        margin-left: 20px;
        h3{
            font-weight: 600;
            
        }
    }
    .likeList{
        ul{
            display: flex;
            li{
                width: 30%;
                margin : 0 2%;
                img{
                    width: 240px;
                    height: 240px;
                    border-radius: 20px;
                }
                p{
                    line-height: 35px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    color:#333;
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
                .price{
                    color:red;
                    font-size: 30px;
                    padding-top: 30px;
                }
            }
        }
    }
}
.wd{
    ul{
        li{
            display: flex;
            justify-content: space-between;
            padding : 0 20px;
            .left{
                span{
                    background: #ff9600;
                    color:#fff;
                    display: inline-block;
                    padding :5px;
                }
                color:#333;
            }
            .right{
                color: #999;
            }
        }
    }
}
.pj{
 .list{
     ul{
         padding : 0 20px;
         display: flex;
         flex-wrap: wrap;
         width: 90%;
         li{
             width: 27%;
             font-size: 20px;
             height: 60px;
             background-color:#fcedeb;
             margin-right: 30px;
             margin-bottom: 30px;
            border-radius: 30px;
            text-align: center;
            line-height: 60px;
         }
     }
 }
 .pl{
    .text{
        width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
            p{
                 width: 200px;
             font-size: 20px;
             height: 50px;
             line-height: 50px;
             text-align: center;
             border:2px solid #8c8c8c;
             margin : 30px auto;
             border-radius: 30px;
            }
         }
     ul{

         li{
             .imgList{
                 overflow: auto;
                 padding : 0 20px;
                 display: flex;
                 flex-wrap: nowrap;
                 img{
                     margin:0 1%;
                     width: 200px;
                     height: 200px;
                 }
             }
             .plTop{
                 display: flex;
                 justify-content: space-between;
                 font-size: 20px;
                 height: 70px;
                 align-items: center;
                 .left{
                     height: 100%;
                     padding : 0 20px;
                     img{
                         width: 70px;
                         float:left;
                     }
                     span{
                         line-height: 90px;
                     }
                 }
                 .right{
                     margin-right: 20px;
                 }
             }
             .context{
                 padding : 20px 40px;
                 font-size: 30px;
                 p{
                     line-height: 40px;
                 }
             }
         }
     }
 }
}
.content{
    margin-top: 30px;
    background-color: #fff;
    border-radius: 20px;
}
.sgd{
    position: absolute;
    right: 20px;
    width: 50px;
    height: 30px;
    top: 50%;
    margin-top: -20px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTIyMjCYmJiYmJi0tLY+PjyYmJidnOsIAAAAGdFJOUwDt6aYcSSEXj/YAAAA8SURBVCjPY2AYBTQBLEbKDhiCTmlpKggeq2AAiDJLS0tGcBkFBUActbS0JAY4F6sgVu1YLcLnpFFAFQAATwgLKVhjC9UAAAAASUVORK5CYII=');
    background-size: cover;
}
.xuanz{
    // padding : 20px;
    box-sizing: border-box;
    .dbwz{
        display:flex;
        height: 70px;
        align-items: center;
        font-size: 20px;
        background-color: #fafafa;
        color: #8c8c8c;
        position: relative;
        p:first-child{
            margin-right: 50px;
        }
        .bj{
            display: inline-block;
            width: 30px;
            height: 30px;
            background-repeat: no-repeat;
            background-size: cover;
             background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTPMoDPInDPInDP87NPosE/MnDPInDPInDPcpD/UoDvInDPMnDvInDPIoDPInDPInDPQoDfInDPInDDAotc8AAAATdFJOUwBkjOUEEbD13iE0zkCQfpN5S3Nig6CDAAAAsklEQVQY02WRiw7DIAhFobOC2tou9///ddTXnCPGhKO8LkTFdvYqop53+pq7BYCq3XIMGhJki86e46kDhxf8HNsyJFzkJhD48W74n28WfFsPImGhkJ0Y50K3E0wecaEULa2KWyg5UbJDdKTjS8m+Nlym6/TBNQkbH9RBe0njnZaS3BxGp7RZgzZOFeTNTYxK8jK8pc1dqskupDJJ0EnY4KHhfw2CNJRz+VlXXVqepV9X/AHuSwhEt5a/JQAAAABJRU5ErkJggg==');
        }
    }
    h3{
    width: 10%;
    font-size: 20px;
    font-weight: 600;
        }
        .xzbottom{
            margin : 30px 0;
            display: flex;
            span{
                color:#999;
                font-size: 30px;
            }
        }
        .xzcenter{
            position: relative;
            display: flex;
            font-size: 30px;
            height: 70px;
            padding : 40px 0;
            .dizhi{
                margin-bottom: 30px;
            }
            .fh{
                color:#999;
                 .red{
                    color:red;
                }
            }
        }
    .xztop {
        display: flex;
        height: 70px;
        align-items: center;
        position: relative;
        
        span{
            display: inline-block;
            width: 80%;
            font-size: 30px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
.bt{
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 30px;
    background-color: #FBF0FD;
    p{
        margin-left: 20px;
        color:#e93b3d;
    }
    i{
        width: 150px;
        height: 30px;
        display: inline-block;
        background-image: url('data:image/png;base64,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');
        background-repeat: no-repeat;
        background-size: 150px 30px;
    }
}
.pd {
    padding : 0 40px;
}
.iteminfo{
    .container{
        background-color: #fff;
        width: 100%;
        box-sizing: border-box;
        padding-top: 30px;
    }
    .itemName{
        margin-top: 30px;
        font-weight: 700;
        line-height: 50px;
    }
    .js{
        font-size: 20px;
        margin-top: 30px;
        color:#666666;
        margin-bottom: 30px;
    }
    .ztr{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price{
            color:red;
            font-size: 40px;
            font-weight: 600;
            i{
                font-size: 20px;
            }
        }
        .list{
            display: flex;
            font-size: 20px;
            width: 200px;
            text-align: center;
            .listIcon {
                display:inline-block;
                height: 40px;
                width: 40px;
                background-repeat: no-repeat;
                background-size: cover;
            }
            .listLeft{
                margin-right: 20px;
                .listIcon{
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUdwTCYmJiYmJicnJyYmJioqKiYmJiYmJiYmJiYmJjAwMCkpKSYmJiYmJicnJygoKCYmJiYmJjcsgYIAAAARdFJOUwDz2UbBFun6moYGJm2yUzF733ih6QAAATZJREFUOMu1VEmChCAMlH1X+f9nJ0F2Y98ml7ZDUZUUgeP4l/DCJc4Y48kJT0OCZXkEs+ENUTbvYdWGOTWmuT0v5dV1Wo5/9blgIuakmDJCYipOmRu3iY1cIPk9tJBGvctEsqYYDGColj2gTG0SPrkiXVFQv2xiDR61K79OxyFyViJbd+rnEyzTNWMfqgBETcyhhbiQXRMEqlAsSr0IXOd5UB9HKmalxbLncOxiM3DAxqupmX5upuldQF2KbSUtU9CKKk3Aiv/B5OG7gBYnAbH4WUinmijQUxN018+/63W12t2lUz9c9qp7c4hmqo7vsdZk2xisYbDlYxo1QYAcc8Q8bQvbZLJASqwzHr8MJG8LMOX9Ijz3bsLgBN8DNW7w0tidiTD7WyBfEE28Krccs6S5/HyfvuMPfMwYr7KlhxoAAAAASUVORK5CYII=');
                }
            }
            .listRight{
                .listIcon {
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTCcnJyYmJi0tLSYmJioqKicnJyYmJiYmJiYmJicnJyYmJiYmJjExMSYmJiYmJiYmJr0nDV0AAAAQdFJOUwBKxxayHjL364ZcmeEOb9BoMeN9AAABCklEQVQ4y8VU2bbDIAjELYLb9f+/tmAbE3ssvW/lISeYcZhBDMAv4iCLES0d23SE8/0MHwDCLXWTpvQrojHxlpYX2Vj0KbiQJsWVRiOYir3jWdwM0mLOGvKt8kvmxTDl1YyY60wDb8oM5p3ms23Dnw8gFqA1h3UR2N6TBkq9W2BpQQMFlg7s32kgx134H5NVzQ17VtxlDZTFHfepaCCUPslzX48ivSSB1LNbUGRbXA6FwsUPVHwgi7RSv4Ec7g0uIDme3t40X5NK10mvsu4DHM9J47Yvs7BjAidTS6omQf3xkj10ENRxUXJQQQAtPu+Sc8ljmx1/v+p+tUSRtn+ECSN1DptFtC3AL+MB64ISATN7sUwAAAAASUVORK5CYII=');
                }
            }
        }
    }
    .top{
        height: 1000px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .topbtn{
            display:flex;
            justify-content: space-between;
            position: absolute;
            top: 2%;
            z-index: 1004;
            width: 95%;
            left: 2%;
                        .icon{
                display: inline-block;
                width: 70%;
                height: 70%;
                background-repeat: no-repeat;
                background-size: 50px 50px;
                background-position:10px 13px;
            }
            .left{
                background-color: #666;
                height: 80px;
                width: 80px;
                border-radius: 50%;
                span{
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTP///////////////////////////////xb9HQ4AAAAIdFJOUwD6i0/UdjQCdVO0QgAAAEZJREFUKM9jYKAiKMAixiqSgCmo0eGAIcbUgUVQo6PRAItC4WGjkBWbQhYsCrELYtWO1SLsThoWSh2IS2DYkyJDQQE1kj4AQAEnj84DdFIAAAAASUVORK5CYII=');
               }
            }
            .right{
                background-color: #666;
                height: 80px;
                width: 80px;
                border-radius: 50%;
                span{
                    width: 80px;
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTP///////////////xPgMRoAAAAEdFJOUwDmiAYExX3+AAAAOUlEQVQoz2NgGAV0AEaCyiCKWVHIAMFVcXECcZhcXBQY4FwRF0cQh9HFRYABzsUqiFU7VotGAc0BAFnhCfdBrTVKAAAAAElFTkSuQmCC');
                    background-position: 15px 15px;
                    background-size: 50px 50px;
               }
            }

        }
    }
}
</style>