<template>
    <div>
        <div class="back">
            <span class="title1">远方 即 故乡</span>
            <span class="title2">WELCOME HOME</span>
            <span class="title3">小主 等你好久了</span>
        </div>
        <div class="con">
            <div class="login">
                <form action="javascript:;">
                    <div class="inputNum">
                        <div class="inputImg">
                            <i class="iconfont icon-shouji"></i>
                        </div>
                        <input type="text" class="num" placeholder="小主，留个电话吧" name="phone" autocomplete="off" v-model="registerform.uphone">
                    </div>
                    <div style="width: 100%;height: 1.08rem;">
                        <div class="inputPass">
                            <div class="inputImg">
                                <img src="../../assets/imgs/circle.png" alt="">
                            </div>
                            <input type="text" class="pass" placeholder="我们的秘密" name="code" autocomplete="off" v-model="code">
                        </div>
                        <button class="sub" @click="getCode" v-show="!time">获取秘密</button>
                        <button class="sub" v-show="time">({{this.time}})s</button>
                    </div>
                    <div class="inputrepass">
                        <div class="inputImg">
                            <i class="iconfont icon-suo"></i>
                        </div>
                        <input type="password" class="repass" placeholder="我们来交换秘密" name="upass" v-model="registerform.upass">
                    </div>
                    <div class="radio">
                        <label>
                            <van-checkbox v-model="checked" icon-size="0.3rem">已同意并阅读<a href="">《软件许可及服务协议》</a></van-checkbox>
                        </label>
                    </div>
                    <button class="logbtn" @click="handleSubmit">立即注册</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    import {register} from "../../http/api";
    import {Toast} from "vant";

    export default {
        name: "Reg",
        data(){
            return{
                registerform:{
                    upass:'',
                    uphone:'',
                },
                code:'',
                checked:true,
                time:0
            }
        },
        methods:{
            handleSubmit(){
                register(this.registerform).then(res=>{
                    Toast({
                        "message":res.msg
                    })
                    this.$router.push('login');
                }).catch(error=>{
                    console.log(error);
                })
            },
            getCode(){
                if(!this.time){
                    this.time = 60;
                    this.code = Math.floor(Math.random()*(9999-999)+1000);
                    let t = setInterval(()=>{
                        if(this.time > 0){
                            this.time--;
                        }else {
                            clearInterval(t);
                            this.time = 0;
                        }
                    },1000)
                }
            }
        }
    }
</script>

<style scoped>
@import "../../style/reg.css";
</style>