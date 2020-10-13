import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import('../views/index/index'),
    meta:{title:'一家民宿'}
  },
  {
    path: '/province',
    name: 'Province',
    component: ()=>import('../views/province/Province'),
    meta:{title:'选择省份'}
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: ()=>import('../views/calendar/Calendar'),
    meta:{title:'选择日期'}
  },
  {
    path: '/detail',
    name: 'Detail',
    component: ()=>import('../views/detail/Detail'),
    meta:{title:'民宿详情'}
  },
  {
    path: '/detailscenic',
    name: 'Detailscenic',
    component: ()=>import('../views/detail/DetailScenic'),
    meta:{title:'景点详情'}
  },
  {
    path: '/list',
    name: 'list',
    component: ()=>import('../views/list/List'),
    meta:{title:'更多'}
  },
  {
    path: '/user',
    name: 'user',
    component: ()=>import('../views/user/User'),
    meta:{title:'个人中心',auth:true}
  },
  {
    path: '/order',
    name: 'order',
    component: ()=>import('../views/order/Order'),
    meta:{title:'订单',auth:true}
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/login/Login'),
    meta:{title:'登录'}
  },
  {
    path: '/reg',
    name: 'reg',
    component: ()=>import('../views/login/Reg'),
    meta:{title:'注册'}
  },
  {
    path: '/collection',
    name: 'collection',
    component: ()=>import('../views/collection/Collection'),
    meta:{title:'我的收藏',auth:true}
  },
  {
    path: '/orders',
    name: 'orders',
    component: ()=>import('../views/order/Orders'),
    meta:{title:'立即预约',auth:true}
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  let {title,auth} = to.meta;
  document.title = title || '一家民宿';
  if(auth){
    let token = sessionStorage.getItem('token');
    if(token){
      next();
    }else{
      next({name:'login',query:{redirect:to.name}})
    }
  }else {
    next();
  }
})

export default router
