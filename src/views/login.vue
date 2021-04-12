<template>
  <div class="login-wrap">
    <div class="login-form-box">
      <el-form
          label-position="top"
          :model="loginForm"
          :rules="rules"
          hide-required-asterisk
          ref="loginForm"
          class="login-form">
          <el-form-item class="title">
        <span>Welcome to</span>
        <el-link href="#/home" :underline="false">CJbranding</el-link>
      </el-form-item>
          <el-form-item label="Username" prop="username">
            <el-input
                placeholder="Please inpute username"
                v-model="loginForm.username"
                @keyup.enter.native="handelLogin"
            >
            </el-input>
            <b />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
                placeholder="Please inpute password"
                type="password"
                v-model="loginForm.password"
                autocomplete="off"
                @keyup.enter.native="handelLogin"
            >
            <b />
            </el-input>
          </el-form-item>
          <el-form-item class="login-box">
            <el-button class="login-btn" :loading="isLogin" @click="handelLogin">Login</el-button>
            <!--<p>No Account?<a class="link-taggle" @click="loginOrRegisterSwitch('register')">Create One</a></p>-->
          </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
  export default {
	name: 'login',
	  data() {
		  return {
			  isLogin: false,
			  loginForm: {
				  username: '',
				  password: '',
			  },
			  rules: {
				  username: [
					  { required: true, message: 'Please inpute username', trigger: 'blur' }
				  ],
				  password: [
					  { required: true, message: 'Please inpute password', trigger: 'blur' }
				  ],
			  }
		  }
	  },

	methods: {
		handelLogin() {
			this.$refs['loginForm'].validate((valid) => {
				if (valid) {
					this.isLogin = true;
					this.$store.dispatch('Login', { ...this.loginForm }).then(() => {
						this.isLogin = false;
						this.$router.push({ path: '/home' })
					}).catch((err) => {
						this.isLogin = false;
						throw err
					})
				}
			});
		},
	}
}
</script>

<style scoped lang="less">
  .login-wrap {
    background-image: url("../assets/img/login_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-width: 1400px;
    min-height: 100vh;
    .login-form-box {
      min-width: 1200px;
      position: relative;
      .login-form {
        width: 20%;
        position: absolute;
        top: 50%;
        right: 15%;
        margin-top: 16%;
        .title {
          color: #fff;
          margin-bottom: 10px;
          span {
            font-size: 22px;
          }
          .el-link {
            font-size: 44px;
            margin: 19px 0 0 0;
            color: #fff;
            &:hover{
              color: #E84226;
            }
          }
        }
        .login-box {
          font-size: 14px;
          text-align: center;
          color: #999;
          .login-btn {
            width: 100%;
            background-color: #EE501F;
            color: #fff;
            height: 48px;
            border-radius: 24px;
            border: none;
            margin-top: 16px;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
<style lang="less">
  .login-wrap {
    .el-form-item__label {
      line-height: initial !important;
      padding: 0;
      color: #fff;
    }
    .link-taggle {
      cursor: pointer;
      color: #409eff;
    }
    .el-input {
      position: relative;
      .el-input__inner {
        background-color: transparent;
        border-left: none;
        border-right: none;
        border-top: none;
        border-radius: 0;
        padding: 0;
        color: #fff;
      }
    }
    .el-input.is-active .el-input__inner, .el-input__inner:focus {
      /*border-color: #0029D4;*/
    }
    .el-form-item {
      margin-bottom: 24px;
    }
  }
</style>
