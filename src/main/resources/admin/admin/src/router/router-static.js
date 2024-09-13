import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import jiaoyouquan from '@/views/modules/jiaoyouquan/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import tixingxinxi from '@/views/modules/tixingxinxi/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import systemnotice from '@/views/modules/systemnotice/list'
    import kechengleixing from '@/views/modules/kechengleixing/list'
    import quxiaochaxun from '@/views/modules/quxiaochaxun/list'
    import yuyuechaxun from '@/views/modules/yuyuechaxun/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussnews from '@/views/modules/discussnews/list'
    import kehoupingjia from '@/views/modules/kehoupingjia/list'
    import discussyujiakecheng from '@/views/modules/discussyujiakecheng/list'
    import yujiakecheng from '@/views/modules/yujiakecheng/list'
    import tuikechaxun from '@/views/modules/tuikechaxun/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/jiaoyouquan',
        name: '交友圈',
        component: jiaoyouquan
      }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/tixingxinxi',
        name: '提醒信息',
        component: tixingxinxi
      }
      ,{
	path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
      ,{
	path: '/systemnotice',
        name: '系统公告',
        component: systemnotice
      }
      ,{
	path: '/kechengleixing',
        name: '课程类型',
        component: kechengleixing
      }
      ,{
	path: '/quxiaochaxun',
        name: '取消查询',
        component: quxiaochaxun
      }
      ,{
	path: '/yuyuechaxun',
        name: '预约查询',
        component: yuyuechaxun
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussnews',
        name: '公告信息',
        component: discussnews
      }
      ,{
	path: '/kehoupingjia',
        name: '课后评价',
        component: kehoupingjia
      }
      ,{
	path: '/discussyujiakecheng',
        name: '瑜伽课程评论',
        component: discussyujiakecheng
      }
      ,{
	path: '/yujiakecheng',
        name: '瑜伽课程',
        component: yujiakecheng
      }
      ,{
	path: '/tuikechaxun',
        name: '退课查询',
        component: tuikechaxun
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
