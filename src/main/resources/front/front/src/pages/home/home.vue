<template>
<div class="home-preview" :style='{"margin":"0px auto","flexWrap":"wrap","flexDirection":"column","background":"none","display":"flex","width":"100%","justifyContent":"center"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"30px 7%","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"0 0 0px","background":"url(http://codegen.caihongy.cn/20230920/092c7d955a9546ed9c0e247c8b684684.jpg) no-repeat center top / 100% 100%,#fff","width":"100%","position":"relative","height":"auto","order":"2"}'>
		  <div :style='{"margin":"10px 0 0","color":"#1abc9e","textAlign":"left","background":"none","width":"100%","lineHeight":"56px","fontSize":"28px","fontWeight":"600"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"width":"100%","margin":"0 0 30px","lineHeight":"1.5","fontSize":"16px","color":"#888","textAlign":"left"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0px","top":"0","flexWrap":"wrap","display":"flex","width":"48%","position":"absolute","right":"0","height":"100%"}'>
		    <img :style='{"width":"100%","margin":"0 0px","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"0px","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","background":"none","width":"48%","fontSize":"16px","textIndent":"2em","height":"320px"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"top":"0","left":"52%","background":"url(http://codegen.caihongy.cn/20230920/8a35b5134ee644b8a9a87ea99a0f1490.png) no-repeat","display":"block","width":"200px","position":"absolute","height":"100%"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","cursor":"pointer","margin":"30px 0 0","textAlign":"center","background":"#1abc9e","display":"block","width":"150px","lineHeight":"40px"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"14px"}'>了解更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"0","margin":"0 0 10px","background":"url(),#fff","order":"5"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","margin":"40px auto 10px","lineHeight":"50px","textAlign":"center","background":"none"}'>
			<span :style='{"color":"#333","fontSize":"32px","lineHeight":"40px"}'>公告信息</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
		

		<div v-if="newsList.length" class="list list12 index-pv1" :style='{"padding":"0px 7%","color":"#fff","background":"none","display":"flex","width":"100%","fontSize":"14px","justifyContent":"space-between","height":"auto"}'>
		  <div class="left" :style='{"width":"49%","padding":"20px","position":"relative","background":"#fff","height":"auto"}'>
		    <div class="top" :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}'>
			  <template v-for="(item,index) in newsList">
		      <div v-if="index < 2" class="list-item animation-box" :style='{"cursor":"pointer","width":"49%","position":"relative","height":"340px"}' @click="toDetail('newsDetail', item)">
		        <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + item.picture">
		        <div :style='{"width":"100%","padding":"0 0 6px","position":"absolute","left":"0","bottom":"0","background":"rgba(0,0,0,.3)"}'>
		          <div :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","width":"100%","lineHeight":"44px","fontSize":"16px","textOverflow":"ellipsis"}' class="title">{{item.title}}</div>
		          <div :style='{"padding":"0 10px"}'>
		            <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		          </div>
		        </div>
		      </div>
			  </template>
		    </div>
		    <div v-if="newsList.length > 2" class="list" :style='{"width":"100%","padding":"5px 10px","background":"none","height":"auto"}'>
		      <template v-for="(item,index) in newsList">
			  <div class="item" v-if="index > 1 && index < 6" @click="toDetail('newsDetail', item)">
		        <div :style='{"margin":"-2px 0 0","top":"50%","borderRadius":"100%","left":"0","background":"red","width":"4px","position":"absolute","height":"4px"}'></div>
		        <div :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"40px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.title}}</div>
		      </div>
			  </template>
		    </div>
		  </div>
		  <div v-if="newsList.length > 6" class="right" :style='{"alignContent":"start","padding":"20px 20px 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"49%","justifyContent":"space-between","height":"auto"}'>
			<template v-for="(item,index) in newsList">
		    <div v-if="index > 5" class="list-item animation-box" :style='{"cursor":"pointer","width":"49%","margin":"0 0 20px","position":"relative","height":"auto"}' @click="toDetail('newsDetail', item)">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' :src="baseUrl + item.picture">
		      <div :style='{"width":"100%","padding":"0 0 6px","position":"absolute","left":"0","bottom":"0","background":"rgba(0,0,0,.3)"}'>
		        <div :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","width":"100%","lineHeight":"44px","fontSize":"16px","textOverflow":"ellipsis"}' class="title">{{item.title}}</div>
		        <div :style='{"padding":"0 10px"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		        </div>
		      </div>
		    </div>
			</template>
		  </div>
		</div>










		<div @click="moreBtn('news')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"40px auto","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
			<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
			<i :style='{"color":"#333","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->



<!-- 特价商品 -->
<div id="animate_listyujiakecheng" class="lists animate__animated" :style='{"margin":"30px 0 20px","background":"#fff","order":"1"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"40px","textAlign":"center","background":"none"}'>
	  <span :style='{"fontSize":"32px","lineHeight":"40px","color":"#333","font":"\"宋体\""}'>瑜伽课程展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="yujiakechengList.length" class="list list12 index-pv1 list12yujiakecheng" :style='{"width":"100%","padding":"10px 7%","background":"#fff","height":"auto"}'>
	  <div class="tab" :style='{"width":"100%","margin":"0 0 20px","alignItems":"center","justifyContent":"center","display":"flex","height":"auto"}'>
		<template v-for="item,index in listList12yujiakecheng">
	    <div v-if="index < 6" @click="listIndexClick12(index + 1, 'yujiakecheng')" class="item"  :class="index + 1 == listIndex12yujiakecheng ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"34px","margin":"5px 5px 0 0","objectFit":"cover","display":"block","height":"34px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px"}'>{{item[listColumn12yujiakecheng]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('yujiakecheng')">
		  <div :style='{"color":"#999","fontSize":"14px","fontWeight":"500"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"#999","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"margin":"40px 0 0","overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","justifyContent":"space-between","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"23%","margin":"0 0 30px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in yujiakechengList" :key="index" @click="toDetail('yujiakechengDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.kechengmingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.kechengleixing}}</div>
	    </div>
	  </div>
	</div>



	
	
	<div @click="moreBtn('yujiakecheng')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"30px auto 10px","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"14px"}' class="icon iconfont icon-jinru"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listjiaoyouquan" class="lists animate__animated" :style='{"margin":"30px 0 20px","background":"#fff","order":"1"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"40px","textAlign":"center","background":"none"}'>
	  <span :style='{"fontSize":"32px","lineHeight":"40px","color":"#333","font":"\"宋体\""}'>交友圈展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="jiaoyouquanList.length" class="list list12 index-pv1 list12jiaoyouquan" :style='{"width":"100%","padding":"10px 7%","background":"#fff","height":"auto"}'>
	  <div class="tab" :style='{"width":"100%","margin":"0 0 20px","alignItems":"center","justifyContent":"center","display":"flex","height":"auto"}'>
		<template v-for="item,index in listList12jiaoyouquan">
	    <div v-if="index < 6" @click="listIndexClick12(index + 1, 'jiaoyouquan')" class="item"  :class="index + 1 == listIndex12jiaoyouquan ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"34px","margin":"5px 5px 0 0","objectFit":"cover","display":"block","height":"34px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px"}'>{{item[listColumn12jiaoyouquan]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('jiaoyouquan')">
		  <div :style='{"color":"#999","fontSize":"14px","fontWeight":"500"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"#999","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"margin":"40px 0 0","overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","justifyContent":"space-between","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"23%","margin":"0 0 30px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in jiaoyouquanList" :key="index" @click="toDetail('jiaoyouquanDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fenxiangfengmian)" :src="item.fenxiangfengmian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fenxiangfengmian?item.fenxiangfengmian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.fenxiangbiaoti}}</div>
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.kechengleixing}}</div>
	    </div>
	  </div>
	</div>



	
	
	<div @click="moreBtn('jiaoyouquan')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"30px auto 10px","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"14px"}' class="icon iconfont icon-jinru"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        newsList: [],

        yujiakechengList: [],
        jiaoyouquanList: [],



		listIndex12yujiakecheng: 0,
		listList12yujiakecheng: [],
		listColumn12yujiakecheng: '',
		listIndex12jiaoyouquan: 0,
		listList12jiaoyouquan: [],
		listColumn12jiaoyouquan: '',

      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getList();
		this.yujiakechengListCate()
		this.jiaoyouquanListCate()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {




































































			setTimeout(()=>{


































			},250)
		},

		yujiakechengListCate(){
			this.$http.get('kechengleixing/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.listList12yujiakecheng = res.data.data.list
			  }
			});
			this.listColumn12yujiakecheng = 'kechengleixing'
		},
		jiaoyouquanListCate(){
			this.$http.get('kechengleixing/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.listList12jiaoyouquan = res.data.data.list
			  }
			});
			this.listColumn12jiaoyouquan = 'kechengleixing'
		},
		listIndexClick12(index, name) {
			this['listIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.lists .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.lists .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__fadeInDown'},
				{id:'about',css:'animate__fadeInRight'},
				{id:'system',css:'animate__fadeInRight'},
				{id:'animate_listyujiakecheng',css:'animate__fadeInLeft'},
				{id:'animate_listjiaoyouquan',css:'animate__fadeInLeft'},
				{id:'animate_newsnews',css:'animate__fadeInLeft'},
				{id:'msgs',css:'animate__fadeInDown'},
				{id:'friendly',css:'animate__fadeInUp'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 10,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
			
			data = {
				page: 1,
				limit: 8,
			}
			if(this.listIndex12yujiakecheng != 0){
				data.kechengleixing = this.listList12yujiakecheng[this.listIndex12yujiakecheng - 1].kechengleixing
			}
			this.$http.get('yujiakecheng/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.yujiakechengList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 8,
			}
			if(this.listIndex12jiaoyouquan != 0){
				data.kechengleixing = this.listList12jiaoyouquan[this.listIndex12jiaoyouquan - 1].kechengleixing
			}
			this.$http.get('jiaoyouquan/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.jiaoyouquanList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 36px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 480px;
			font-size: 14px;
			height: 36px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	
	.home-preview .news .list12 .left .list .item {
				cursor: pointer;
				padding: 0 0 0 10px;
				width: 100%;
				border-color: #ddd;
				border-width: 0 0 1px;
				position: relative;
				border-style: dashed;
				transition: 0.3s;
				height: auto;
			}
	.home-preview .news .list12 .left .list .item:hover {
				transform: translate3d(10px, 0px, 0px);
			}










	.home-preview .lists .list12 .tab .item {
				cursor: pointer;
				border: 1px solid #eee;
				padding: 0 20px;
				margin: 0 10px;
				color: #333;
				background: #fff;
				width: auto;
				font-size: 16px;
				line-height: 36px;
				height: auto;
			}
	
	.home-preview .lists .list12 .tab .item:hover {
				color: #fff;
				background: #1abc9e;
				border-color: #1abc9e;
				border-width: 1px;
				border-style: solid;
			}
	
	.home-preview .lists .list12 .tab .item.active {
				color: #fff;
				background: #1abc9e;
				border-color: #1abc9e;
				border-width: 1px;
				border-style: solid;
			}
	
	.home-preview .lists .list12 .tab .more {
				cursor: pointer;
				padding: 5px 10px;
				margin: 0 10px;
				color: #666;
				background: #fff;
				display: flex;
				line-height: 36px;
				align-items: center;
				height: 36px;
			}
	
	.home-preview .lists .list12 .tab .more:hover {
				color: red;
			}
	
	.home-preview .lists .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}
</style>
