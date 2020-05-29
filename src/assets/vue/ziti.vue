<template>
    <div class="ziti">
        <div class="left xian">
            <h3 v-html ='title'> </h3>
        </div>
        <div class="right">
            {{rightTitle}} <i class= 'icon'></i>
        </div>
    </div>
</template>

<script>
export default {
    props :['title','pageSize','rightTitle']
}
</script>

<style lang="less" scoped>

.ziti{
    height: 103px;
    align-items: center;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    padding : 0 20px;
    .left{
       h3{
            font-size: 34px;
        font-weight: 600;
        position: relative;
        padding-left: 20px;
        small{
            font-size: 20px;
            font-weight: 600;
        }
       }
    }
    .right{
        .icon{
            display: inline-block;
            width: 20px;
            height: 20px;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTCYmJikpKSYmJiYmJiYmJiYmJjc3NycnJyYmJigoKCcnJyYmJiYmJiYmJuN/btsAAAAOdFJOUwDyJbuPUdELdN1le6U6NnMXwAAAAE9JREFUCNdjYGBgaGxggAG5t3DmuWdwpuK7BTAm9ztxGJN93hO4irh3CjAm8zsDGJPp3VO4Cr9nWJhICpC0IQxDsgLJYiTnIDkSyelQDwEAtFUbPWYZSRUAAAAASUVORK5CYII=');
            background-size: cover;
        }
    }
}
</style>