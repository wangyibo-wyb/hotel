<template>
    <div style="width: 800px;margin: 0 auto">
        <el-form :model="passform" :rules="rules" ref="ruleForm">
            <el-form-item label="旧密码" prop="oldpass">
                <el-input v-model="passform.oldpass" placeholder="请输入旧密码" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newpass">
                <el-input v-model="passform.newpass" placeholder="请输入新密码" type="password" ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="newpassagain">
                <el-input v-model="passform.newpassagain" placeholder="请再次输入新密码" type="password" prop="newpassagain"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.prevent="handlepassword">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios';
    import {SUCCESS,URL} from "../../lib/base";

    export default {
        name: "editpass",
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else {
                    if (this.passform.newpassagain !== '') {
                        this.$refs.ruleForm.validateField('newpassagain');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入新密码'));
                } else if (value !== this.passform.newpass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                passform:{
                    oldpass:'',
                    newpass:'',
                    newpassagain:''
                },
                rules: {
                    oldpass: [
                        {required: true, message: '请输入旧密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在六到十五个字符', trigger: 'blur'}
                    ],
                    newpass: [
                        {  validator: validatePass, trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在六到十五个字符', trigger: 'blur'}
                    ],
                    newpassagain: [
                        {validator:validatePass2,trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在六到十五个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            handlepassword(){

                let url = URL+'/admin/login/editpass';
                let token = sessionStorage.getItem('token');
                axios({
                    url,
                    data:this.passform,
                    method:'POST',
                    headers:{
                        token
                    }
                }).then(res=>{
                    if(res.status === 200 && res.data.code === SUCCESS){
                        this.$message.success(res.data.msg);
                        sessionStorage.clear();
                        this.$router.push({path:'/login'});
                    }
                }).catch(error=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>

</style>