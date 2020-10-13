<template>
    <div style="width: 800px;margin: 0 auto">
        <div v-if="category">
            <el-form :model="category" :rules="categoryRules" ref="categoryform">
                <el-form-item label="分类名称" prop="cname">
                    <el-input v-model="category.cname" placeholder="请输入分类名称"></el-input>
                </el-form-item>
                <el-form-item label="分类描述" prop="cdesc">
                    <el-input v-model="category.cdesc" placeholder="请输入分类描述"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.prevent="handleAddcat" style="float: right">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {SUCCESS, URL} from "../../../lib/base";

    export default {
        name: "Editcat",
        data() {
            // eslint-disable-next-line no-unused-vars
            let validateCname = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('分类名称不能为空'));
                } else if (!(/[u4e00-\u9fa5]{2,6}/.test(value))) {
                    callback(new Error(''));
                } else {
                    callback();
                }

            }
            return {
                category: null,
                categoryRules: {
                    cname: [
                        {validator: validateCname, triangle: "blur"}
                    ],
                    cdesc: [
                        {required: true, message: '分类描述必填', triangle: "blur"},
                        {min: 2, max: 20, message: '长度在2-20个字符', triangle: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleAddcat() {
                this.$refs.categoryform.validate((valid) => {
                    if (valid) {
                        let url = URL + '/admin/category/editcat';
                        let token = sessionStorage.getItem('token');
                        axios({
                            url,
                            method: 'POST',
                            data: this.category,
                            headers: {
                                token
                            }
                        }).then((res) => {
                            if (res.status === 200 && res.data.code === SUCCESS) {
                                this.$message.success('分类修改成功');
                                this.$router.push({path:'/showcat'});
                            }
                        }).catch(() => {
                            this.$message.error('分类修改失败');
                        })
                    }
                })
            },
            initCategory(cid) {
                let url = URL + '/admin/category/read';
                let token = sessionStorage.getItem('token');
                axios({
                    method: 'GET',
                    url,
                    params:{cid},
                    headers: {
                        token
                    }
                }).then(res => {
                    if (res.status === 200&&res.data.code === SUCCESS) {
                        if (res.data.data) {
                            this.category = res.data.data;
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        mounted() {
            let {cid} = this.$route.query;
            this.initCategory(cid);
        }
    }
</script>

<style scoped>

</style>