import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import jiaolianList from '../pages/jiaolian/list'
import jiaolianDetail from '../pages/jiaolian/detail'
import jiaolianAdd from '../pages/jiaolian/add'
import kechengleixingList from '../pages/kechengleixing/list'
import kechengleixingDetail from '../pages/kechengleixing/detail'
import kechengleixingAdd from '../pages/kechengleixing/add'
import yujiakechengList from '../pages/yujiakecheng/list'
import yujiakechengDetail from '../pages/yujiakecheng/detail'
import yujiakechengAdd from '../pages/yujiakecheng/add'
import yuyuechaxunList from '../pages/yuyuechaxun/list'
import yuyuechaxunDetail from '../pages/yuyuechaxun/detail'
import yuyuechaxunAdd from '../pages/yuyuechaxun/add'
import tuikechaxunList from '../pages/tuikechaxun/list'
import tuikechaxunDetail from '../pages/tuikechaxun/detail'
import tuikechaxunAdd from '../pages/tuikechaxun/add'
import kehoupingjiaList from '../pages/kehoupingjia/list'
import kehoupingjiaDetail from '../pages/kehoupingjia/detail'
import kehoupingjiaAdd from '../pages/kehoupingjia/add'
import quxiaochaxunList from '../pages/quxiaochaxun/list'
import quxiaochaxunDetail from '../pages/quxiaochaxun/detail'
import quxiaochaxunAdd from '../pages/quxiaochaxun/add'
import jiaoyouquanList from '../pages/jiaoyouquan/list'
import jiaoyouquanDetail from '../pages/jiaoyouquan/detail'
import jiaoyouquanAdd from '../pages/jiaoyouquan/add'
import tixingxinxiList from '../pages/tixingxinxi/list'
import tixingxinxiDetail from '../pages/tixingxinxi/detail'
import tixingxinxiAdd from '../pages/tixingxinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemnoticeList from '../pages/systemnotice/list'
import systemnoticeDetail from '../pages/systemnotice/detail'
import systemnoticeAdd from '../pages/systemnotice/add'
import discussyujiakechengList from '../pages/discussyujiakecheng/list'
import discussyujiakechengDetail from '../pages/discussyujiakecheng/detail'
import discussyujiakechengAdd from '../pages/discussyujiakecheng/add'
import discussnewsList from '../pages/discussnews/list'
import discussnewsDetail from '../pages/discussnews/detail'
import discussnewsAdd from '../pages/discussnews/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'jiaolian',
					component: jiaolianList
				},
				{
					path: 'jiaolianDetail',
					component: jiaolianDetail
				},
				{
					path: 'jiaolianAdd',
					component: jiaolianAdd
				},
				{
					path: 'kechengleixing',
					component: kechengleixingList
				},
				{
					path: 'kechengleixingDetail',
					component: kechengleixingDetail
				},
				{
					path: 'kechengleixingAdd',
					component: kechengleixingAdd
				},
				{
					path: 'yujiakecheng',
					component: yujiakechengList
				},
				{
					path: 'yujiakechengDetail',
					component: yujiakechengDetail
				},
				{
					path: 'yujiakechengAdd',
					component: yujiakechengAdd
				},
				{
					path: 'yuyuechaxun',
					component: yuyuechaxunList
				},
				{
					path: 'yuyuechaxunDetail',
					component: yuyuechaxunDetail
				},
				{
					path: 'yuyuechaxunAdd',
					component: yuyuechaxunAdd
				},
				{
					path: 'tuikechaxun',
					component: tuikechaxunList
				},
				{
					path: 'tuikechaxunDetail',
					component: tuikechaxunDetail
				},
				{
					path: 'tuikechaxunAdd',
					component: tuikechaxunAdd
				},
				{
					path: 'kehoupingjia',
					component: kehoupingjiaList
				},
				{
					path: 'kehoupingjiaDetail',
					component: kehoupingjiaDetail
				},
				{
					path: 'kehoupingjiaAdd',
					component: kehoupingjiaAdd
				},
				{
					path: 'quxiaochaxun',
					component: quxiaochaxunList
				},
				{
					path: 'quxiaochaxunDetail',
					component: quxiaochaxunDetail
				},
				{
					path: 'quxiaochaxunAdd',
					component: quxiaochaxunAdd
				},
				{
					path: 'jiaoyouquan',
					component: jiaoyouquanList
				},
				{
					path: 'jiaoyouquanDetail',
					component: jiaoyouquanDetail
				},
				{
					path: 'jiaoyouquanAdd',
					component: jiaoyouquanAdd
				},
				{
					path: 'tixingxinxi',
					component: tixingxinxiList
				},
				{
					path: 'tixingxinxiDetail',
					component: tixingxinxiDetail
				},
				{
					path: 'tixingxinxiAdd',
					component: tixingxinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemnotice',
					component: systemnoticeList
				},
				{
					path: 'systemnoticeDetail',
					component: systemnoticeDetail
				},
				{
					path: 'systemnoticeAdd',
					component: systemnoticeAdd
				},
				{
					path: 'discussyujiakecheng',
					component: discussyujiakechengList
				},
				{
					path: 'discussyujiakechengDetail',
					component: discussyujiakechengDetail
				},
				{
					path: 'discussyujiakechengAdd',
					component: discussyujiakechengAdd
				},
				{
					path: 'discussnews',
					component: discussnewsList
				},
				{
					path: 'discussnewsDetail',
					component: discussnewsDetail
				},
				{
					path: 'discussnewsAdd',
					component: discussnewsAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
