<template>
    <div class="searchTop">
        <div class="content">
            <div class="left">
                <span class ='icon back'></span>
            </div>
            <div class="center">
                <input type="text" :placeholder="placeholder">
                <span class ='icon search'></span>
            </div>
            <div class="right">
                <span class ='icon sgd'></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            placeholder : ''
        } 
    },
    created(){
        this.jsonp('https://wq.jd.com/bases/searchpromptwords/searchpromptwords?_=1590135809223&sceneval=2&callback=jsonpCBKA')
        window.jsonpCBKA = res =>{
           this.placeholder =  res.searchwords[0].showword
        }
    }
}
</script>

<style lang="less" scoped>
.searchTop{
    height: 100px;
    line-height: 100px;
    background-color: #fff;
    .content{
        display: flex;
        height: 100px;
        align-items: center;
        .icon{
            display: inline-block;
            height: 50px;
            width: 50px;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .left{
            width: 10%;
            height: 100%;
            position: relative;
            span{
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTF1famFhal1fal1fal5ga39/f15hbF5ga2JidV1fasLnCw4AAAAKdFJOUwDxN13aWgVemg1awhgkAAAATUlEQVQoz2NgGAjA5FiAKai4SgxToRQWQcVVqwKwKFyMTaHBUFTI4IVFIeeqVQ0MRKnEGkAg25cyEGc9VocOCqUBxKUQrGkJe6qjEgAAfcYsJDT7oy4AAAAASUVORK5CYII=');
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
           }
        }
        .center{
            width: 80%;
            height: 100%;
            position: relative;
            input{
                width: 90%;
                margin : 0 5%;
                background: #f7f7f7;
                height: 50px;
                border-radius: 20px;
                padding-left: 50px;
            }
            span{
                background-image: url('https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline=');
                position: absolute;
                top: 30px;
                left: 20px;
                background-position: -200px 0;
                background-size: 500px 500px;
           }
        }
        .right {
            width: 10%;
            height: 100%;
            position: relative;
            span{
               background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMBAMAAAAzCuYOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUdwTF1fal1fa11famZmcF1fanZMvqUAAAAFdFJOUwDD82UZbfC98gAAAEtJREFUGNNjYGAWUjRgQACsXBbR0NBAB7ggdi5jKBAIwEWxc01BVDBcFDtXFEQFwkWxc1VBVBBcFDuXKEVEWUeUw4kKAqICk5hoAQAuJDMBhQy+8AAAAABJRU5ErkJggg==');
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);   
                background-size: 50px 10px;
                background-position: 50% 50%;
            }
        }
    }
}
</style>