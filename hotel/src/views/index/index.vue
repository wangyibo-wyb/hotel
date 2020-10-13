<template>
    <div>
        <!--头部开始-->
        <div class="swiper-container">
            <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item v-for="(item,index) in bannerform" :key="index">
                    <router-link :to="{name:'Detail',query:{sid:item.sid}}">
                        <img :src="IMGURL+item.sthumb" alt="" style="width: 100%;">
                    </router-link>
                </van-swipe-item>
            </van-swipe>
            <div class="search">
                <img src="../../assets/搜索.png" alt="">
            </div>
            <div class="area">
                <div class="search-area">
                    <div class="search-area-left">
                        <router-link to="/province"><span style="color: #ed7a7e;">{{indexSearch.province}}</span>
                        </router-link>
                    </div>
                    <div class="search-area-middle">
                        <input type="text" name="" id="" placeholder="景点 地址 关键字">
                    </div>
                    <div class="search-area-right">
                        <img src="../../assets/position.png" alt="" style="width: 80px">
                    </div>
                </div>

                <div class="time-area">
                    <router-link class="time-area time" to="/calendar" tag="div">
                        <div class="time-day"><span>{{indexSearch.startTime}}</span></div>
                        <div class="week-day"><span>{{indexSearch.startDay}}</span></div>
                        <div class="toright"><img src="../../assets/箭头_切换向上.png" alt=""></div>
                        <div class="time-tomorrow"><span>{{indexSearch.endTime}}</span></div>
                        <div class="week-tomorrow"><span>{{indexSearch.endDay}}</span></div>
                    </router-link>
                    <div class="time-area-day"><span>共一晚</span></div>
                </div>
                <div class="now-search">
                    <button><span style="font-size: 0.3rem; letter-spacing: 2px;">立即查找</span>
                    </button>
                </div>

                <div class="trust">
                    <div class="moneybag"><img src="../../assets/moneybag.jpg" alt=""><span>信用免押金</span></div>
                    <div class="music"><img src="../../assets/music.jpg" alt=""><span>24小时客服</span></div>
                    <div class="protect"><img src="../../assets/protect.jpg" alt=""><span>房源房东认证</span></div>
                </div>
            </div>
        </div>
        <!--头部结束-->
        <div v-if="categoryform" style="padding:0 0.57rem">
            <!-- 优选PRO开始 -->
            <div class="introduce" style="margin-top: 4rem">
                <div class="sleep-title">
                    <div class="title">
                        <span>{{this.categoryform[0].cname.substring(0,2)}}</span><span style="color: #eb666b">{{this.categoryform[0].cname.substring(2,3)}}</span><span>{{this.categoryform[0].cname.substring(3,5)}}</span>
                    </div>
                </div>
                <div class="introduce-text">{{this.categoryform[0].cdesc}}</div>
                <van-swipe style="margin-top: 20px" indicator-color="white">
                    <van-swipe-item class="pro-item" v-for="(item,index) in proform" :key="index">
                        <router-link :to="{name:'Detail',query:{sid:item.sid}}">
                            <img :src="IMGURL+item.sthumb" alt="">
                            <div class="pro-item-name">{{item.sname}}</div>
                            <div class="pro-item-core">
                            </div>
                            <div class="pro-item-core">
                                <div class="recommend-item-star">
                                    <div class="recommend-star-container clear-fix">
                                        <div class="recommend-star float-left" v-for="(star,index) in item.score"
                                             :key="index+1">
                                            <img src="../../assets/img/star-white.png" alt="">
                                        </div>
                                        <div class="recommend-star float-left" v-for="(star,index) in (5 - item.score)"
                                             :key="index">
                                            <img src="../../assets/img/star-gray.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-item-area">
                                <span class="pro-city">{{item.scity}}</span>
                                <span>.</span>
                                <span class="pro-area">{{item.sarea}}</span>
                            </div>
                            <div class="pro-item-price">
                                <span class="pro-rmb">RMB</span>
                                <span class="pro-price">{{item.sprice}}</span>
                            </div>
                        </router-link>
                    </van-swipe-item>
                    >
                </van-swipe>
            </div>
            <!-- 优选PRO结束-->
            <!-- 不得不睡开始 -->
            <div class="sleep">
                <div class="sleep-title">
                    <div class="title">
                        <span>{{this.categoryform[1].cname.substring(0,3)}}</span><span style="color: #eb666b">{{this.categoryform[1].cname.substring(3,4)}}</span>
                    </div>
                </div>
                <div class="introduce-text">{{this.categoryform[1].cdesc}}</div>
                <div class="swiper-container" style="margin-top: 16px">
                    <van-swipe v-if="sleepform" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in sleepform"
                                        :label="item"
                                        :key="index">
                            <router-link :to="{name:'Detail',query:{sid:item.sid}}">
                                <div class="item">
                                    <img :src="IMGURL+item.sthumb" alt="" style="width: 100%">
                                    <div class="info">
                                        <span class="stname">{{item.sname}}</span>
                                        <div class="line"></div>
                                        <div class="sdesc">
                                            <span>{{item.sdesc}}</span>
                                        </div>
                                        <div class="sleep-item-tag">
                                            <div class="sleep-tag" v-for="(value,index) in item.stag.split(/,|，/)"
                                                 :key="index">
                                                {{value}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <!-- 不得不睡结束 -->
            <!-- 不得不说开始 -->
            <div class="say">
                <div class="sleep-title">
                    <div class="title">
                        <span>{{this.categoryform[2].cname.substring(0,3)}}</span><span style="color: #eb666b">{{this.categoryform[2].cname.substring(3,4)}}</span>
                    </div>
                    <div class="introduce-text" style="margin-left: 0">{{this.categoryform[2].cdesc}}</div>
                </div>
                <div style="margin-top: 20px;" class="say-item">
                    <van-swipe class="my-swipe4" :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="(item,index) in sayform" :key="index">
                            <router-link :to="{name:'Detail',query:{sid:item.sid}}">
                                <img :src="IMGURL+item.sthumb">
                            </router-link>
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div class="clear" style="clear: both"></div>
            </div>
            <!-- 不得不说结束 -->
            <!-- 不得不看开始 -->
            <div class="look">
                <div class="sleep-title">
                    <div class="title">
                        <span>{{this.categoryform[3].cname.substring(0,3)}}</span><span style="color: #eb666b">{{this.categoryform[3].cname.substring(3,4)}}</span>
                    </div>
                </div>
                <div class="look-text" style="margin-left:0px">{{this.categoryform[3].cdesc}}</div>

                <div class="swiper-container1">
                    <div class="swiper-wrapper" v-for="(item,index) in lookform"
                         :key="index">
                        <router-link :to="{name:'Detail',query:{sid:item.sid}}">
                            <div class="swiper-slide">
                                <img :src="IMGURL+item.sthumb" alt="" style="width:100%;height: 100px">
                                <div class="heart">
                                    <img src="../../assets/heart.png" alt="" style="width: 20px; height: 20px;"
                                         class="heartz">
                                </div>
                                <div class="swiper-text">{{item.sname}}</div>
                                <div class="swiper-text-area">{{item.sprovince}}•{{item.scity}}</div>
                                <div class="recommend-item-star">
                                    <div class="recommend-star-container clear-fix">
                                        <div class="recommend-star float-left" v-for="(star,index) in item.score"
                                             :key="index+1">
                                            <img src="../../assets/img/star.png" alt="">
                                        </div>
                                        <div class="recommend-star float-left" v-for="(star,index) in (5 - item.score)"
                                             :key="index">
                                            <img src="../../assets/img/star-dim.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="RMB">RMB</div>
                                    <div class="maths">{{item.sprice}}</div>
                                    <div class="everynight">每晚</div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!--不得不看结束-->
        </div>
        <!--底部开始-->
        <bottom-tab :index="1"></bottom-tab>
        <!--底部结束-->
    </div>
</template>

<script>
    import {index} from "../../http/api";
    import {IMGURL} from "../../lib/base";
    import BottomTab from "../../components/bottomTab/BottomTab";

    export default {
        name: "index",
        components: {BottomTab},
        data() {
            return {
                IMGURL,
                sleepform: '',
                lookform: '',
                bannerform: '',
                categoryform: '',
                proform: '',
                sayform: '',
            }
        },
        methods: {
            initSearch() {
                this.$store.dispatch('setTime');
                this.$store.dispatch('setProvince', '山西');
            },
            initSleep() {
                index(this.sleepform).then(res => {
                    this.bannerform = res.data.banner;
                    this.categoryform = res.data.category;
                    let proform = res.data.category[0].children;
                    proform = proform.map(ele => {
                        ele.score = Math.floor(ele.score);
                        return ele;
                    });
                    this.proform = proform;
                    this.sleepform = res.data.category[1].children;
                    this.sayform = res.data.category[2].children;
                    let lookform = res.data.category[3].children;
                    lookform = lookform.map(ele => {
                        ele.score = Math.floor(ele.score);
                        return ele;
                    });
                    this.lookform = lookform;
                }).catch(error => {
                    console.log(error);
                });
            },
        },
        computed: {
            indexSearch() {
                return this.$store.state.indexSearch;
            }

        },
        mounted() {
            this.initSearch();
            this.initSleep();
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/index.css";

    a {
        color: #ed7a7e;
    }
</style>
