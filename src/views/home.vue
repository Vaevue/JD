<template>
    <div class="home">
        <!-- 轮播图 -->
        <v-swiper></v-swiper>
        <!-- 分类图标LIST -->
        <v-navlist></v-navlist>
        <div class="container">
            <!-- 京东秒杀 -->
            <v-ms></v-ms>
            <!-- 秒杀下小轮播图 -->
            <v-sms></v-sms>
            <!-- 走心推荐 -->
            <img class ='tjimg' src="http://m.360buyimg.com/mobilecms/s750x80_jfs/t1/118970/4/8049/17143/5ec89eb9E80e7acdf/b0b2232b947db59a.png!q70.jpg.dpg">
            <v-tj :list='zxtj' :id =1></v-tj>
            <img src="http://m.360buyimg.com/mobilecms/s750x80_jfs/t1/112721/40/8040/17850/5ec89e23E4ddf63cb/4a1488c990869a56.png!q70.jpg.dpg" class="tjimg">
            <v-tj :list='zxtj2' :id =2></v-tj>
            <!-- 为你推荐 -->
            <img src="http://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" class="tjimg">
            <div class="wntj">
                <ul>
                    <li v-for ='(item,index) in itemlist' :key ='index'>
                        <v-item :item='item'></v-item>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 回到顶部 -->

    </div>
</template>

<script>
import vSwiper from '../components/home/banner'
import vNavlist from '../components/home/navList'
import vMs from '../components/home/jdms'
import vSms from '../components/home/smallswiper'
import vTj from '../components/home/tj'
import vItem from '../assets/vue/item'
export default {
    components:{vSwiper,vNavlist,vMs,vSms,vTj,vItem},
    created(){
        this.getitemlist()
          window.addEventListener('scroll',this.scrolls)
    },
    destoryed(){
        window.removeEventListener('scroll',this.scrolls)
    },
    methods:{
        scrolls(){
              let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
              if(bottomOfWindow && this.isloading == false){
                   this.isloading = true
                       this.pushpage()
               }
        },
        pushpage(){
            this.page++
            this.getitemlist()
        },
        getitemlist(){
            // 
                 this.jsonp(`https://so.m.jd.com/ware/search._m2wq_list?keyword=衣服&datatype=1&callback=jdSearchResultBkCbC&page=${this.page}&pagesize=10&ext_attr=no&brand_col=no&price_col=no&color_col=no&size_col=no&ext_attr_sort=no&merge_sku=yes&multi_suppliers=yes&area_ids=1,72,2819&filt_type=redisstore,1;&qp_disable=no&fdesc=%E5%8C%97%E4%BA%AC&t1=1590153651140&traceid=918724871032350188`)
        window.jdSearchResultBkCbC = res =>{
            if(this.itemlist.length == 0){
                this.itemlist = res.data.searchm.Paragraph
            }else {
                let k = res.data.searchm.Paragraph
                for(let i =0;i<k.length;i++){
                    this.itemlist.push(k[i])
                }
                this.isloading = false
            } 
        }
        }
    },
    data(){
        return {
            page : 1,
            isloading:false,
            itemlist : [],
            zxtj : [
                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/118105/17/7671/6607/5ec51adcEecc38818/efb859522f035697.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/125071/25/467/425759/5eb55cb1E3e14d28d/cb5c7f3c52852623.jpg!q70.jpg.dpg",
                    text : "平板电脑榜",
                    name : "热销爆款"
                },
                 {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/124242/25/2438/7630/5ec51ae7E1cce88d8/41cf839246b15bec.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/61268/7/4620/82739/5d2d783aE4c6ae7ea/c3e5b7061e92a0a9.png!q70.jpg.dpg",
                    text : "乳品冷饮榜",
                    name : "爆款好货"
                },
                 {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/123332/2/2402/8206/5ec51af3Ef3296b89/bd32688978dafd9f.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/mobilecms/s240x240_jfs/t1/43726/14/1883/196740/5cc7f852Ed28e016c/cc69a7bcc8080523.jpg!q70.jpg.dpg",
                    text : "时尚凉鞋",
                    name : "靓丽凉鞋"
                },
                 {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/117252/35/7716/8406/5ec53952E525e402b/162ea60601063465.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/105871/15/14510/90490/5e6706a9E052ce2da/ed510da8d3d62b31.jpg!q70.jpg.dpg",
                    text : "男装精选",
                    name : "爆品低至三折"
                }
            ],
            zxtj2 : [
                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/90350/24/1235/239145/5dbbee5aEd5bc9510/570b7e75f01f73ac.jpg!q70.jpg.dpg",
                    text : "大牌手机",
                    name : "爆款手机"
                },

                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/123506/25/2013/3966/5ec2448dEc8cfbdc2/0681dc34c3cba6ac.jpg!q70.jpg.dpg",
                    text : "24期免息",
                    name : "品质家电"
                },

                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/116692/26/7556/11946/5ec5d4d4E0906017d/652ee36c73af00d7.jpg!q70.jpg.dpg",
                    text : "价保30天",
                    name : "电脑数码"
                },

                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/103897/18/1496/321053/5dbfe8b6E4d1f1577/7b3393c858099f31.jpg!q70.jpg.dpg",
                    text : "每满300减30",
                    name : "品质家具"
                },

                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/39301/15/11375/234226/5d2a71e5E639e9868/6a68e72271adab2a.png!q70.jpg.dpg",
                    text : "牛排8.9元",
                    name : "特产送到家"
                },

                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/11870/15/11160/136183/5c85df8fE11d7c341/b3fce7557b2b2970.jpg!q70.jpg.dpg",
                    text : "9.9元包邮",
                    name : "产地打卡"
                },

                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/108760/37/12592/399988/5e96c168Eaf2090f1/5437a9a5fe09beea.png!q70.jpg.dpg",
                    text : "低至五折秒",
                    name : "手机钜惠"
                },

                {
                    bgUrl : "http://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg",
                    imgUrl : "http://m.360buyimg.com/n1/s240x240_jfs/t1/126373/6/2664/443426/5ec77defE5de301dc/0d375ac06dc770b6.jpg!q70.jpg.dpg",
                    text : "好物低至9.9",
                    name : "爆款鲜花"
                }
            ]
        } 
    }
}
</script>

<style lang="less" scoped>

.tjimg{
    width:100%;
}
.wntj{
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 48%;
            margin-right: 1%;
            margin-top: 1%;
        }
    }
}
</style>