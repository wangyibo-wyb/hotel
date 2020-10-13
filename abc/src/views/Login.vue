<template>
    <div class="login" ref="login">
        <div class="login-content">
            <el-form :model="loginForm" ref="loginform" :rules="rules">
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.prevent="handleLogin('loginform')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {SUCCESS,URL} from "../lib/base";


    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在六到十五个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleLogin() {
                this.$refs.loginform.validate((valid) => {
                    if (valid) {
                        //同源  跨域
                        axios.post(URL+'/admin/login/check',this.loginForm).then( (res)=> {
                            if(res.status === 200&&res.data.code === SUCCESS){
                                sessionStorage.setItem('token',res.data.token);

                                //$router 路由实例  $route 被激活的路由
                                let redirect = this.$route.query.redirect || 'index';
                                this.$router.push({name:redirect});
                            }else {
                                this.$message.error(res.data.msg);
                            }
                        }).catch(function () {
                            this.$message.error('登录失败');
                        })
                    }
                })
            }

        }
    }
</script>

<style scoped>
    .login {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #f5f5f5;
    }

    .login > .login-content {
        width: 400px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 20px;
        border-radius: 20px;
    }
</style>