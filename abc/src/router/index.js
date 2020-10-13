import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from "../views/Login";
import Main from "../views/main/Main";
import Addcat from "../views/main/category/Addcat";
import Showcat from "../views/main/category/Showcat";
import Editcat from "../views/main/category/Editcat";
import Editpass from "../views/main/Editpass";
import Stayhomeadd from "../views/main/stayhome/Stayhomeadd";
import Showstayhome from "../views/main/stayhome/Showstayhome";
import Editstayhome from "../views/main/stayhome/Editstayhome";
import EchartsCon from "../views/main/echarts/Echarts";


let router = new VueRouter({
    routes: [
        {
            path: '/', component: Main, name: 'index',redirect:'echarts',
            meta: {
                auth: true, title: '首页'
            },
            children: [{
                path: 'addcat', component: Addcat, name: 'addcat',
                meta: {
                    auth: true, title: '添加分类'
                }
            },
                {
                    path: 'showcat', component: Showcat, name: 'showcat',
                    meta: {
                        auth: true, title: '查看分类'
                    }
                },
                {
                    path: 'editcat', component: Editcat, name: 'editcat',
                    meta: {
                        auth: true, title: '修改分类'
                    }
                },
                {
                    path: 'editpass', component: Editpass, name: 'editpass',
                    meta: {
                        auth: true, title: '修改密码'
                    }
                },
                {
                    path: 'stayhomeadd', component: Stayhomeadd, name: 'stayhomeadd',
                    meta: {
                        auth: true, title: '添加民宿'
                    }
                },
                {
                    path: 'showstayhome', component: Showstayhome, name: 'showstayhome',
                    meta: {
                        auth: true, title: '查看民宿'
                    }
                },
                {
                    path: 'editstayhome/:id', component: Editstayhome, name: 'editstayhome',
                    meta: {
                        auth: true, title: '修改民宿'
                    }
                },
                {
                    path: 'echarts', component: EchartsCon, name: 'echarts',
                    meta: {
                        auth: true, title: '数据可视化'
                    }
                },
            ]
        },
        {
            path: '/login', component: Login, name: 'login',
            meta: {
                auth: false, title: '登录'
            }
        },

    ]
})

router.beforeEach((to, from, next) => {
    let title = to.meta.title || '首页';
    document.title = title;
    if (to.meta.auth) {
        let token = sessionStorage.getItem('token');
        token = token && token.trim();
        if (token) {
            next();
        } else {
            next({name: 'login', query: {redirect: to.name}});
        }
    } else {
        next();
    }
});

export default router;