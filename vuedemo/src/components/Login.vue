<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-with="80px" class="login-box">
      <H3>欢迎登陆</H3>
      <el-form-item label="账号" prop="username"><el-input type="text" placeholder="请输入账号" v-model="form.username" /></el-form-item>
      <el-form-item label="密码" prop="password"><el-input type="password" placeholder="请输入密码" v-model="form.password" /></el-form-item>
      <el-form-item><el-button type="primary" @click="onSumbit('loginForm')">登陆</el-button></el-form-item>
    </el-form>
    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer"><el-button type="primary" @click="dialogVisible = false">确定</el-button></span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      // 表单验证   prop
      rules: {
        username: [
          {
            required: true,
            message: '账号不得为空',
            // 鼠标失去焦点触发
            tigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不得为空',
            tigger: 'blur'
          }
        ]
      },
      dialogVisible: false
    };
  },
  methods: {
    onSumbit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('/main');
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
