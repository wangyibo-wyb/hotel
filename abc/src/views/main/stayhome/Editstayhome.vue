<template>
    <div style="width: 1000px;margin: 0 auto">
        <loading :isshow="showLoading"></loading>
        <el-form :model="stayhomeform" ref="stayhomeform" v-if="stayhomeform">
            <el-form-item label="所属分类">
                <el-select v-model="stayhomeform.cid" placeholder="请选择所属分类">
                    <el-option
                            v-for="item in categorys"
                            :key="item.cid"
                            :label="item.cname"
                            :value="item.cid">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="民宿名称">
                <el-input v-model="stayhomeform.sname"></el-input>
            </el-form-item>
            <el-form-item label="民宿描述">
                <el-input v-model="stayhomeform.sdesc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="民宿标签">
                <el-input v-model="stayhomeform.stag"></el-input>
            </el-form-item>
            <el-form-item label="民宿评分">
                <el-input v-model="stayhomeform.score"></el-input>
            </el-form-item>
            <el-form-item label="民宿价格">
                <el-input v-model="stayhomeform.sprice"></el-input>
            </el-form-item>
            <el-form-item label="民宿省份">
                <el-select v-model="stayhomeform.sprovince" placeholder="请选择所在省份">
                    <el-option
                            v-for="(item,index) in province"
                            :value="item"
                            :lable="item"
                            :key="index">
                    </el-option>

                </el-select>
            </el-form-item>
            <el-form-item label="民宿城市">
                <el-select v-model="stayhomeform.scity" placeholder="请输入所在城市">
                    <el-option
                            v-for="(item,index) in cityList"
                            :value="item"
                            :label="item"
                            :key="index"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="民宿区域">
                <el-select v-model="stayhomeform.sarea" placeholder="请输入所在区域">
                    <el-option
                            v-for="(item,index) in area"
                            :value="item"
                            :label="item"
                            :key="index"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="民宿地址">
                <el-input v-model="stayhomeform.saddress"></el-input>
            </el-form-item>
            <el-form-item label="民宿缩略图">
                <el-upload
                        class="avatar-uploader"
                        :action="uploadurl"
                        :show-file-list="false"
                        :on-success="handleThumbSuccess"
                        :before-upload="handleThumbBeforeupload" style="width: 178px;">
                    <img v-if="stayhomeform.sthumb" :src="IMGURL+stayhomeform.sthumb" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span style="float: left;margin-top: 200px;margin-left: -200px;font-size: 14px">只能上传jpg/jpeg/png/webp文件，且不超过2MB，最佳比例为1:1</span>
            </el-form-item>
            <el-form-item label="民宿轮播图">
                <el-upload
                        :action="uploadurl"
                        list-type="picture-card"
                        multiple
                        :limit="5"
                        :file-list="bannerFileList"
                        :on-success="handleBannerSuccess"
                        :on-remove="handleBannerRemove"
                        :on-preview="handleBannerPreview"
                        :before-upload="handleThumbBeforeupload">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <span style="font-size: 14px">只能上传jpg/jpeg/png/webp文件，且不超过2MB，最佳比例为1:1,最多上传5张</span>
            </el-form-item>
            <el-form-item label="民宿详情">
            </el-form-item>
            <el-form-item>
                <rich-text @rich-change="setRichText" formfiled="sdetail" :value="stayhomeform.sdetail"></rich-text>
            </el-form-item>
            <el-form-item label="入住须知">
            </el-form-item>
            <el-form-item>
                <rich-text @rich-change="setRichText" formfiled="snotice" :value="stayhomeform.snotice"></rich-text>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="float: right" @click.prevent="handlestayhome">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {SUCCESS, URL, IMGURL} from "../../../lib/base";
    import instance from "../../../http/http";
    import loading from "../../../components/loading/loading";
    import RichText from "../../../components/rich-text/RichText";
    import city from "../../../lib/city.json";
    import {stayhomeRead,stayhomeUpdate} from "../../../http/stayhome";


    export default {
        name: "Stayhomeadd",
        components: {
            loading,
            RichText
        },
        data() {
            return {
                IMGURL,
                uploadurl: URL + '/admin/upload/index',
                showLoading: false,
                categorys: [],
                stayhomeform: null,
                bannerFileList:[],
                bannerArr: [],
                dialogImageUrl:'',
                dialogVisible: false,
                city:[],
                province: [],
            }
        },
        computed:{
            //动态 根据city和sprovince
            cityList(){
                let cityList = [];
                let current = this.city.find(ele=>ele.name == this.stayhomeform.sprovince);
                if(current){
                    cityList = current.city.map(ele=>ele.name);
                }
                return cityList;
            },
            area(){
                let areaList = [];
                let current = this.city.find(ele=>ele.name== this.stayhomeform.sprovince);
                if(current){
                    let currentarea = current.city.find(ele=>ele.name == this.stayhomeform.scity);
                    if(currentarea){
                        areaList = currentarea.area;
                    }
                }
                return areaList;
            }
        },
        methods: {
            initStayhome(sid){
                stayhomeRead(sid).then(res=>{
                    if(res.data){
                        this.stayhomeform = res.data;
                        this.bannerArr = res.data.sbanner1;
                        this.bannerFileList = res.data.sbanner1.map(ele=>({name:res.data.sname,url:this.IMGURL+ele}))
                    }
                }).catch(error=>{
                    console.log(error);
                });
            },
            initCategory() {
                this.showLoading = true;
                instance('admin/category/indexall').then(res => {
                    this.showLoading = false;
                    if (res.code === SUCCESS) {
                        this.categorys = res.data;
                    }
                })
            },
            //缩略图上传
            handleThumbSuccess(res) {
                if (res.code === SUCCESS) {
                    this.stayhomeform.sthumb = res.imgpath;
                }
            },
            //图片验证
            handleThumbBeforeupload(file) {
                let {size, type} = file;
                let uploadMaxsize = 2 * 1024 *1024;
                let uploadType = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
                let sizeFlag = true, typeFlag = true;
                sizeFlag = size < uploadMaxsize;
                typeFlag = uploadType.some(ele => ele == type);
                if (!sizeFlag) {
                    this.$message.error('图片大小不能超过200kb！');
                }
                if (!typeFlag) {
                    this.$message.error('上传图片只能是JPG,JPEG,PNG,WEBP格式！');
                }
            },
            //轮播图上传
            handleBannerSuccess(res) {
                this.bannerArr.push(res.imgpath);
                this.stayhomeform.sbanner = this.bannerArr.join(',');
            },
            //轮播图删除
            handleBannerRemove(file) {
                let bannerurl = file.response?file.response.imgpath:file.url;
                this.bannerArr = this.bannerArr.filter(ele => !bannerurl.includes(ele));
                this.stayhomeform.sbanner = this.bannerArr.join(',');
            },
            //预览图片
            handleBannerPreview(file) {
                this.dialogVisible = true;
                let url;
                if(file.response){
                    url = this.IMGURL + file.response.imgpath;
                }else {
                    url = file.url;
                }
                this.dialogImageUrl = url;
            },
            //父子组件通信
            setRichText(formfiled,html){
                this.stayhomeform[formfiled]= html;
            },
            //省份
            setProvince(){
                this.province = this.city.map(ele=>ele.name);
            },
            handlestayhome() {
                delete(this.stayhomeform['sbanner1']);
                stayhomeUpdate(this.stayhomeform.sid,this.stayhomeform).then(res=>{
                    this.$message.success(res.msg);
                    this.$router.push({path:'/showstayhome'});
                }).catch(error=>{
                    console.log(error);
                });
            }

        },
        mounted() {
            let sid = this.$route.params.id;
            this.initStayhome(sid);
            this.city = city;
            this.setProvince();
            this.initCategory();
        }
    }
</script>

<style>
    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        float: left;
    }

    .avatar-uploader:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
        display: flex!important;
        justify-content: center;
        align-items: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    label{
        font-weight: 600;
        font-size: 16px!important;
    }
</style>