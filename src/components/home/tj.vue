<template>
    <div class="tj">
        <ul>
            <li v-for="item in list" :key ='item.name'>
                <img :src="item.bgUrl" class="bg">
                <img class ='tp' :src="item.imgUrl">
                <p :class ='id==1?"ziti" : "abs"'>{{item.text}}</p>
                <span :class ='id==2 ? "big" : ""'>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['list','id']
}
</script>

<style lang="less" scoped>
.big{
    margin-bottom: 10px;
    font-size: 35px;
}
.tj{
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 23%;
            margin :  1%;
            height: 300px;
            position: relative;
            .bg{
                position: absolute;
                width: 100%;
                height: 100%;
            }
            .ziti{
                position: absolute;
                bottom: 50px;
                font-size: 30px;
                color:#fff;
                width: 100%;
                text-align: center;
            }
            .abs{
                position: absolute;
                top: 60%;
                width: 90%;
                left: 5%;
                background-color:#FF3EAD;
                height: 50px;
                line-height: 50px;
                text-align: center;
                border-radius: 20px;
                color:#fff;
            }
            .tp{
                position: absolute;
                width: 90%;
                left: 50%;
                transform: translateX(-50%);
                height: 180px;
                top: 20px;
            }
            span{
                position: absolute;
                bottom: 10px;
                color:#fff;
                width: 100%;
                text-align: center;
            }
        }
    }
}
</style>