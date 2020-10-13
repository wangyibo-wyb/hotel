<template>
    <div class="container">
        <el-container class="main-box">
            <el-header>
                <div class="logo"><img src="../../assets/home.png" alt="" style="width: 60px;height: 60px"></div>
                <span style="color: #E9EEF3;font-size: 30px!important;position: absolute;left: 100px;top:10px;">一家民宿</span>
                <span style="color: #E9EEF3;font-size: 20px!important;position: absolute;left: 230px;top:20px;">后台管理中心</span>
                <div class="nav">
                    <el-menu mode="horizontal" style="background: #B3C0D1;">
                        <el-submenu index="1" style="font-size: 20px!important;">
                            <template slot="title">指南</template>
                            <el-menu-item index="1-1">
                                <router-link to="/echarts">数据可视化</router-link>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title" style="font-size: 20px!important;">用户中心</template>
                            <el-menu-item index="2-1">
                                <router-link to="/editpass">修改密码</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-2" style="font-size: 20px!important;">退出登录</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            style="background: #D3DCE6">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>分类管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">
                                    <router-link to="/addcat">添加分类</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-2">
                                    <router-link to="/showcat">查看分类</router-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-s-goods"></i>
                                <span>民宿管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">
                                    <router-link to="/stayhomeadd">添加民宿</router-link>
                                </el-menu-item>
                                <el-menu-item index="2-2">
                                    <router-link to="/showstayhome">查看民宿</router-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Main",
    }
</script>

<style>

    a{
        color: #333333;
    }

    .main-box {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        display: flex;
        justify-content: space-between;

    }

    .nav {
        width: 250px;
        height: 100%;
    }


    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .el-submenu__title{
        font-size: 20px!important;
    }

    .el-menu-item{
        font-size: 20px!important;
    }
</style>