<template>
    <div class="indexContainer">
        <index-top></index-top>
        <router-view></router-view>
         <div @click='goTop' class="hddb" ref='btn'>

        </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
import IndexTop from '../assets/vue/IndexTop'
import IndexFooter from '../assets/vue/footer'
import axios from 'axios'
export default {
    components:{IndexTop,IndexFooter},
    created(){
        window.addEventListener('scroll',this.hddb)
        localStorage.setItem('isLogin',false)
    },
    methods:{
        hddb(){
            if(this.$refs.btn) {
            if(window.pageYOffset >700){
                this.$refs.btn.style.opacity = '1'
            }else {
                this.$refs.btn.style.opacity = '0'
            }
            }
        },
        goTop(){
           window.scrollTo(0,0)
        }
    }
}
</script>

<style lang ='less'>
.indexContainer{
    font-size: 14px;
    .hddb{
    height: 100px;
    width: 100px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTJqamp2dnZ+fn5mZmZmZmZeXl5/tETgAAAAGdFJOUwDcExe+GWdL87sAAAB2SURBVCjPY2CgCXBLQwEpuAWhIFAU0xBWscQADMHAtDRRTIViiRhKDRPVksSEUcWYxYTYEhQTDdAUKrAlMKEqBSpkYEtgQFUKVAgSRFEKUggSRFHKCFQIFmQSE4ALsjgxQAQZQhxQXQUWRAejgtQVZHFgoCUAAAWAIRAquusbAAAAAElFTkSuQmCC');
    background-size: 70px 70px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: fixed;
    bottom: 100px;
    right: 30px;
    background-color: hsla(0,0%,100%,.9);
    border-radius: 50%;
    z-index: 9999;
    opacity: 0;
    transition: all .5s ease;
}
}
</style>