<template>
    <div class="loading" v-show="isshow">
        <div class="wait"></div>
    </div>
</template>

<script>
    export default {
        name: "loading",
        props:{
            isshow:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background: rgba(0,0,0,.5);
    }
    .wait {
        width: 10px;
        height: 30px;
        background-color: #B3C0D1;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        animation: wait 0.5s linear infinite alternate;
    }

    .wait:before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #B3C0D1;
        position: absolute;
        left: -20px;
        top: 0;
        animation: wait 0.5s linear infinite alternate 0.4s;
    }

    .wait:after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #B3C0D1;
        position: absolute;
        left: 20px;
        top: 0;
        animation: wait 0.5s linear infinite alternate 1s;
    }

    @keyframes wait {
        0% {
            transform: scaleY(1);
        }
        100% {
            transform: scaleY(1.4);
        }
    }
</style>