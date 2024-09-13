<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"1px solid #f0f0f0","width":"100%","padding":"30px","position":"relative","background":"#fcfcfc"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="教练工号" prop="jiaoliangonghao">
            <el-input  v-model="ruleForm.jiaoliangonghao" 
                placeholder="教练工号" clearable :readonly=" false  ||ro.jiaoliangonghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="教练姓名" prop="jiaolianxingming">
            <el-input  v-model="ruleForm.jiaolianxingming" 
                placeholder="教练姓名" clearable :readonly=" false  ||ro.jiaolianxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="课程名称" prop="kechengmingcheng">
            <el-input  v-model="ruleForm.kechengmingcheng" 
                placeholder="课程名称" clearable :readonly=" false  ||ro.kechengmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="课程类型" prop="kechengleixing">
            <el-select v-model="ruleForm.kechengleixing" placeholder="请选择课程类型"  >
              <el-option
                  v-for="(item,index) in kechengleixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="封面" v-if="type!='cross' || (type=='cross' && !ro.fengmian)" prop="fengmian">
            <file-upload
            tip="点击上传封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
            @change="fengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="封面" prop="fengmian">
                <img v-if="ruleForm.fengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="上课时间" prop="shangkeshijian">
            <el-select v-model="ruleForm.shangkeshijian" placeholder="请选择上课时间"  multiple filterable>
              <el-option
                  v-for="(item,index) in shangkeshijianOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="可预约人数" prop="keyuyuerenshu">
            <el-input  v-model.number="ruleForm.keyuyuerenshu" 
                placeholder="可预约人数" clearable :readonly="true  ||ro.keyuyuerenshu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="课程地点" prop="kechengdidian">
            <el-input  v-model="ruleForm.kechengdidian" 
                placeholder="课程地点" clearable :readonly=" false  ||ro.kechengdidian"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="目标" prop="mubiao">
            <el-input  v-model="ruleForm.mubiao" 
                placeholder="目标" clearable :readonly=" false  ||ro.mubiao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="部位" prop="buwei">
            <el-input  v-model="ruleForm.buwei" 
                placeholder="部位" clearable :readonly=" false  ||ro.buwei"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="强度" prop="qiangdu">
            <el-select v-model="ruleForm.qiangdu" placeholder="请选择强度"  >
              <el-option
                  v-for="(item,index) in qiangduOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="课程短片" v-if="type!='cross' || (type=='cross' && !ro.kechengduanpian)" prop="kechengduanpian">
            <file-upload
            tip="点击上传课程短片"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.kechengduanpian?ruleForm.kechengduanpian:''"
            @change="kechengduanpianUploadChange"
            ></file-upload>
          </el-form-item>
		  <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="课程短片" prop="kechengduanpian">
			<el-button v-if="ruleForm.kechengduanpian" @click="download(baseUrl + ruleForm.kechengduanpian)" type="success">预览</el-button>
			<el-button v-else disabled>暂无</el-button>
		  </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="注意事项" prop="zhuyishixiang">
            <editor 
                :style='{"minHeight":"250px","padding":"0","margin":"0","borderColor":"#1abc9e30","backgroundColor":"none","borderRadius":"0","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.zhuyishixiang" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0px","background":"#1abc9e","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #eee","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"0px","background":"#fcfcfc","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            jiaoliangonghao : false,
            jiaolianxingming : false,
            kechengmingcheng : false,
            kechengleixing : false,
            fengmian : false,
            shangkeshijian : false,
            keyuyuerenshu : false,
            kechengdidian : false,
            mubiao : false,
            buwei : false,
            qiangdu : false,
            kechengduanpian : false,
            zhuyishixiang : false,
            thumbsupnum : false,
            crazilynum : false,
            discussnum : false,
            storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          jiaoliangonghao: '',
          jiaolianxingming: '',
          kechengmingcheng: '',
          kechengleixing: '',
          fengmian: '',
          shangkeshijian: '',
          keyuyuerenshu: '0',
          kechengdidian: '',
          mubiao: '',
          buwei: '',
          qiangdu: '',
          kechengduanpian: '',
          zhuyishixiang: '',
          thumbsupnum: '',
          crazilynum: '',
          discussnum: '',
          storeupnum: '',
        },
        kechengleixingOptions: [],
        shangkeshijianOptions: [],
        qiangduOptions: [],


        rules: {
          jiaoliangonghao: [
          ],
          jiaolianxingming: [
          ],
          kechengmingcheng: [
          ],
          kechengleixing: [
          ],
          fengmian: [
          ],
          shangkeshijian: [
          ],
          keyuyuerenshu: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          kechengdidian: [
          ],
          mubiao: [
          ],
          buwei: [
          ],
          qiangdu: [
          ],
          kechengduanpian: [
          ],
          zhuyishixiang: [
          ],
          thumbsupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          crazilynum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          discussnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='jiaoliangonghao'){
              this.ruleForm.jiaoliangonghao = obj[o];
              this.ro.jiaoliangonghao = true;
              continue;
            }
            if(o=='jiaolianxingming'){
              this.ruleForm.jiaolianxingming = obj[o];
              this.ro.jiaolianxingming = true;
              continue;
            }
            if(o=='kechengmingcheng'){
              this.ruleForm.kechengmingcheng = obj[o];
              this.ro.kechengmingcheng = true;
              continue;
            }
            if(o=='kechengleixing'){
              this.ruleForm.kechengleixing = obj[o];
              this.ro.kechengleixing = true;
              continue;
            }
            if(o=='fengmian'){
              this.ruleForm.fengmian = obj[o].split(",")[0];
              this.ro.fengmian = true;
              continue;
            }
            if(o=='shangkeshijian'){
              this.ruleForm.shangkeshijian = obj[o];
              this.ro.shangkeshijian = true;
              continue;
            }
            if(o=='keyuyuerenshu'){
              this.ruleForm.keyuyuerenshu = obj[o];
              this.ro.keyuyuerenshu = true;
              continue;
            }
            if(o=='kechengdidian'){
              this.ruleForm.kechengdidian = obj[o];
              this.ro.kechengdidian = true;
              continue;
            }
            if(o=='mubiao'){
              this.ruleForm.mubiao = obj[o];
              this.ro.mubiao = true;
              continue;
            }
            if(o=='buwei'){
              this.ruleForm.buwei = obj[o];
              this.ro.buwei = true;
              continue;
            }
            if(o=='qiangdu'){
              this.ruleForm.qiangdu = obj[o];
              this.ro.qiangdu = true;
              continue;
            }
            if(o=='kechengduanpian'){
              this.ruleForm.kechengduanpian = obj[o];
              this.ro.kechengduanpian = true;
              continue;
            }
            if(o=='zhuyishixiang'){
              this.ruleForm.zhuyishixiang = obj[o];
              this.ro.zhuyishixiang = true;
              continue;
            }
            if(o=='thumbsupnum'){
              this.ruleForm.thumbsupnum = obj[o];
              this.ro.thumbsupnum = true;
              continue;
            }
            if(o=='crazilynum'){
              this.ruleForm.crazilynum = obj[o];
              this.ro.crazilynum = true;
              continue;
            }
            if(o=='discussnum'){
              this.ruleForm.discussnum = obj[o];
              this.ro.discussnum = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.jiaoliangonghao!=''&&json.jiaoliangonghao) || json.jiaoliangonghao==0){
                this.ruleForm.jiaoliangonghao = json.jiaoliangonghao
            }
            if((json.jiaolianxingming!=''&&json.jiaolianxingming) || json.jiaolianxingming==0){
                this.ruleForm.jiaolianxingming = json.jiaolianxingming
            }
          }
        });
        this.$http.get('option/kechengleixing/kechengleixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.kechengleixingOptions = res.data.data;
          }
        });
        this.shangkeshijianOptions = "周一,周二,周三,周四,周五,周六,周日".split(',')
        this.qiangduOptions = "低级,中级,高级".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`yujiakecheng/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
            this.ruleForm.shangkeshijian = this.ruleForm.shangkeshijian.split(",");
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('yujiakecheng/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.ruleForm.shangkeshijian = this.ruleForm.shangkeshijian.join(",");
                          this.$http.post(`yujiakecheng/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.ruleForm.shangkeshijian = this.ruleForm.shangkeshijian.join(",");
                  this.$http.post(`yujiakecheng/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      fengmianUploadChange(fileUrls) {
          this.ruleForm.fengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      kechengduanpianUploadChange(fileUrls) {
          this.ruleForm.kechengduanpian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: 400px;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: 200px;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: 200px;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #1abc9e30;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: none;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
