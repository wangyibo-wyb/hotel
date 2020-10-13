<template>
    <div>
        <div class="back">
            <span class="title1">远方 即 故乡</span>
            <span class="title2">WELCOME HOME</span>
            <span class="title3">小主 等你好久了</span>
        </div>
        <div class="con">
            <div class="login">
                <form action="javascript:;" ref="registerform">
                    <div class="inputNum">
                        <div class="inputImg">
                            <i class="iconfont icon-shouji"></i>
                        </div>
                        <input type="text" class="num" placeholder="小主，留个电话吧" autocomplete="off" v-model="registerform.uphone" name="uphone">
                    </div>
                    <div class="inputPass">
                        <div class="inputImg">
                            <i class="iconfont icon-suo"></i>
                        </div>
                        <input type="text" class="pass" placeholder="我们的秘密" autocomplete="off" v-model="code" name="ucode">
                    </div>
                    <button class="sub" @click="getCode" v-show="!time">获取秘密</button>
                    <button class="sub" v-show="time">({{this.time}})s</button>
                    <button class="logbtn" @click="handleLogin(registerform)">欢迎回家</button>
                    <div class="radio">
                        <label>
                            没有账号？请点击<router-link to="/reg">注册</router-link>
                        </label>
                    </div>
                </form>
            </div>
            <div class="wx">
                <div class="wx-text">
                    <div class="line">
                        <span class="line1"></span>
                        <span class="line2"></span>
                    </div>
                    <div class="text">欢迎使用第三方登录</div>
                    <div class="line">
                        <span class="line2"></span>
                        <span class="line1"></span>

                    </div>
                </div>
                <button class="wxbtn"> 微信直接登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                registerform:{
                    uphone:''
                },
                code:'',
                time:0
            }
        },
        methods:{
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
            },
            handleLogin(value){
                let redirect = this.$route.query.redirect || 'index';
                let query = this.$route.query.params || {};
                let obj = Object.assign({},value,{redirect},{query});
                this.$store.dispatch('handleLogin',obj);
            }
        }
    }
</script>

<style scoped>
@import "../../style/login.css";
</style>
