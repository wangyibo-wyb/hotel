<template>
    <div>
        <div class="header">
            <div class="back">
                <router-link to="/user">
                    <van-image :src="icon.back"/>
                </router-link>
            </div>
            <div class="title">
                全部订单
            </div>
            <div class="search">
                <input type="text" placeholder=" 关键词 名称 地点">
                <img src="../../assets/imgs/search.png" alt="">
            </div>
            <div class="search-btn">
                <ul>
                    <li>
                        <div class="btn active">
                            <div class="circle"></div>
                            全部
                        </div>
                    </li>
                    <li>
                        <div class="btn">
                            <div class="circle"></div>
                            待付
                        </div>
                    </li>
                    <li>
                        <div class="btn">
                            <div class="circle"></div>
                            已付
                        </div>
                    </li>
                    <li>
                        <div class="btn">
                            <div class="circle"></div>
                            退款
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="list">
            <ul>
                <li>
                    <div class="item">
                        <div class="item-img">
                            <img src="../../assets/imgs/list1.png" alt="">
                        </div>
                        <div class="time">
                            <span class="date">4.19</span>
                            <span class="week">SUN</span>
                            <div class="arrow">
                                <img src="../../assets/imgs/arrow.png" alt="">
                            </div>
                            <span class="date" style="left: 2.86rem;">4.20</span>
                            <span class="week" style="left: 4.02rem;">SUN</span>
                            <span class="status">待付款</span>
                        </div>
                        <div class="info">
                            <span class="stname">森岚民宿</span>
                            <span class="RMB">RMB</span>
                            <span class="price">158.00</span>
                            <div class="line"></div>
                            <div class="cancelbtn">
                                <span>取消订单</span>
                            </div>
                            <div class="enterbtn">
                                <span>立即付款</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item">
                        <div class="item-img">
                            <img src="../../assets/imgs/list2.png" alt="">
                        </div>
                        <div class="time">
                            <span class="date">3.15</span>
                            <span class="week">SUN</span>
                            <div class="arrow">
                                <img src="../../assets/imgs/arrow.png" alt="">
                            </div>
                            <span class="date" style="left: 2.86rem;">3.17</span>
                            <span class="week" style="left: 4.02rem;">SUN</span>
                            <span class="status">已付款</span>
                        </div>
                        <div class="info">
                            <span class="stname">隐海小院</span>
                            <span class="RMB">RMB</span>
                            <span class="price">285.00</span>
                            <div class="line"></div>
                            <div class="cancelbtn">
                                <span>取消订单</span>
                            </div>
                            <div class="enterbtn">
                                <span>立即付款</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item">
                        <div class="item-img">
                            <img src="../../assets/imgs/list3.png" alt="">
                        </div>
                        <div class="time">
                            <span class="date">2.16</span>
                            <span class="week">SUN</span>
                            <div class="arrow">
                                <img src="../../assets/imgs/arrow.png" alt="">
                            </div>
                            <span class="date" style="left: 2.86rem;">2.17</span>
                            <span class="week" style="left: 4.02rem;">SUN</span>
                            <span class="status">已付款</span>
                        </div>
                        <div class="info">
                            <span class="stname">我和猫的故事</span>
                            <span class="RMB">RMB</span>
                            <span class="price">195.00</span>
                            <div class="line"></div>
                            <div class="cancelbtn">
                                <span>取消订单</span>
                            </div>
                            <div class="enterbtn">
                                <span>立即付款</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import back from '@/assets/imgs/back.png';

    export default {
        name: "Order",
        data() {
            return {
                icon: {back}
            }
        },
        methods: {
            back() {
                console.log(1);
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    @import "../../style/order.css";
</style>