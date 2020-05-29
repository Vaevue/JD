<template>
    <div class="banner">
        <div class="banner-bg">

        </div>
        <div class="container">
           <mt-swipe :auto="4000">
             <mt-swipe-item v-for ='(item,index) in swipeList' :key ='index'>
                 <img :src="item.url" >
             </mt-swipe-item>
            </mt-swipe>
        </div>
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
            swipeList : [

                {
                    url : '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/132305/9/51/76932/5ec7ca9bE156ce9ca/dcc0fcea817c8434.jpg!q70.jpg.dpg'
                },
                {
                    url : '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/133646/6/8/72343/5ec77b06Eddabfff2/f290ce4301cab8c3.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                },
                {
                    url : '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/121975/27/2045/145324/5ec231f3E3f328694/5bbfccfdc542fd73.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                },
                {
                    url : '//imgcps.jd.com/ling4/100012820028/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5e7d9726dc9f2b4301a42c88/87087711/cr_1125x445_0_171/s1125x690/q70.jpg  '
                },
                {
                    url : '//imgcps.jd.com/ling4/100012820028/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5e7d9726dc9f2b4301a42c88/87087711/cr_1125x445_0_171/s1125x690/q70.jpg'
                },
                {
                    url : '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg'
                },
                {
                    url : '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/39975/6/2210/103146/5cbfdd4fEd359fb15/90c41bac5ab851de.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                },
                {
                    url : '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/39975/6/2210/103146/5cbfdd4fEd359fb15/90c41bac5ab851de.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                },
            ]
        } 
    }
}
</script>

<style lang="less" scoped>
.banner{
    .banner-bg{
        height: 300px;
        width: 100%;
        background-color:red;
        border-bottom-left-radius: 100%;
         border-bottom-right-radius: 100%;
        background-image: linear-gradient(0deg,#f1503b,#c82519 50%);
        position: absolute;
    }
    .container{
        height: 370px;
        padding-top: 30px;
        width: 95%;
        margin: 0 auto;
        .mint-swipe{
             border-radius: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>