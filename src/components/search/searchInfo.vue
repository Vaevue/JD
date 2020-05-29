<template>
    <div class="seachs" ref ='seach'>
        <v-input @gengh ='gengh'></v-input>
        <!-- top分类 -->
        <div class="topList">
        <ul>
            <li>综合 <span class ='icon_BT'></span></li>
            <li>销量</li>
            <li>有货优先 <span class ='icon_BT'></span></li>
            <li>筛选 <span class ='icon_GD'></span></li>
        </ul>
        </div>
        <!-- 搜索数据列表 -->
        <div class="list">
            <ul>
                <li @click ='goinfo(item)' v-for ='item in searchList' :key ='item.wareid'>
                    <img v-lazy="'//img13.360buyimg.com/n2/s240x240_' + item.Content.imageurl">
                    <div class="right">
                        <p class="TopName">{{item.Content.warename}}</p>
                        <p class="price"><span>￥</span>{{item.dredisprice}}</p>
                        <p class="pj">{{item.commentcount}}+条评价 好评率{{item.good}}%</p>
                        <p class="name">{{item.shop_name}} ></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import vInput from '../../assets/vue/inputLC'
import EventBus from '../../assets/js/EventBus'
export default {
    components:{vInput},
    data(){
        return {
            page : 1,
            query : '',
            searchList : [],
            isloading : false
        }
    },
    created(){
        this.query = this.$route.params.name
        this.getList()
        window.addEventListener('scroll',this.scrolls)
        EventBus.$on('BoxGoSearch',res=>{
            console.log(res)
        })
    },
    methods:{
        scrolls(){
        //   判断页面向上卷曲距离 如果 大于 400 * page的时候 就让他加载下一页
           let bottomOfWindow = window.pageYOffset >= 500 * this.page
              if(bottomOfWindow && this.isloading == false){
                   this.isloading = true
                   this.pushpage()
               }
        },
        pushpage(){
            this.page++
            this.getList()
        },
        gengh(item){
            let key = item.key
            this.query = key
            this.searchList = []
            this.$router.push(`/search/${key}`)
            this.getList()
        },
        goinfo(item){
            this.$router.push({
                path : `/iteminfo/${item.shop_id}`,
                query : {data : item}
            })
        },
        getList(){
     this.jsonp(`https://so.m.jd.com/ware/search._m2wq_list?keyword=${this.query}&datatype=1&page=${this.page}&pagesize=10&ext_attr=no&brand_col=no&price_col=no&color_col=no&size_col=no&ext_attr_sort=no&merge_sku=yes&multi_suppliers=yes&area_ids=1,72,2819&filt_type=redisstore,1;&qp_disable=no&fdesc=%E5%8C%97%E4%BA%AC&t1=1590153651140&traceid=918724871032350188`,(err,res)=>{
          if(this.searchList.length == 0){
            this.searchList =  res.data.searchm.Paragraph
          }else {
              let data = res.data.searchm.Paragraph
              for(let i =0;i<data.length;i++){
                  this.searchList.push(data[i])
                  
              }
              
          }
          this.isloading = false
        })
        },
    },
        destoryed(){
        window.removeEventListener('scroll',this.scrolls)
    }
}
</script>

<style lang="less" scoped>
.shuju{
    padding : 0 20px;
    font-size: 34px;
    width: 100%;
    box-sizing: border-box;
    .right{
        float:right
    }
    .left{
        float:left;
    }
    height: 70px;
    align-items: center;
}
.icon_GD{
    position:absolute;
    top: 30px;
    margin-left: 10px;
    height: 40px;
    width: 40px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTMzMzM7OzszMzNDQ0MfHx8zMzDEar9oAAAAGdFJOUwDTFcQWF87ZqzkAAABeSURBVBjTYzBLQ4BkBlSeYmIAAwSwigkxMImJQnmBiQoMcEmQFANQUgQhBZJ0AJIsYCmYpCNECiIJkwJJGjAww6QYGNQSGNiSYBwGtgQQoi6P2QCZB5GmMQ9oJRAAANAtGtSzNppcAAAAAElFTkSuQmCC');
    background-repeat: no-repeat;
    background-size: cover;
}
.icon_BT{
    position: absolute;
    top: 45px;
    margin-left: 20px;
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: 20px 10px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKBAMAAABPkMOvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTMzMzMzMzMzMzMzMzM3NzdLS0svLy6qqqszMzMzMzMzMzGC86tIAAAALdFJOUwDl9UGdJhG9A2jOR0lNjwAAAEdJREFUCNdj8N4NBlsYVkMYuxgCIQxRBmZtEL3JgIFhNoixk4GBgQXEcAAyOKp3797eAGQwJO7eLQaiGVi1NwWAGQyGwkACAKGfIfA79uAMAAAAAElFTkSuQmCC');
}
.seachs{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .list{
        background-color: #fff;
        ul{
            li{
                display:flex;
                justify-content: space-between;
                padding : 0 20px;
                margin : 30px 0;
                img{
                    min-width: 260px;
                    min-height: 260px;
                    max-width: 260px;
                    max-height: 260px;
                }
                .right{
                    margin-left: 30px;
                .TopName{
                    font-size: 34px;
                    display:-webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient:vertical;
                }
                .price{
                    margin: 20px 0;
                    font-size: 34px;
                    color:red;
                    span{
                        font-size: 20px;
                    }
                }
                .pj{
                    margin : 20px 0;
                    color: #999;
                    font-size: 25px;
                }
                .name{
                    color:#999;
                    margin : 30px 0;
                }
            }
            }
        }
    }
    .topList{
        ul{
            display: flex;
            height: 100px;
            align-items: center;
            li{
                width: 25%;
                text-align: center;
                position: relative;
                height: 100%;
                line-height: 100px;
            }
        }
    }
}
</style>