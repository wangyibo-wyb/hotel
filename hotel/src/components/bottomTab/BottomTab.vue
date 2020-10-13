<template>
    <div class="bottom">
        <ul>
            <li>
                <router-link to="/" :class="[index == 1?'active':'']">
                    <img src="../../assets/house.jpg" alt="">
                    <span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="/list" :class="[index == 2?'active':'']">
                    <img src="../../assets/img/bottom-more.png" alt="">
                    <span>更多</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" :class="[index == 3?'active':'']">
                    <img src="../../assets/eye.jpg" alt=""
                         style="width: 0.48rem;height: 0.29rem;margin-left: -0.24rem;top:0.24rem">
                    <span>视界</span>
                </router-link>
            </li>
            <li>
                <router-link to="/user" :class="[index == 4?'active':'']">
                    <img src="../../assets/people.jpg" alt="">
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BottomTab",
        props:{
            index:{
                type:Number,
                default:1
            }
        }
    }
</script>

<style scoped>
    .bottom{
        width: 100%;
        height: 1.67rem;
        box-shadow: 0 -0.01rem 0.3rem 0 rgba(242,242,242,0.75);
        position: fixed;
        bottom: 0;
        background: #fff;
    }

    .bottom li{
        width: 25%;
        height: 1.67rem;
        float: left;
        position: relative;
        text-align: center;
        margin: 0;
    }

    .bottom a{
        opacity: 0.5;
    }

    a.active{
        opacity: 1;
    }

    .bottom img{
        width: 0.38rem;
        height: 0.38rem;
        position: absolute;
        left: 50%;
        margin-left: -0.19rem;
        top:0.2rem;
    }

    .bottom span{
        font-size: 0.24rem;
        color: rgb(235,102,107);
        display: block;
        margin-top: 45px;
    }
</style>