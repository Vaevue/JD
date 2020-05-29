<template>
    <div class="indexTop">
        <div class="gg" v-show ='flag'>
            <div class="left">
                <span class="leftIcon" @click ='flag = false'>

                </span>
                <span class="rightIcon">

                </span>
            </div>
            <div class="center">
                <span>
                    打开京东APP , 购物更轻松
                </span>
            </div>
            <div class="right">
                <span>立即打开</span>
            </div>
        </div>
        <div class="input" ref ='input'>
            <inputs></inputs>
        </div>
    </div>
</template>

<script>
import Inputs from './input'
export default {
    data(){
        return {
            flag : true
        } 
    },
    components:{Inputs},
    mounted(){
        window.addEventListener('scroll',this.SetScrollCBK)
    },
    destoryed(){
        widnow.removeEventListener('scroll',this.SetScrollCBK)
    },
    methods:{
        SetScrollCBK(){
            let scrollTop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
            if(scrollTop > 1) {
                if(this.$refs.input) {
                    this.$refs.input.style.position ='fixed'
                this.$refs.input.style.top = '0'
                this.$refs.input.style.width = '100%'
                this.$refs.input.style.zIndex = '999'
                this.$refs.input.style.backgroundColor ='#E43130'
                } 
            }else if(scrollTop <= 43){
                 if(this.$refs.input) {
                    this.$refs.input.style.position ='static'
                    this.$refs.input.style.backgrouond = '#c82519'
                } 
            }  
        }
    }
}
</script>

<style lang="less" scoped>
.gg{
    height: 103px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #333;
    padding-left: 20px;
    box-sizing: border-box;
    color:#fff;
    span{
        display: inline-block;
        background-repeat: no-repeat;
        font-size: 30px;
    }
    .right{
        width: 30%;
        height: 100%;
        background-color:#F63515;
        text-align:center;
        line-height: 103px;
    }
    .center{
        width: 60%;
        text-align:center;
    }
    .left{
        display: flex;
        align-items: center;
        height: 103px;
    }
    .leftIcon{  
        width: 25px;
        height: 25px;
        background-image:url('https://m.360buyimg.com/mobilecms/jfs/t19480/10/1439571805/820/787bec2c/5ac9d730N04e6d766.png');
        background-size: cover;
    }
    .rightIcon{
        width: 80px;
        height: 90px;
        margin-left: 30px;
        background-image: url('https://img11.360buyimg.com/jdphoto/s80x80_jfs/t27847/91/107794072/6854/14716732/5b850ecaN644d2983.png');
        background-size: 70px 70px;
        background-position: center center;
    }
}
</style>