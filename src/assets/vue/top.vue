<template>
    <div class="top">
        <div class="left" @click ='back'>
            <span class ='icon'></span>
        </div>
        <div class="center">
            {{title}}
        </div>
        <div class="right">
            <span v-show ='flag' class ='icon'></span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back()
        }
    },
    props:{
        title : {
            type : String,
            default : '购物车'
        },
        flag : {
            type : Boolean,
            default : true
        }
    }
}
</script>

<style lang="less" scoped>
.top{
    height: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    font-size: 40px;
    padding : 0 20px;
    span{
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .left{
        span{
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMoaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0QkExMjdCMzk3MDExRTg5NThGQjhFQjBBNkFFNTZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0QkExMjdDMzk3MDExRTg5NThGQjhFQjBBNkFFNTZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyNzkzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0EzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7pUFoPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRFTGlxXV9rYWFrXWBrXl9qXmBsYmJ2XV9qnivdRAAAAAd0Uk5TAPE3XNqaDWxxWqMAAAA/SURBVCjPY2AYCMDkaIApqFgugKlQHIugYnm5ARaFxcNGIYM7FoVs5eUBDESpxG4mVtuHhVIB4tIS9lRHJQAAa4wgL/fBqXYAAAAASUVORK5CYII=');
        }
    }
    .right{
        span{
            background-position: 50% 50%;
            background-size: 50px 10px;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMBAMAAAAzCuYOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUxpcV1ga11fa11gamZmcF1fankXv8cAAAAFdFJOUwDD82UZbfC98gAAAEtJREFUGNNjYGAWUjRgQACsXBbR0NBAB7ggdi5jKBAIwEWxc01BVDBcFDtXFEQFwkWxc1VBVBBcFDuXKEVEWUeUw4kKAqICk5hoAQAuJDMBhQy+8AAAAABJRU5ErkJggg==');
        }
    }
}
</style>