<template>
    <div class="jdms">
        <div class="top">
            <div class="left">
                <span class='title'>京东秒杀</span>
                <div class="ms">
                    <span>全天</span>
                    <span>00:00:00</span>
                </div>
            </div>
            <div class="right">
                <span>更多秒杀</span>
                <i class ='icon'></i>
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li v-for ='(item,index) in list' :key ='index'>
                    <img v-lazy="'http://img10.360buyimg.com/mobilecms/s220x220_jfs' + item.imgbase">
                    <p class="newprice">￥{{item.chprice}}</p>
                    <p class="oldPrice">￥{{item.pcprice}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list : []
        } 
    },
    created(){
        this.getlist()
    },
    methods:{
        getlist(){
            this.jsonp('https://wqcoss.jd.com/mcoss/secondkill/show?count=10&offset=0&actid=114299&cgid=&sorttype=0&refsku=&qiangke=1&ctx=&history=1&callback=jsonp_show_114299_0')
            window.jsonp_show_114299_0 = res=>{
                this.list = res.data.list
            }
        }
    }
}
</script>

<style lang="less" scoped>
.jdms{
    height: 400px;
    background-color: #fff;
    padding : 0 10px;
    .top{
        display: flex;
        height: 70px;
        align-items: center;
        justify-content: space-between;
        font-size: 30px;
        background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTO0PD+wQEOwVFewREekNDewQEOsQEC1iODQAAAAIdFJOUwB9YxIrs0VtoD6UjwAAA/1JREFUeNrt3cGO22QUBeAprsq2qSjdUks420gOsG0VK/sBjdiWEHnNmPeXsP94aIJEQExvmWt9n/oEZ46u72877s3NVa/vPrq9gZTOa3wnDnK6U2PUGJ7YUmE3Ro3h//LtWY1/FAc5fXdW45/EQU7Pzmr8Uhzk9Pysxu/EQfrl+GdhkH+rsFOQVvVwy+12IwzS+nKu8W+iILH3pcVfCYLU9q/vbn8VAwAAAAAAAJ/I88P9m+adHMjs+1XhQSqJvVjNPsiCrKq3DzV+tZEGSf2w+tPv0iDpML7/WOM3xjE5fbE68408SOmX8xp/LQ9S7hSrC7YKMnpxWeMPEiGhZ5c1fikREnp/WWM/7CX9Cc8Zj5zeXtb4lURI6P6yxm8kQkKrv5AI+WtsGmOpAEc8+G/ccGMBPP5gATyMZgG8GsQCeFGTxZ3xnPDIyY+YWMJW4SelLIAf+LOEcexzKyyAj1+xBD5FyBL4MCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkNtGBKQvcVvpMclV7UQOZG/xrt2Yx+ReKbbddtdWkiDxMK623WhnqyD1TtEVtmOS13g/1dhyTF7jZtwd97YKstd4P/XYNGYB07gzjUld4+PUY0sFdmOwG8NVVVVdfdD8cN/YNObp2pT3fjbXa2w15mnP4nZXJu2VkrZlHO+8G8TTncXj5lvOb5srTd9Oj6K1+HFJb8yBuGG87fpJd30cT7zh9qiLnle2I9Pt+sOhrqce/21NN9U/bM/8ixZ31y95PEK73ff1pDnurp3yKn+AR+ZcVjfzOGwY16ca90cRR+a8Hze3Y2czi5kS+0M99/ho4Ia1uCoXvWa85JkVIde6aRgPw9TjfqfGYcN4Xt16syIk324cxkO9Xq/HWdFJOCrm7XzROxzNipApMcY7dbhE7IIXetE7XfKE/OlNU2Jd1ophulchkKAad2UYj7tb76XtkBqfOrye9mM1jpwW80VPyBE723ixW0//hnLBk0jctFiXo7RLXlSNh3FMTNO46Xduakad8OoyjdemccyYKPfb6hKwhENjHoYSslkROI2n7dhSERpzWd0cQCKXtnU5RUs4cqkoB2khB+V7OAU8Tgqnj9BpMZwOIEIO0J7uG5d7QY3HH3E1Lg9LB9M4qMbdfENz3Np6D6MjYy5XvLrx+CPm8HEo71ScXg3S46CYu3J/fl033r8Kybc9Lcdevoo+g/ReDQq93PXzC8ee9odOCy9qhua7nWvce/cqclqM47iZWizkoB53/Vjkpul92yo25vlHTEKOmRPtww/8BRw6juevgYgiaq0YAz52fuwYHrMWx17vfEHhM8RcvvXh/ywODli+8TnLQMAAAADwWfwBKZghRTcFaz4AAAAASUVORK5CYII=');
       background-size: contain;
      .left{
            display: flex;
            height: 70px;
            align-items: center;
            .title {
                margin-right: 20px;
            } 
            .ms{
                display: flex;
                border:3px solid red;
                height:40px;
                border-radius: 20px;
                align-items: center;
                position: relative;
                span:first-child{
                    position: absolute;
                    left: -1px;
                    padding: 0 10px;
                    height: 100%;
                    border-radius: 20px;
                    background-image: linear-gradient(90deg,#f10001,#fe4e18);
                    white-space: nowrap;
                    color:#fff;
                    font-size: 14px;
                    line-height: 40px;
                }
                span:last-child{
                    padding : 0 20px;
                    color: #f2270c;
                    font-weight: 700;
                    padding-left: 90px;
                }
            }
        }
        .right{
        color: #f23030; 
        .icon{
            display: inline-block;
            width: 30px;
            height: 30px;
            background: url('https://wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png') no-repeat;
            background-size: cover;
            margin-left: 20px;
        }
        }
    }
    .bottom{
        overflow: auto;
        ul{
            display: flex;
            li{
                margin-top: 20px;
                img{
                    width: 200px;
                    height: 200px;
                }
                p{
                    line-height: 40px;
                    text-align: center;
                }
                .newprice{
                    color:red;
                    font-size: 30px;
                    font-weight: 700;
                }
                .oldPrice{
                    text-decoration:line-through;
                    color: #999;
                }
            }
        }
    }
}
</style>