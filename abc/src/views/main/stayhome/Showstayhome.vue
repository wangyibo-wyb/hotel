<template>
    <div>
        <el-form :inline="true">
            <el-form-item label="民宿省份">
                <el-select v-model="stayhomes.sprovince" placeholder="请选择所在省份">
                    <el-option
                            v-for="(item,index) in province"
                            :value="item"
                            :lable="item"
                            :key="index">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="民宿城市">
                <el-select v-model="search.scity" placeholder="请选择所在省份">
                    <el-option
                            v-for="(item,index) in cityList"
                            :value="item"
                            :lable="item"
                            :key="index">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="民宿名称">
                <el-input v-model="search.sname" placeholder="请输入分类名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.prevent="initStayhome">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
                :data="stayhomes"
                border
                style="width: 100%">
            <el-table-column
                    prop="cid"
                    label="民宿所属分类">
            </el-table-column>
            <el-table-column
                    prop="sname"
                    label="民宿名称">
            </el-table-column>
            <el-table-column
                    prop="sdesc"
                    label="民宿描述">
            </el-table-column>
            <el-table-column
                    label="民宿标签"
                    width="200">
                <template slot-scope="scope">
                    <el-button v-for="item in scope.row.stag" :key="item">{{item}}</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    prop="score"
                    label="民宿评分">
            </el-table-column>
            <el-table-column
                    prop="sprice"
                    label="民宿价格">
            </el-table-column>
            <el-table-column
                    label="民宿位置">
                <template slot-scope="scope">
                    <span>{{scope.row.sprovince}}--{{scope.row.scity}}--{{scope.row.sarea}}--{{scope.row.saddress}}</span>
                </template>
            </el-table-column>
            <el-table-column label="缩略图">
                <template slot-scope="scope">
                    <img v-if="scope.row.sthumb" :src="scope.row.sthumb" class="avatar">
                </template>
            </el-table-column>
            <el-table-column label="创建时间">
                <template slot-scope="scope">
                    <span>{{scope.row.ctime|formatetime}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    fixed="right"
                    width="200">
                <template slot-scope="scope">
                    <el-button type="primary" round plain >
                        <router-link :to="{name:'editstayhome',params:{id:scope.row.sid}}">编辑</router-link>
                    </el-button>
                    <el-button type="primary" round plain @click="handeldelete(scope.row.sid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="paginate" style="margin-top: 30px;float: right">
            <el-pagination
                    :current-page.sync="paginate.page"
                    :page-size.sync="paginate.limit"
                    layout="total , prev, pager, next, jumper"
                    :total="total"
                    @current-change="initStayhome">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import instance from "../../../http/http";
    import {SUCCESS} from "../../../lib/base";
    import {IMGURL} from "../../../lib/base";
    import city from "../../../lib/city.json";
    import {categoryIndex} from "../../../http/category";


    export default {
        name: "Showstayhome",
        data() {
            return {
                IMGURL,
                search: {sname: '', scity: '', cid: ''},
                paginate: {
                    page: 1,
                    limit: 3
                },
                stayhomes: [],
                total: 0,
                city,
                province: [],
                category: []
            }
        },
        computed: {
            cityList() {
                let cityList = [];
                let current = this.city.find(ele => ele.name == this.stayhomes.sprovince);
                if (current) {
                    cityList = current.city.map(ele => ele.name);
                }
                return cityList;
            }
        },
        methods: {
            initStayhome() {
                let params = Object.assign({}, this.paginate, this.search)
                instance('/api/stayhome', {
                    params
                }).then(res => {
                    if (res.code === SUCCESS) {
                        let data = res.data;
                        data.map(ele => {
                            ele.stag = ele.stag.split(/,|，/);
                            ele.sthumb = IMGURL + ele.sthumb;
                            return ele;
                        });
                        this.stayhomes = res.data;
                        this.total = res.total;
                    }
                }).catch((error) => {
                    console.log(error);
                })
            },
            initCategory() {
                categoryIndex().then(res => {
                    this.categories = res.data
                })
            },
            handeldelete(sid) {
                instance.delete('/api/stayhome/' + sid).then(res => {
                    if (res.code === SUCCESS) {
                        this.initStayhome();
                        this.$message.success("删除成功")
                    }
                }).catch(error => {
                    console.log(error);
                })
            },
            setProvince() {
                this.province = this.city.map(ele => ele.name);
            },

        },
        mounted() {
            this.setProvince();
            this.initStayhome();
            this.initCategory();
        }
    }
</script>

<style scoped>

</style>