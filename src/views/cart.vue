<template>
    <div class="cart">
        <div class="top">
            <top></top>
        </div>
        <div class="topBnav" v-show ='cartList.length !=0 '>
            <div class="right">
                编辑商品
            </div>
        </div>
        
        <!-- 购物车List -->
      <div class="cartList">
            <ul v-show ='cartList.length !=0 '>
            <li v-for ='(item,index) in cartList' :key ='item.name'>
                <div class="left">
                    <span @click ='select($event,item,index)' :class ='[item.IsSelect ? "icon-active":"icon"]' class ='selectIcon'></span>
                    <img v-lazy="item.ImgUrl">
                </div>
                <div class="right">
                    <p class="name">{{item.name}}</p>
                    <p class="jj">
                        <span class="jjLeft">{{item.colorName}} , {{item.sizeName}}</span>
                        <span class="jjright">X {{item.page}}</span>
                    </p>
                    <p class="bt">
                        <span class ='price'>￥{{item.price}}</span>
                        <span class="remove">删除</span>
                    </p>
                </div>

            </li>
        </ul>
        <div　class ='noneList' v-show ='cartList.length == 0'>
            <img src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png">
            <p>购物车空空如也,去逛逛吧~</p>
        </div>
      </div>
      <div class="footerJs">
          <div class="left">
              <span @click ='AllSelect' class ='icon-active' ref ='icon'></span>
              <p>全选</p>
          </div>
          <div class="right">
              总计 : <span class ='price'>￥{{price}}</span>
              <span class="js" @click ='gopuy' :class='[puySize == 0 ? "opac" : ""]'>去结算<span>({{puySize}}件)</span></span>
          </div>
      </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
import IndexFooter from '../assets/vue/footer'
import Top from '../assets/vue/top'
export default {
    components:{IndexFooter,Top},
    data(){
        return {
            cartList : [],
            flag : false,
            puySize : 0,
            price : '00.00',
            puyList : []
        } 
    },
    created(){
        document.title = '购物车'
        let list = JSON.parse(localStorage.getItem('cart'))
        if(list) {
this.cartList = JSON.parse(localStorage.getItem('cart'))
        this.cartList.shift()
        }  
    },
    mounted(){
        this.AllSelect()
    },
    methods:{
        gopuy(){
            if(this.puySize == 0){
                return 
            }
            this.$router.push({
                path: '/puy',
                query : {
                    data : this.puyList
                }
            })
        },
        AllSelect(e){
            this.puyList = this.cartList
            this.price = 0
            let size = 0
            let price = 0
            this.flag = !this.flag
            // 全选 只需要把cartList中的每一项的isSelect 切换true或false  true添加样式 icon-active false 添加样式 icon
            for(let i =0;i<this.cartList.length;i++){
                this.cartList[i].IsSelect = this.flag
                price += this.cartList[i].page * this.cartList[i].price
                this.price = price
                if(!this.cartList[i].IsSelect){
                    console.log('不是全部选择了')
                }
                size+= this.cartList[i].page
            }
            this.puySize = size
            let icon = document.getElementsByClassName('selectIcon')
            if(!this.flag){
                this.puySize = 0
                this.price = 0
            }
            if(e.target){
            if(this.flag){
                for(let i = 0;i<icon.length;i++){
                    icon[i].classList.remove('icon')
                    icon[i].classList.add('icon-active')
                }
                e.target.classList.remove('icon')
                e.target.classList.add('icon-active')
            }else {
                for(let i = 0;i<icon.length;i++){
                    icon[i].classList.add('icon')
                    icon[i].classList.remove('icon-active')
                }
                e.target.classList.add('icon')
                e.target.classList.remove('icon-active')
                
            } 
            }
        },
        select(e,item,index){
            if(!e.target){
                return 
            }
            this.flag = !this.flag
            item.IsSelect = this.flag
            if(this.flag){
                e.target.classList.remove('icon')
                e.target.classList.add('icon-active')
            } else {
                e.target.classList.remove('icon-active')
                e.target.classList.add('icon')
            }
            // flag控制着选择与不选择   所以把他赋值给item的IsSelect 
            // 循环遍历 cartList 找出IsSelect为true的每一项 
            let arr = []
            let size = 0
            let price = 0
            if(this.cartList){
                for(let i = 0;i<this.cartList.length;i++){
                    if(this.cartList[i].IsSelect){
                        arr.push(this.cartList[i])
                        size += this.cartList[i].page
                    }
                   if(!this.cartList[i].IsSelect){
                this.$refs.icon.classList.remove('icon-active')
                this.$refs.icon.classList.add('icon')
                   }else {
                this.$refs.icon.classList.add('icon-active')
                this.$refs.icon.classList.remove('icon')
                   } 
                }
            }
            this.puyList = arr
            for(let i = 0;i<arr.length;i++){
                price+=arr[i].page * arr[i].price
                console.log(price)
                this.price = price
            }
            let span = document.getElementsByClassName('icon-active')
            if(span.length == 0){
                this.price = 0
            }
            this.puySize = size
        }
    }
}
</script>

<style lang="less" scoped>
.opac{
    opacity: .3;
}
.icon{
    display: inline-block;
    width: 70px;
    height: 55px;
    background:url('https://wq.360buyimg.com/wxsq_trade/cart/main/images/sprite.img_default_437_7f29d973.png') no-repeat;
    background-position: -225px -52px;
    margin-right: 20px;
    background-size: 400px 300px;
}
.icon-active{
    display: inline-block;
    width: 70px;
    height: 55px;
    background:url('https://wq.360buyimg.com/wxsq_trade/cart/main/images/sprite.img_default_437_7f29d973.png') no-repeat;
    background-position: -440px -105px;
    margin-right: 20px;
    background-size: 500px 400px;
}
.footerJs{
    position: fixed;
    width: 100%;
    bottom: 120px;
    background-color: #fff;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 0 20px;
    box-sizing: border-box;
    z-index: 9999;
.left{
    color:#999;
}
.right{
    height: 90px;
    line-height: 90px;
    span{
        padding : 0 20px;
    }
    .price{
        color:red;
    }
    .js{
        display: inline-block;
        height: 90px;
        text-align: center;
        color:#fff;
        border-radius: 40px;
        width: 200px;
        background-image: linear-gradient(135deg,#f2270c,#f2270c 70%,#f24d0c);
        box-shadow: 0 6px 12px 0 rgba(255,65,66,.2);
        span{
            font-size: 20px;
            padding : 0;
        }
    }
}
}
.topBnav{
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    .right{
        float:right;
        margin-right:30px;
        font-size: 35px;
    }
}

.cartList{
    overflow: auto;
    padding-bottom: 200px;
    .noneList{
        text-align: center;
        margin-top: 200px;
        font-size: 35px;
        img{
            margin-bottom: 40px;
            width: 200px;
            height: 200px;
        }
    }
    ul{
        li{
            display: flex;
            background-color: #fff;
            padding :  20px;
            position: relative;
            margin : 20px 0;
            .left{
                display: flex;
                height: 300px;
                align-items: center;
                img{
                    width: 300px;
                    height: 300px;
                    margin-right: 20px;
                }
            }
            .right{
                position: relative;
                .name{
                    font-size: 30px;
                    line-height: 40px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-bottom: 50px;
                }
                .jj{
                    display: flex;
                    justify-content: space-between;
                    .jjLeft{
                    font-size: 30px;
                    width: 85%;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    }
                    .jjright{
                        font-size: 20px;
                        color:#999;
                    }
                }
                .bt{
                    position: absolute;
                    bottom: 10px;
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    .remove{
                        color:#999;
                    }
                    .price{
                        color:red;
                        font-size: 35px;
                    }
                }
            }
        }
    }
}

</style>