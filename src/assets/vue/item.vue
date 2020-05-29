<template>
    <div class="item" @click ='goinfo(item)'>
        <img v-lazy="'http://img14.360buyimg.com/mobilecms/s519x519_' +item.Content.imageurl">
        <p class="name">{{item.Content.warename}}</p>
        <div class="price">
            <span class="left"> <i>￥</i>{{item.dredisprice}} </span>
            <span class="right">看相似</span>
        </div>
        </div>
</template>

<script>
export default {
    props:['item'],
    methods:{
        goinfo(item){
            this.$router.push({
                path : `/iteminfo/${item.shop_id}`,
                query : {data : item}
            })
        },
    }
}
</script>

<style lang="less" scoped>
.item{
    width: 100%;
    height: 600px;
    img{
        width: 100%;
        height: 70%;
    }
    .name{
        font-size: 30px;
        line-height: 40px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .price{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        height: 50px;
        align-items: center;
        .left{
            color:red;
            font-size: 35px;
            i{
                font-size: 20px;
                margin-right: 10px;
            }
        }
        .right{
            display: inline-block;
            width: 130px;
            height: 50px;
            border: 1px solid #bfbfbf;
            line-height: 50px;
            color:#bfbfbf;
            text-align: center;
        }
    }
}
</style>