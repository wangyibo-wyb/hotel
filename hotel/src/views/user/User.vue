<template>
    <div>
        <!-- 头部开始 -->
        <div class="header" v-if="userinfo">
            <div class="avatar">
                <img :src="IMGURL+userinfo.avatar" alt="">
            </div>
            <div class="uname">
                <span>{{userinfo.uname}}</span>
            </div>
            <div class="vipcenter">
                <div class="viplogo">
                    <img src="../../assets/imgs/viplogo.png" alt="">
                </div>
                <span class="viptitle">会员中心</span>
                <a href="" class="vipname">
                    <img src="../../assets/imgs/go.png" alt="">
                    <span>五品小主</span>
                </a>
            </div>
            <div class="info">
                <a href="">
                    <img src="../../assets/imgs/info.png" alt="">
                </a>
            </div>
        </div>
        <!-- 我的订单开始 -->
        <div class="order">
            <div class="ordertitle">
                <span>我的订单</span>
            </div>
            <div class="line"></div>
            <router-link to="/order">
                <div class="view">
                    <img src="../../assets/imgs/goon.png" alt="">
                    <span>查看全部订单</span>
                </div>
            </router-link>
            <div class="ordermenu">
                <ul>
                    <li>
                        <img src="../../assets/imgs/done.png" alt="">
                        <div class="orderbtn">
                            <span>已完成</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/imgs/pay.png" alt="">
                        <div class="orderbtn">
                            <span>待付款</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/imgs/live.png" alt="">
                        <div class="orderbtn">
                            <span>待入住</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/imgs/refund.png" alt="">
                        <div class="orderbtn">
                            <span>退款</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 菜单页开始 -->
        <div class="menu">
            <ul>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>红包</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>设置</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
                <li>
                    <router-link to="/collection">
                        <img src="../../assets/imgs/circle.png" alt="">
                        <span>我的收藏</span>
                        <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                    </router-link>
                </li>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>积分商城</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>帮助与反馈</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
            </ul>
        </div>
        <!-- 提交按钮开始 -->
        <div class="enter-btn">
            <div class="btn">
                <span>成为房东</span>
            </div>
        </div>
        <!--底部开始-->
        <bottom-tab :index="4"></bottom-tab>
    </div>
</template>

<script>
    import {IMGURL} from "../../lib/base"
    import {userinfo} from "../../http/api";
    import BottomTab from "../../components/bottomTab/BottomTab";

    export default {
        name: "User",
        components: {BottomTab},
        data() {
            return {
                userinfo: null,
                IMGURL
            }
        },
        methods: {
            initUser() {
                userinfo().then(res => {
                    this.userinfo = res.data;
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        mounted() {
            this.initUser();
        }

    }
</script>

<style scoped lang="scss">
    @import "../../style/user.css";
</style>
