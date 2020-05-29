<template>
    <div class="footer">
        <ul>
            <router-link class ='lis' tag ='li' :to ='"/" +item.navId' v-for ='(item,index) in nav' :key ='index'>
                <img ref='img' @click ='seturl($event,item,index)' :src ='item.navIcon.def'>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nav: [{"navId":"home","navUrl":"https://m.jd.com","navIcon":{"active":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png","def":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png"}},{"navId":"category","navUrl":"https://so.m.jd.com/category/all.html","navIcon":{"active":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png","def":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"}},{"navId":"find","navUrl":"https://wqs.jd.com/portal/wx/tuan/pingouv3.shtml?sceneval=2&fromM=1","navIcon":{"active":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png","def":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png"}},{"navId":"cart","navUrl":"https://p.m.jd.com/cart/cart.action?fromnav=1","navIcon":{"active":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png","def":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png"}},{"navId":"me","navUrl":"https://home.m.jd.com/myJd/newhome.action","navIcon":{"active":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png","def":"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png"}}]
        }
    },
methods:{
    seturl(e,item,index){
        let lis = document.getElementsByClassName('lis')
        for(let i = 0;i<lis.length;i++){
            lis[i].children[0].src = this.nav[i].navIcon.def
        }
        e.target.src = item.navIcon.active
    }
},
mounted(){
// /category
if(this.$route.path == '/home'){
this.$refs.img[0].src = this.nav[0].navIcon.active
}else if(this.$route.path == '/category'){
    this.$refs.img[1].src = this.nav[1].navIcon.active
}else if(this.$route.path == '/find'){
    this.$refs.img[2].src = this.nav[2].navIcon.active
}else if(this.$route.path == '/cart'){
    this.$refs.img[3].src = this.nav[3].navIcon.active
}else if(this.$route.path == '/me'){
    this.$refs.img[4].src = this.nav[4].navIcon.active
}

},
}
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 140px;
    line-height: 140px;
    background-color: #fff;
    z-index: 99;
    box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    ul{
        display: flex;
        li{
            width: 20%;
            text-align: center;
            margin-top: 10px;
            img{
                width: 180px;
                height: 130px;
            }
        }
    }
}
</style>