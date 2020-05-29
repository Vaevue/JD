<template>
    <div class="navList">
       <mt-swipe :auto="0" >
  <mt-swipe-item v-for ='(item,index) in newarr' :key ='index'>
      <ul>
          <li v-for ='list in item' :key ='list.name'>
              <img :src="list.imgUrl">
              <p>{{list.name}}</p>
          </li>
      </ul>
  </mt-swipe-item>
</mt-swipe>
    </div>
</template>

<script>
import Vue from 'vue'
import {Swipe,SwipeItem} from 'mint-ui' 
import 'mint-ui/lib/swipe/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    data(){
        return {
            newarr : [],
            navlist:[
                        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png.webp",
            "name" : "京东超市"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/95626/6/16650/5992/5e7d5fdeE251a8742/d29fcc84ee0211f7.png.webp",
            "name" : "数码电器"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png.webp",
            "name" : "京东服饰"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/85541/12/16732/5068/5e7d60f9E0ff389b4/de3b049134031e56.png.webp",
            "name" : "京东生鲜"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/96727/8/16477/5183/5e7d6249E4730c38a/0f70da903eded263.png.webp",
            "name" : "京东到家"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/96542/9/16707/3569/5e7d62bcE5c4ee6a7/3bf6ac36ac9f17d9.png.webp",
            "name" : "充值缴费"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png.webp",
            "name" : "9.9元拼"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/110232/17/10270/4813/5e7d6310E79c9cb8d/6786eed1b786c010.png.webp",
            "name" : "领卷"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/93550/20/16644/5366/5e7d6544Ee1f6b27b/d8544fbb9e7a3897.png.webp",
            "name" : "省钱"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/97837/22/16281/7606/5e7d6411E0c0a91d6/93e0b359bfdf0239.png.webp",
            "name" : "PLUS会员"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/127726/14/1342/5188/5ebb88feEd234750d/945abaa631eb7059.png.webp",
            "name" : "京东国际"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/108499/22/10229/4960/5e7cc7e3Ef0042744/e18bb8a5ee24049d.png.webp",
            "name" : "京东拍卖"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/108831/16/10402/4901/5e7cc891Ec4a1e209/7ec6358526c83cda.png.webp",
            "name" : "唯品会"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/87813/33/16566/5552/5e7cc8deEddd6bcb5/9afe008178b12b2b.png.webp",
            "name" : "玩3C"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/104372/23/16606/5314/5e7cc980E1b828146/d789952095cd80b9.png.webp",
            "name" : "沃尔玛"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/103791/30/16676/5170/5e7cca68E0ab1f829/2fa77dd75f56ce9f.png.webp",
            "name" : "美妆馆"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/87481/10/16552/5320/5e7ccbc7Eb8454450/c8f70349dc66e093.png.webp",
            "name" : "京东旅行"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/88799/13/16665/5240/5e7d6448E42016d3c/77b343418a8a890d.png.webp",
            "name" : "拍拍二手"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/107817/13/10442/6306/5e7cccc8E7f9d6c59/9e06aa68ba7ba0f0.png.webp",
            "name" : "物流查询"
        },
        {
            "imgUrl" : "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/98535/20/16481/5760/5e7d646aE9b72c32e/8e063cfb6bad4654.png.webp",
            "name" : "全部"
        }
            ]
        } 
    },
    created(){
        let arr = this.navlist
        let newarr = [[],[]]
        for(let i =0;i<arr.length;i++){
            if(i<=9){
                newarr[0].push(arr[i])
            }else {
                newarr[1].push(arr[i])
            }
        }
        this.newarr = newarr
    },
}
</script>

<style lang="less" scoped>
.navList{
    height: 470px;
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 20%;
            text-align: center;
            margin : 20px 0;
            font-size: 35px;
            img{
                width: 120px;
                height: 120px;
                padding-bottom: 10px;
            }
        }
    }
}
</style>