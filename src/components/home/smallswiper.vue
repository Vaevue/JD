<template>
    <div class="smallswiper">
      <mt-swipe :show-indicators="false">
         <mt-swipe-item v-for ='item in list' :key ='item.url'>
         <ul>
           <li v-for ='list in item' :key ='list.url'>
              <img :class ='[list.id == 1 ? "inde" : ""]'  :src="list.url">
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
            list:[
               [
                {
                   id:0,
                   url : '//m.360buyimg.com/mobilecms/s244x187_jfs/t1/127241/37/2628/101462/5ec7b7e7E52e27a74/7b984025eff79197.png!q70.jpg.dpg' 
                },
                {
                   id:1,
                   url : '//m.360buyimg.com/mobilecms/s244x187_jfs/t1/113755/19/7498/74328/5ec2a34eE135aef24/699111061a8e8b6e.png!q70.jpg.dpg' 
                },
                {
                   id:0,
                   url : '//m.360buyimg.com/mobilecms/s244x187_jfs/t1/123183/5/2569/71944/5ec67630E6c28e308/efaad0a689b5c495.png!q70.jpg.dpg' 
                }
               ],
               [
                {
                   id:0,
                   url : '//m.360buyimg.com/mobilecms/s244x187_jfs/t1/112339/40/7516/92811/5ec36d4cE20207f51/25b00f0765ea8609.png!q70.jpg.dpg' 
                },
                {
                   id:1,
                   url : '//m.360buyimg.com/mobilecms/s244x187_jfs/t1/116889/13/7560/87569/5ec41577E1e4c4c6d/948336983da7b1a5.png!q70.jpg.dpg' 
                },
                {
                   id:0,
                   url : '//m.360buyimg.com/mobilecms/s244x187_jfs/t1/107444/18/18813/83202/5ec49d27Eaa4f1b73/0fd985cbf4ccdb48.png!q70.jpg.dpg' 
                }
               ]
            ]
        } 
    },
}
</script>

<style lang="less" scoped>
.smallswiper{
   margin-top: 20px;
   height: 300px;
   ul{
      display: flex;
      li{
         width: 30%;
         height: 230px;
         margin : 0 auto;
         img{
            width: 100%;
            height: 100%;
         }
         .inde{
            transform: scale(1.1);
         }
      }
   }
}
</style>