<template>
    <div class="input">
        <div class="nr">
            <div class="left"></div>
            <div class="centerInput">
               <div class="centerInputLeft">
                    <span></span>
               </div>
               <div class="centerInputright" @click ='goSearch'>
                   <span class ='iconSearch'></span>
                    <span class= 'text'>{{keyword}}</span>
               </div>
            </div>
            <div class="rightlogin">
                <span class ='icon'>

                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            keyword : ''
        } 
    },
    created(){
        this.jsonp('https://wq.jd.com/bases/searchpromptwords/searchpromptwords?_=1590135809223&sceneval=2&callback=jsonpCBKA')
        window.jsonpCBKA = res=>{
            this.keyword = res.searchwords[0].showword
        }
    },
    methods:{
        goSearch(){
            location.href = '/search'
        }
    }
}
</script>

<style lang="less" scoped>
.input{
    background-color: #c82519;
    .nr{
        height: 103px;
        align-items: center;
        display: flex;
        .left{
            height: 100%;
            width: 10%;
            background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII=') no-repeat;
            background-size: 50px 50px;
            background-position: 30px 25px;
        }
        .centerInput{
            width: 80%;
            background-color: #ffffff;
            border-radius: 60px;
            height: 70px;
            display: flex;
            align-items: center;
            .centerInputLeft{
                height: 100%;
                width: 15%;
                background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=') no-repeat;
                background-size: 50px 40px;
                background-position: 40px 13px;
            }
            .centerInputright{
                font-size: 35px;
                height: 70%;
                width: 85%;
                border-left: 1px solid #ddd;
                position: relative;
                .iconSearch{
                    height:100%;
                    width: 30px;
                    display: inline-block;
                    background-image: url('https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline=');
                    background-repeat: no-repeat;
                    background-size: 450px;
                    background-position:-188px 10px;
                    margin-left: 20px;
                }
                .text{
                    display: inline-block;
                    color:#999;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 70px;
                }
            }
        }
        .rightlogin{
            color:#fff;
            text-align: center;
            width: 10%;
            font-size: 30px;
            height: 100%;
            span{
                display: inline-block;
                background-size: 50px 40px;
                background-position: 0px 30px;
                width: 50px;
                height: 100%;
                background-repeat: no-repeat;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg==');
            }
        }
    }
}
</style>