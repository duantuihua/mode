// 配置路由
// 1. 导包
import Vue from 'vue';
import VueRouter from 'vue-router';

// 2.注册路由
Vue.use(VueRouter);

// 3 导入路由组件
import index from '../views/index/index';
import login from '../views/login/login';




// 解决同一路由第二次访问会报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 4. 创建router 实例
const router = new VueRouter({
    // 5. 定义路由
    routes: [
        { path: '/index', component: index },
        { path: '/login', component: login },
    ]
})

// 6.输入路由实例
export default router;