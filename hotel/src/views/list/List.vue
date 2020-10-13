<template>
    <div>
        <div class="list-box">
            <!--导航栏开始-->
            <div class="nav">
                <ul>
                    <li v-for="(item,index) in orderArr" :key="index" :class="{active:order.field === item.field}"
                        @click="handlerOrdertype(item.field)">{{item.text}} <i :class="['iconfont',item.icon]"></i></li>
                </ul>
            </div>
            <!--导航栏结束-->
            <!--列表开始-->
            <div class="list">
                <van-pull-refresh v-model="isPullrefresh" @refresh="handlerPullrefresh">
                    <van-list v-model="isUpper" :finished="upperFinished" :immediate-check="false" @load="handlerUpper">
                        <div class="recommend">
                            <div class="recommend-item" v-for="(item,index) in stayhome" :key="index">
                                <router-link :to="{name:'Detail',query:{sid:item.sid}}">
                                    <div class="recommend-item-img">
                                        <img :src="item.sthumb" alt="">
                                        <div class="like">
                                            <img src="../../assets/img/like.png" alt="">
                                        </div>
                                    </div>
                                    <div class="recommend-item-title">
                                        {{item.sname}}
                                    </div>
                                    <div class="recommend-item-area">
                                        {{item.sprovince}}•{{item.scity}}
                                    </div>
                                    <div class="recommend-item-star">
                                        <div class="recommend-star-container clear-fix">
                                            <div class="recommend-star float-left" v-for="(star,index) in item.score"
                                                 :key="index+1">
                                                <img src="../../assets/img/star.png" alt="">
                                            </div>
                                            <div class="recommend-star float-left"
                                                 v-for="(star,index) in (5 - item.score)" :key="index">
                                                <img src="../../assets/img/star-dim.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="recommend-item-price">
                                        <span class="rmb">RMB</span>
                                        <span class="recommend-price theme">{{item.sprice}}</span>
                                        <span class="each-night">每晚</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </van-list>
                </van-pull-refresh>
            </div>
            <!--列表结束-->
        </div>
        <!--底部开始-->
        <bottom-tab :index="2"></bottom-tab>
        <!--底部结束-->
    </div>
</template>

<script>
    import {lists} from "../../http/api";
    import {IMGURL} from "../../lib/base";
    import {Toast} from "vant";
    import BottomTab from "../../components/bottomTab/BottomTab";

    export default {
        name: "List",
        components: {BottomTab},
        data() {
            return {
                orderArr: [
                    {text: '综合', icon: 'icon-xiajiantou', field: 'sid'},
                    {text: '位置', icon: 'icon-xiajiantou', field: 'score'},
                    {text: '时间', icon: 'icon-xiajiantou', field: 'ctime'},
                    {text: '价格', icon: 'icon-xiajiantou', field: 'sprice'},
                ],
                isPullrefresh: false,
                isUpper: false,
                upperFinished: false,
                paginate: {
                    page: 0,
                    limit: 8
                },
                // 综合 sid , 位置score  时间 ctime 价格 sprice
                order: {
                    field: 'sid',
                    type: 'desc'
                },
                stayhome: [],
                total: 0,
                IMGURL
            }
        },
        methods: {
            handlerPullrefresh() {
                this.upperFinished = false;
                this.paginate.page = 0;
                this.stayhome = [];
                this.total = 0;
                this.handlerUpper();
                Toast({
                    "message": "刷新成功"
                })
                this.isPullrefresh = false;
            },
            handlerUpper() {
                this.paginate.page++;
                let obj = Object.assign({}, this.paginate, this.order);
                lists(obj).then(res => {
                    if (res.data) {
                        !this.total && (this.total = res.total);
                        let data = res.data.map(ele => {
                            ele.sthumb = IMGURL + ele.sthumb;
                            ele.score = Math.floor(ele.score);
                            return ele;
                        })
                        this.stayhome = this.stayhome.concat(data);
                        if (this.stayhome.length >= this.total) {
                            this.upperFinished = true;
                        }
                    } else {
                        Toast({
                            'message': '暂无数据'
                        })
                    }
                    this.isUpper = false;
                }).catch(error => {
                    console.log(error);
                })
            },
            handlerOrdertype(field) {
                this.order.field = field;
                this.upperFinished = false;
                this.paginate.page = 0;
                this.stayhome = [];
                this.total = 0;
                this.handlerUpper();
            }
        },
        mounted() {
            this.handlerUpper()
        }
    }
</script>

<style scoped>
    @import "../../style/list.css";
</style>