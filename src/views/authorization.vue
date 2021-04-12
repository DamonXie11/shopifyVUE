<template>
  <div class="authorization-warp container">
    <h3 class="title">Store Authorization</h3>
    <div class="content">
      <div v-if="!authStatus">
        <h3>Store Url</h3>
        <div style="display: flex;">
          <el-input v-model="shopName">
          <i
              class="el-icon-edit el-input__icon"
              slot="prefix"
          >
          </i>
          <template slot="append">.myshopify.com</template>
          </el-input>
          <el-button class="auth-btn" :loading="isSub" @click="authsub">Authorize</el-button>
        </div>
        <div class="tips">
          <h3>Installation Steps :</h3>
          1. Log into your Shopify Admin<br />
          2. Copy the URL which says your store name: store-name.myshopify.com<br />
          3. Fill in the blank field above with the store ID, please do not include .myshopify.com<br />
          4. Click the "install app" button on the Shopify authoritative page<br />
        </div>
      </div>
      <div v-if="authStatus">
        <div class="item-box">
          <span>Store Name</span>
          <span style="color: #333;">{{authInfo.name}}</span>
        </div>
        <div class="item-box">
          <span>Store Status</span>
          <span style="color: #F7B500;" v-if="authInfo.status === 1">Activated</span>
          <span style="color: #F7B500;" v-else-if="authInfo.status === 0">Deactivated</span>
          <span style="color: #F7B500;" v-else>Authorization Failed</span>
        </div>
        <div class="item-box">
          <span>Token Veryfication Results</span>
          <span style="color: #79C7AA;" v-if="authInfo.status === 1">Authorized</span>
          <span style="color: #79C7AA;" v-else>Unauthorized</span>
        </div>
        <el-button class="start-btn" v-if="authInfo.status === 0" @click="updateAuth(1)">Active</el-button>
        <el-button class="disable-btn" v-if="authInfo.status === 1" @click="updateAuth(0)">Deactive</el-button>
      </div>
      <img src="../assets/img/auth_bg.png" alt="">
    </div>
  </div>
</template>

<script>
  import { Message } from 'element-ui'
  import { authQuest, getAuthInfo, updateAuthInfo } from '../api/auth'
  import { localSet } from '@/utils'

  export default {
	  components: {},
	  data() {
		  return {
			  shopName: '',
			  isSub: false,
			  authStatus: -1,
			  authInfo: {}
		  }
	  },

	  created() {
		  this.getInfo()
	  },
	  methods: {
		  authsub() {
			  this.isSub = true;
			  authQuest(this.shopName).then((res) => {
				  const { code, data } = res.data
				  this.isSub = false;
				  if (code === 200) {
					  window.open(data)
				  } else {
					  Message({
						  message: data,
						  type: 'error',
						  duration: 5 * 1000
					  })
					  this.isSub = false;
				  }
			  }).catch((err) => {
				  this.isSub = false;
				  throw err
			  })
		  },

		  getInfo() {
			  getAuthInfo({}).then(res => {
				  const { code, data } = res.data
				  if (code === 200) {
					  this.authStatus = data.length > 0
					  if (this.authStatus) {
						  this.authInfo = data[0]
						  console.log(this.authInfo)
					  }
				  }
			  }).catch(err => {

			  })
		  },

		  updateAuth(status) {
			  const parmars = {
				  id: this.authInfo.id,
				  status
			  }
			  updateAuthInfo(parmars).then(res => {
				  const { code, data } = res.data
				  if (code === 200) {
					  Message({
						  message: 'Operation Success',
						  type: 'success',
						  duration: 5 * 1000
					  })
					  this.getInfo()
				  }
			  }).catch(err => {

			  })
		  }
	  }
  }
</script>

<style scoped lang="less">
  .authorization-warp {
    .title {
      font-size: 24px;
      margin: 40px 0;
    }
    .content {
      min-height: 550px;
      position: relative;
      margin-bottom: 85px;
      h3 {
        font-size: 18px;
      }
      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.15);
      background-color: #fff;
      padding: 40px 32px;
      .auth-btn {
        margin-left: 10px;
        background-color: #EE501F;
        color: #fff;
        border: none;
      }
      .tips {
        color: #333;
        font-size: 14px;
        line-height: 25px;
        z-index: 1;
        h3 {
          color: #000;
          margin: 30px 0;
        }
      }
      img {
        width: 600px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .item-box {
        margin-right: 60px;
        display: inline-block;
        span {
          display: block;
          font-size: 16px;
          color: #666;
          text-align: center;
          &:last-child {
            font-size: 20px;
          }
        }
      }
      .disable-btn {
        background-color: #808080;
        border: none;
        color: #fff;
        display: block;
        margin-top: 50px;
      }
      .start-btn {
        background-color: #EE501F;
        color: #fff;
        border: none;
        width: 82px;
        display: block;
        margin-top: 50px;
      }
    }
  }
</style>

<style lang="less">
  .authorization-warp {
    .el-input {
      width: 400px;
      input {
        border: none;
        background-color: #F5F7FA;
      }
    }
    .el-input-group__append {
      border: none;
    }
  }
</style>
