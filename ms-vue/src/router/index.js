import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import VueRouter from "vue-router";


Vue.use(VueRouter)
let routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    hidden: true
  }, {
    // 首页
    path: '/main',
    name: '',
    component: Main,
    hidden: true
  }, {
    path: '/',
    component: Main,
    name: '系统管理',
    iconCls: 'el-icon-user-solid',
    children: [
      {
        path: '/User',
        name: '用户管理',
        iconCls: 'el-icon-user-solid',
        component: () => import('../views/buss/User')
      }, {
        path: '/Role',
        name: '角色管理',
        iconCls: 'el-icon-user',
        component: () => import('../views/buss/Role')
      }
    ]
  },{
    path: '/',
    component: Main,
    name: '日志管理',
    iconCls: 'el-icon-user-solid',
    children: [
      {
        path: '/User1',
        name: '日志管理1',
        iconCls: 'a fa-address-card',
        component: () => import('../views/buss/log')
      }
    ]
  },{
    path: '/',
    component: Main,
    name: '代码生成管理',
    iconCls: 'el-icon-user-solid',
    children: [
      {
        path: '/User1',
        name: '代码生成配置',
        iconCls: 'a fa-address-card',
        component: () => import('../views/buss/log')
      },{
        path: '/User2',
        name: '代码生成',
        iconCls: 'a fa-address-card',
        component: () => import('../views/buss/log')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
});
export default router;

