<template>
  <div>
    <div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230930/02567f8bbf29475095a68adeb32aa995.jpg)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
      <el-form :style='{"border":"0px solid #f6f6f6","minHeight":"620px","padding":"30px 5% 30px 45%","margin":"50px auto 50px","borderRadius":"0px","textAlign":"center","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230930/f52d5a109d7248d69a33749b059f901d.jpg) no-repeat left center / 50% 101%,#fff","display":"flex","width":"75%","fontSize":"14px","height":"auto"}'>
        <div v-if="true" :style='{"padding":"0px","margin":"0px auto 10px","borderColor":"#ddd","color":"#57759b","textAlign":"center","display":"inline-block","background":"none","borderWidth":"0px","width":"100%","lineHeight":"40px","fontSize":"24px","borderStyle":"solid","fontWeight":"600"}' class="title-container">瑜伽体验课预约系统登录</div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 20px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#666","textAlign":"right","left":"-150px","width":"150px","lineHeight":"44px","fontSize":"inherit","position":"absolute"}'>用户名：</div>
          <input :style='{"padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .3)","borderColor":"#62779c","color":"#666","outline":"0px solid #eee","outlineOffset":"0px","borderRadius":"0px","background":"#fff","borderWidth":"0 0 2px","width":"100%","fontSize":"inherit","borderStyle":"solid","height":"50px"}' placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username">
        </div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 20px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#666","textAlign":"right","left":"-150px","width":"150px","lineHeight":"44px","fontSize":"inherit","position":"absolute"}'>密码：</div>
          <input :style='{"padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .3)","borderColor":"#62779c","color":"#666","outline":"0px solid #eee","outlineOffset":"0px","borderRadius":"0px","background":"#fff","borderWidth":"0 0 2px","width":"100%","fontSize":"inherit","borderStyle":"solid","height":"50px"}' placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password">
        </div>

        <div :style='{"width":"100%","margin":"20px auto 0","fontSize":"inherit","textAlign":"left"}' v-if="roles.length>1" prop="loginInRole" class="list-type">
          <el-radio v-for="item in roles" v-bind:key="item.roleName" v-model="rulesForm.role" :label="item.roleName">{{item.roleName}}</el-radio>
        </div>

		<div v-if="flag" class="mask" style="position: fixed;z-index: 998;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0,0,0,.5);"></div>
		<!-- option1 -->
		<div v-if="flag" class="box option1" :style='{"padding":"0 24px 24px","transform":"translate3d(-50%,-50%,0)","top":"50%","borderRadius":"20px","left":"50%","background":"#fff","position":"fixed","zIndex":999}'>
		  <span @click="flag = !flag" :style='{"cursor":"pointer","padding":"10px","top":"0","fontSize":"20px","position":"absolute","right":"0","zIndex":1}' class="icon iconfont icon-guanbi1 guanbi"></span>
		  <div :style='{"lineHeight":"40px","fontSize":"18px","color":"#000","textAlign":"center"}'>身份验证</div>
		  <div id="option1" :style='{"width":"400px","padding":"20px","height":"auto"}'></div>
		</div>
		
        <div :style='{"margin":"0px auto 0","alignItems":"center","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"16px","position":"relative","justifyContent":"flex-start"}'>
          <el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0px","margin":"0 auto 12px","color":"#fff","textAlign":"center","outline":"none","borderRadius":"0px","background":"#62779c","width":"100%","fontSize":"16px","fontWeight":"600","height":"50px","order":"2"}' type="primary" @click="login()" class="loginInBt">登录</el-button>
          <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0 8px","margin":"0 6px 6px 0","borderColor":"#62779c20","color":"#62779c","outline":"none","borderRadius":"0px","background":"none","borderWidth":"6px","width":"auto","fontSize":"inherit","borderStyle":"solid","fontWeight":"600","height":"44px","order":"3"}' type="primary" @click="register('jiaolian')" class="register">注册教练</el-button>
        </div>
      </el-form>

    </div>
  </div>
</template>
<script>
import menu from "@/utils/menu";
export default {
  data() {
    return {
		verifyCheck2: false,
		flag: false,
      baseUrl:this.$base.url,
      loginType: 1,
      rulesForm: {
        username: "",
        password: "",
        role: "",
      },
      menus: [],
      roles: [],
      tableName: "",
    };
  },
  mounted() {
    let menus = menu.list();
    this.menus = menus;

    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].hasBackLogin=='是') {
        this.roles.push(this.menus[i])
      }
    }

  },
  created() {

  },
  destroyed() {
	    },
  components: {
  },
  methods: {
	setVerify() {
		this.flag = true

		this.$nextTick(() => {
			$('#option1').slideVerify({
				type: 2, //类型
				vOffset: 5, //误差量，根据需求自行调整
				vSpace: 5, //间隔
				imgName: [{"name":"图11.jpg","uid":1696553925331,"url":"http://codegen.caihongy.cn/20231006/b47490a2082b4396994c62aeb44cce09.jpg","status":"success"},{"name":"图12.jpg","uid":1696553928553,"url":"http://codegen.caihongy.cn/20231006/acf67d41ead749fd93856f56ff4bc65b.jpg","status":"success"},{"name":"图13.jpg","uid":1696553931090,"url":"http://codegen.caihongy.cn/20231006/3d9008c4294c433cad976f3f30eb71b0.jpg","status":"success"}].map((item)=>{return item.url}),
				imgSize: {"width":"400px","height":"200px"},
				blockSize: {"width":"40px","height":"40px"},
				barSize: {"width":"400px","height":"40px"},
				ready: () => {},
				success: () => {
				setTimeout(()=>{
				  this.flag = false
				  this.loginPost()
				},2500)
				}
			})
		})



	},

    //注册
    register(tableName){
		this.$storage.set("loginTable", tableName);
		this.$router.push({path:'/register',query:{pageFlag:'register'}})
    },
    // 登陆
    login() {

		if (!this.rulesForm.username) {
			this.$message.error("请输入用户名");
			return;
		}
		if (!this.rulesForm.password) {
			this.$message.error("请输入密码");
			return;
		}
		if(this.roles.length>1) {
			if (!this.rulesForm.role) {
				this.$message.error("请选择角色");
				return;
			}

			let menus = this.menus;
			for (let i = 0; i < menus.length; i++) {
				if (menus[i].roleName == this.rulesForm.role) {
					this.tableName = menus[i].tableName;
				}
			}
		} else {
			this.tableName = this.roles[0].tableName;
			this.rulesForm.role = this.roles[0].roleName;
		}
		

		this.setVerify()

    },
	loginPost() {
		this.$http({
			url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
			method: "post"
		}).then(({ data }) => {
			if (data && data.code === 0) {
				this.$storage.set("Token", data.token);
				this.$storage.set("role", this.rulesForm.role);
				this.$storage.set("sessionTable", this.tableName);
				this.$storage.set("adminName", this.rulesForm.username);
				this.$router.replace({ path: "/" });
			} else {
				this.$message.error(data.msg);
			}
		});
	},
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
      background: url(http://codegen.caihongy.cn/20230930/02567f8bbf29475095a68adeb32aa995.jpg);
        
  .list-item /deep/ .el-input .el-input__inner {
		padding: 0 10px;
		color: #666;
		font-size: inherit;
		border-color: #62779c;
		outline-offset: 0px;
		border-radius: 0px;
		box-shadow: 0 0 0px rgba(64, 158, 255, .3);
		outline: 0px solid #eee;
		background: #fff;
		width: 100%;
		border-width: 0 0 2px;
		border-style: solid;
		height: 50px;
	  }
  
  .list-item.select /deep/ .el-select .el-input__inner {
		border: 1px solid #eee;
		border-radius: 0px;
		padding: 0 10px;
		color: #666;
		width: 276px;
		font-size: 14px;
		height: 40px;
	  }
  
  .list-code /deep/ .el-input .el-input__inner {
  	  	border: 2px solid #002052;
  	  	border-radius: 0px 0 0 0px;
  	  	padding: 0 10px;
  	  	outline: none;
  	  	color: #666;
  	  	background: #fff;
  	  	width: calc(100% - 100px);
  	  	font-size: inherit;
  	  	border-color: #62779c;
  	  	border-width: 0 0 2px;
  	  	border-style: solid;
  	  	height: 40px;
  	  }

  .list-type /deep/ .el-radio__input .el-radio__inner {
		border-radius: 0;
		background: rgba(53, 53, 53, 0);
		border-color: #666666;
	  }
  .list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
        border-radius: 0;
        background: #62779c;
        border-color: #62779c;
      }
  .list-type /deep/ .el-radio__label {
		color: #666666;
		font-size: 16px;
	  }
  .list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: #62779c;
        font-size: 16px;
      }
}

	#option1 /deep/ .verify-img-panel {
				border-radius: 4px;
				margin: 0 0 5px;
				width: 360px;
				position: relative;
				height: 200px;
			}
  
	#option1 /deep/ .verify-img-panel .verify-refresh {
				cursor: pointer;
				padding: 5px;
				z-index: 2;
				top: 0;
				position: absolute;
				right: 0;
			}
	
	#option1 /deep/ .verify-img-panel .verify-refresh .iconfont {
				color: #fff;
				font-size: 20px;
				line-height: 1;
			}
	
	#option1 /deep/ .verify-bar-area {
				border: 1px solid #ddd;
				background: #FFFFFF;
				width: 360px;
				line-height: 40px;
				position: relative;
				text-align: center;
				height: 40px;
			}
	
	#option1 /deep/ .verify-bar-area .verify-msg {
				color: #333;
				font-size: 16px;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar {
				cursor: pointer;
				border: 1px solid #ddd;
				top: -1px;
				left: -1px;
				background: #f0fff0;
				width: 40px;
				position: absolute;
				height: 40px;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar.verify-left-bar-active {
				border: 1px solid #1a91ed;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar.verify-left-bar-success {
				border: 1px solid rgb(92, 184, 92);
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar.verify-left-bar-error {
				border: 1px solid red;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar .verify-move-block {
				cursor: pointer;
				box-shadow: 0 0 2px #888888;
				top: 0;
				left: 0;
				background: #fff;
				width: 38px;
				position: absolute;
				height: 38px;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar.verify-left-bar-active .verify-move-block {
				color: #fff !important;
				background: #1a91ed !important;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar.verify-left-bar-success .verify-move-block {
				color: #fff !important;
				background: rgb(92, 184, 92) !important;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar.verify-left-bar-error .verify-move-block {
				color: #fff !important;
				background: red !important;
			}
	
	#option1 /deep/ .verify-bar-area .verify-left-bar .verify-move-block .verify-icon {
				color: inherit;
				font-size: 18px;
			}
</style>
