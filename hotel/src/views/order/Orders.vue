<template>
    <div>
        <header>
            <van-nav-bar
                    title="立即下单"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </header>
        <div class="container">
            <van-card
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
                <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                </template>
            </van-card>
            <van-cell-group>
                <van-cell title="入离日期" class="inout-date">
                    <section class="duration arrow-box clear-fix">
                        <router-link to="/calendar">
                            <div class="in float-left">
                                <div class="action">入住</div>
                                <div class="date">10.1
                                    <span class="week highlight">SUN</span>
                                </div>
                            </div>
                            <div class="time float-left">
                                <div class="count">共2晚</div>
                                <div class="underline">
                                    <div class="right-line float-right"></div>
                                </div>
                            </div>
                            <div class="out float-left">
                                <div class="action">离店</div>
                                <div class="date">10.3
                                    <span class="week">TUS</span>
                                </div>
                            </div>
                            <div class="right-arrow">
                            </div>
                        </router-link>
                    </section>
                </van-cell>
                <van-cell title="入住人数">
                    <van-stepper v-model="value"/>
                </van-cell>
                <van-cell title="住客信息" class="userinfo">
                    <van-field v-model="orders.names" label="姓名" placeholder="请输入姓名"/>
                    <van-field v-model="orders.IDcard" type="digit" label="身份证" placeholder="请输入18位身份证号"/>
                </van-cell>
                <van-cell title="联系方式" value="11111111111" class="uphone"></van-cell>
                <van-cell title="房费" value="198.00" class="sprice"></van-cell>
                <van-cell title="平台优惠" value="39.00" class="preferential"></van-cell>
                <van-cell title="本单需付" value="159.00" class="preferential"></van-cell>
            </van-cell-group>
            <div class="notie-container">
                <div class="notice-item">
                    <span class="notice-title">在线押金</span>
                    <span class="notice-des">200元 离店后原路退回</span>
                </div>
                <div class="notice-item">
                    <span class="notice-title">清洁费</span>
                    <span class="notice-des">您将免费享受房东提供的客房清洁服务</span>
                </div>
                <div class="notice-item">
                    <span class="notice-title">发票说明</span>
                    <span class="notice-des">不支持开发票 如果需要请与房东协商</span>
                </div>
                <div class="notice-item">
                    <span class="notice-title">退订规则</span>
                    <span class="notice-des">
                                            <span>提前一天退订将退还您全部费用取消订单或者提前离店（需联系客服）将收取未住房费的50%</span>
                    </span>
                </div>
            </div>
        </div>
        <footer>
            <van-submit-bar :price="15900" button-text="提交订单"/>
        </footer>
    </div>
</template>


<script>
    export default {
        name: "Orders",
        data() {
            return {
                value: 1,
                orders: {
                    names: '',
                    IDcard: '',
                    user_number: 1,
                    phone: '',
                    price: '',
                    enter_time: '',
                    leave_time: ''
                },
                stayhome: null
            }
        },
        methods: {
            onClickLeft() {
                this.$router.back();
            },
        },
        mounted() {

        }
    }
</script>

<style scoped>
    @import "../../style/orders.css";

    * {
        text-align: left;
    }

    .inout-date .van-cell__value {
        position: absolute;
    }

    .van-stepper {
        text-align: right;
    }

    .inout-date {
        height: 2rem;
    }

    .van-cell {
        padding: 10px;
    }

    .van-cell__title {
        font-weight: bold;
    }

    .userinfo {
        height: 2.2rem;
    }

    .userinfo .van-cell__value {
        position: absolute;
        top: 0.7rem;
    }

    .uphone .van-cell__value,
    .sprice .van-cell__value {
        text-align: right;
        font-weight: bold;
    }

    .preferential .van-cell__value {
        text-align: right;
        color: #eb666b;
        font-weight: bold;
    }
</style>
