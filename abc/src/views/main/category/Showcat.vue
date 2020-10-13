<template>
    <div style="width: 1000px;margin: 0 auto">
        <el-form :inline="true">
            <el-form-item label="分类名称">
                <el-input v-model="search.cname" placeholder="请输入分类名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.prevent="handleSearch">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
                :data="categories"
                border
                style="width: 100%">
            <el-table-column
                    prop="cid"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="cname"
                    label="分类名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="cdesc"
                    label="分类描述">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" round plain @click="handleEdit(scope.row.cid)">编辑</el-button>
                    <el-button type="primary" round plain @click="handleDelete(scope.row.cid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="paginate" style="margin-top: 30px;float: right">
            <el-pagination
                    :current-page.sync="paginate.page"
                    :page-size.sync="paginate.limit"
                    layout="total , prev, pager, next, jumper"
                    :total="total"
                    @current-change="handleCurrentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {SUCCESS, URL} from "../../../lib/base";

    /*查看符合指定条件下某一页若干条数据*/
    export default {
        name: "Showcat",
        data() {
            return {
                //搜索条件
                search: {cname: ''},
                //分页
                paginate: {
                    page: 1,
                    limit: 7
                },
                categories: [],
                total: 0
            }
        },
        methods: {
            initCategory() {
                let url = URL + '/admin/category/index';
                let token = sessionStorage.getItem('token');
                let params = Object.assign({}, this.paginate, this.search)
                axios({
                    url,
                    method: 'GET',
                    data: this.category,
                    headers: {
                        token
                    },
                    params: params
                }).then(res => {
                    if (res.status === 200 && res.data.code === SUCCESS) {
                        if (res.data.data) {
                            this.categories = res.data.data
                            this.total = res.data.total;

                        } else {
                            this.$message.info('暂无数据');
                        }
                    }
                }).catch(() => {
                    this.$message.error('查看失败');
                })
            },
            handleCurrentChange(val) {
                this.paginate.page = val;
                this.initCategory();
            },
            handleSearch() {
                this.paginate.page = 1;
                this.initCategory();
            },
            handleDelete(cid) {
                let url = URL + '/admin/category/delete';
                let token = sessionStorage.getItem('token');
                axios({
                    url,
                    method: 'GET',
                    params: {cid},
                    headers: {
                        token
                    },
                }).then(res => {
                    if (res.status === 200 && res.data.code === SUCCESS) {
                        this.initCategory();
                        this.$message.success('删除成功');
                    }
                }).catch(() => {
                    this.$message.error('删除失败');
                })
            },
            handleEdit(cid){
                this.$router.push({path:'/editcat',query:{cid}});
            }
        },
        mounted() {
            this.initCategory();
        }
    }
</script>

<style scope>
   table{
       font-size: 14px!important;
   }

</style>