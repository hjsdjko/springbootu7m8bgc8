<template>
	<div :style='{"padding":"0 7%","margin":"10px auto","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative","justifyContent":"space-between"}'>
	<div :style='{"width":"100%","overflow":"hidden","flexWrap":"wrap","background":"#fff","justifyContent":"space-between","display":"flex"}'>
		<div :style='{"margin":"10px 0 0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230921/eb4b56c7d55142c4b9339e032022bfb5.png) repeat-x center bottom","display":"block","width":"calc(100% - 0px)","lineHeight":"56px","height":"66px"}'>
			<div :style='{"margin":"0 auto","color":"#333","textAlign":"center","background":"none","display":"inline-block","width":"auto","fontSize":"20px","fontWeight":"500"}'>公告信息</div>
		</div>
		<div :style='{"minHeight":"360px","width":"calc(100% - 0px)","padding":"20px","position":"relative","background":"none","order":"2"}'>
			<div  :style='{"margin":"0 0 4px","lineHeight":"40px","fontSize":"24px","color":"#333","textAlign":"center"}'>{{detail.title}}</div>
			
			<div :style='{"alignItems":"center","color":"#999","background":"none","display":"flex","width":"100%","fontSize":"14px","justifyContent":"center"}'>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>发布时间：{{detail.addtime}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.name}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.thumbsupnum}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.storeupnum}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.clicknum}}</span>
			  </div>
			</div>
			<div class="operate" :style='{"padding":"10px 20px","alignItems":"center","color":"#666","display":"flex","width":"100%","fontSize":"14px","justifyContent":"flex-end"}'>
				<div @click="zanClick" :style='{"padding":"0 15px","alignItems":"center","justifyContent":"center","display":"flex"}'>
					<span class="icon iconfont icon-guanzhu-zhihui" :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"inherit","color":"inherit"}'></span>
					<span :style='{"color":"inherit","lineHeight":"40px","fontSize":"inherit"}'>{{zanType?'取消赞':'点赞'}}</span>
				</div>
				<div @click="collectClick" :style='{"padding":"0 15px","alignItems":"center","justifyContent":"center","display":"flex"}'>
					<span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"inherit","color":"inherit"}'></span>
					<span :style='{"color":"inherit","lineHeight":"40px","fontSize":"inherit"}'>{{collectType?'取消收藏':'收藏'}}</span>
				</div>
			</div>
			
			<div :style='{"width":"100%","fontSize":"14px","lineHeight":"1.5","color":"#666","textIndent":"2em","height":"auto"}' class="content-detail" v-html="detail.content"></div>
		</div>
		<!-- option -->
		<div :style='{"width":"calc(100% - 0px)","padding":"0 20px","justifyContent":"space-between","display":"flex","height":"auto","order":"10"}'>
		  <div :style='{"color":"#666","lineHeight":"40px","fontSize":"14px"}' @click="prepDetailClick">上一篇：prev</div>
		  <div :style='{"color":"#666","lineHeight":"40px","fontSize":"14px"}' @click="nextDetailClick">下一篇：next</div>
		</div>
		<el-tabs class="detail" :style='{"border":"0px solid #eee","width":"100%","boxShadow":"0 0px 0px 0 rgba(0, 0, 0, .1)","margin":"20px 0 0","background":"#fff","order":"12"}' v-model="activeName" type="border-card">
			<el-tab-pane label="评论" name="discuss">
				<el-form class="add comment" :style='{"padding":"0px","boxShadow":"none","margin":"10px 0 20px"}' :model="form" :rules="rules" ref="form">
					<el-form-item class="item" :style='{"width":"100%","background":"none","display":"flex","height":"auto"}' label="评论" prop="content">
						<editor
						    :style='{"minHeight":"250px","border":"0px solid #eee","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","outline":"none","color":"#333","borderRadius":"4px","width":"100%","lineHeight":"32px","fontSize":"14px","minWidth":"1000px"}'
						    v-model="form.content" 
						    class="editor" 
						    action="file/upload">
						</editor>
					</el-form-item>
					<el-form-item class="btn" :style='{"width":"100%","padding":"0 0 0 80px","margin":"10px 0 0","height":"auto"}'>
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0px","background":"#1abc9e","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="submitForm('form')">立即提交</el-button>
						<el-button :style='{"border":"1px solid #eee","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"0px","background":"#fcfcfc","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="resetForm('form')">重置</el-button>
					</el-form-item>
				</el-form>
				
				<div v-if="infoList.length" :style='{"padding":"0px"}' class="comment">
					<div :style='{"padding":"8px 0","margin":"0 0 20px","borderColor":"#ddd","alignItems":"center","borderWidth":"0 0 1px 0","background":"none","width":"100%","borderStyle":"dashed","height":"auto"}' v-for="item in infoList" :key="item.id" @mouseenter="discussEnter(item.id)"
						@mouseleave="discussLeave">
						<div class="user" :style='{"width":"100%","alignItems":"center","display":"flex","height":"auto"}'>
							<el-image v-if="item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="baseUrl + item.avatarurl"></el-image>
							<el-image v-if="!item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="require('@/assets/touxiang.png')"></el-image>
							<div :style='{"color":"#333","fontSize":"16px"}' class="name">{{item.nickname}}</div>
						</div>
						<div :style='{"padding":"8px","margin":"10px 0px 0px","color":"#333","borderRadius":"4px","background":"none","wordWrap":"break-word","lineHeight":"1.5","fontSize":"14px","textIndent":"2em"}' class="content-block-ask">
							<div v-html="item.content"></div>
							<div style="width: 100%;display:flex;justify-content: flex-end;height:30px;align-items:center">
								<el-button type="text" v-if="showIndex==item.id&&userid==item.userid" @click="discussDel(item.id)">删除</el-button>
							</div>
						</div>
						<div :style='{"padding":"8px","margin":"10px 0px 0px","color":"#333","borderRadius":"4px","background":"none","wordWrap":"break-word","lineHeight":"1.5","fontSize":"14px","textIndent":"2em"}' class="content-block-reply" v-if="item.reply">
							回复：<span v-html="item.reply"></span>
						</div>
					</div>
				</div>
				<el-pagination
				  background
				  id="pagination" class="pagination"
				  :pager-count="7"
				  :page-size="pageSize"
				  :page-sizes="pageSizes"
				  prev-text="<"
				  next-text=">"
				  :hide-on-single-page="true"
				  :layout='["total","prev","pager","next","sizes","jumper"].join()'
				  :total="total"
				  :style='{"padding":"5px 7%","margin":"20px auto","color":"#333","textAlign":"center","width":"100%","clear":"both","lineHeight":"40px","fontWeight":"500","height":"40px","order":"50"}'
				  @current-change="curChange"
				  @prev-click="prevClick"
				  @next-click="nextClick"
				></el-pagination>
			</el-tab-pane>
		</el-tabs>

		<!-- 推荐文章 -->
		<div class="news" :style='{"width":"100%","margin":"30px 0 0","textAlign":"center","background":"#fff","height":"auto","order":"11"}'>
		  <div :style='{"padding":"0 20px 0px","color":"#fff","textAlign":"center","background":"#1abc9e","clipPath":"polygon(100% 65%, 93% 100%, 0% 100%, 0% 0%, 100% 0%)","display":"inline-block","width":"auto","lineHeight":"44px","fontSize":"24px","minWidth":"200px"}'>推荐文章</div>
		  <div :style='{"padding":"20px","margin":"10px 0 0","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="item in recommendList" :key="item.id" :style='{"width":"23%","background":"#fff","height":"auto"}' @click="toDetail(item.id)">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"220px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#666","textAlign":"center","width":"100%","lineHeight":"40px","fontSize":"14px","textOverflow":"ellipsis"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 10px","lineHeight":"24px","fontSize":"14px","color":"#999","textAlign":"right"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				id: 0,
				detail: {},
				zanType: false,
				zanForm: {},
				collectType:false,
				collectForm: {},
				baseUrl:'',
				total: 1,
				pageSize: 5,
				pageSizes: [10,20,30,50],
				totalPage: 1,
				showIndex: -1,
				infoList: [],
				rules: {
					content: [
						{ required: true, message: '请输入内容', trigger: 'blur' }
					],
				},
				userid: localStorage.getItem('userid'),
				form: {
					content: '',
					userid: localStorage.getItem('userid'),
					nickname: localStorage.getItem('username'),
					avatarurl: '',
				},
				activeName:'discuss',
				recommendList: [],
				categoryList: [],
				currentIndex: 0,
				allList: []
			}
		},
		created() {
			this.id = this.$route.query.id
			this.baseUrl = this.$config.baseUrl;
			this.getCategoryList()
			this.getDetail()
			this.getNewsList()
			this.getRecommendList()
		},
		watch:{
			$route(newValue) {
				this.id = this.$route.query.id
			    this.getDetail()
			}
		},
		methods: {
			getNewsList() {
				let params = {page:1, limit: 100,sort:'addtime',order:'desc'};
				this.$http.get('news/list', {params: params}).then(res => {
					if (res.data.code == 0) {
						for(let x in res.data.data.list){
							if(res.data.data.list[x].id == this.id){
								this.currentIndex = Number(x)
								break
							}
						}
						this.allList = res.data.data.list
					}
				});
			},
			// 上一篇
			prepDetailClick(){
				if(this.currentIndex == 0){
					this.$message.error('已经是第一篇了')
					return false
				}
				this.currentIndex--
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			// 下一篇
			nextDetailClick(){
				if(this.currentIndex == this.allList.length - 1){
					this.$message.error('已经是最后一篇了')
					return false
				}
				this.currentIndex++
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data;
					}
				});
			},
			// 获取推荐列表
			getRecommendList(){
				let url = 'news/autoSort'
				if(localStorage.getItem('Token')){
					url = 'news/autoSort2'
				}
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get(url, {params: params}).then(res => {
					if (res.data.code == 0) {
						this.recommendList = res.data.data.list;
					}
				});
			},
			// 跳转详情
			toDetail(id){
				this.$router.push({path: '/index/newsDetail', query: {id: id}});
			},
			getDetail(){
				this.$http.get(`news/detail/${this.id}`,{}).then(res=>{
					if(res.data&&res.data.code==0){
						this.detail = res.data.data
						window.scrollTo(0, 100)
						this.getZan()
						this.getCollect()
						this.getDiscussList(1);
					}
				})
			},
			getDiscussList(page) {
				this.$http.get('discussnews/list', {params: {page, limit: this.pageSize, refid: this.detail.id}}).then(res => {
					if (res.data.code == 0) {
						this.infoList = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = res.data.data.pageSize;this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
						this.totalPage = res.data.data.totalPage;
					}
				});
			},
			discussEnter(index){
				this.showIndex = index
			},
			discussLeave(){
				this.showIndex = -1
			},
			discussDel(id){
				this.$confirm('是否删除此评论？')
					.then(_ => {
						this.$http.post('discussnews/delete',[id]).then(res=>{
							if(res.data&&res.data.code==0){
								this.$message({
									type: 'success',
									message: '删除成功!',
									duration: 1500,
									onClose: () => {
										this.getDiscussList(1);
									}
								});
							}
						})
					}).catch(_ => {});
			},
			submitForm(formName) {
				let sensitiveWords = "";
				let sensitiveWordsArr = [];
				if(sensitiveWords) {
					sensitiveWordsArr = sensitiveWords.split(",");
				}
				for(var i=0; i<sensitiveWordsArr.length; i++){
					//全局替换
					var reg = new RegExp(sensitiveWordsArr[i],"g");
					//判断内容中是否包括敏感词
					if (this.form.content.indexOf(sensitiveWordsArr[i]) > -1) {
						// 将敏感词替换为 **
						this.form.content = this.form.content.replace(reg,"**");
					}
				}
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.form.refid = this.detail.id;
						this.form.avatarurl = localStorage.getItem('headportrait')?localStorage.getItem('headportrait'):'';
						this.$http.post('discussnews/add', this.form).then(res => {
							if (res.data.code == 0) {
								this.form.content = '';
								this.getDiscussList(1);
								this.$message({
									type: 'success',
									message: '评论成功!',
									duration: 1500,
								});
							}
						});
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			curChange(page) {
				this.getDiscussList(page);
			},
			prevClick(page) {
				this.getDiscussList(page);
			},
			nextClick(page) {
				this.getDiscussList(page);
			},
			getZan() {
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 21,
						userid: localStorage.getItem('userid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.zanType = true
							this.zanForm = res.data.data.list[0]
						}else{
							this.zanType = false
						}
					}
				})
			},
			getCollect(){
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 1,
						userid: localStorage.getItem('userid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.collectType = true
							this.collectForm = res.data.data.list[0]
						}else{
							this.collectType = false
						}
					}
				})
			},
			zanClick() {
				if(this.zanType){
					this.$http.post('storeup/delete', [this.zanForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.thumbsupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 21,
						tablename: 'news',
						userid: localStorage.getItem('userid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('点赞成功')
							this.detail.thumbsupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}
			},
			collectClick(){
				if(this.collectType){
					this.$http.post('storeup/delete', [this.collectForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.storeupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getCollect()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 1,
						tablename: 'news',
						userid: localStorage.getItem('userid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.detail.storeupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.$message.success('收藏成功')
							this.getCollect()
						}
					})
				}
			},
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.section {
		width: 900px;
		margin: 0 auto;
	}
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	.section-content {
		margin-top: 30px;
	}
	.content-title {
		text-align: center;
		font-size: 22px;
		font-weight: bold;
	}
	.content-sub-title {
		text-align: center;
		margin-top: 20px;
		color: #888888;
		font-size: 14px;
	}
	.operate{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
	}
</style>