import { login } from '@/api/login'
import { localSet } from '@/utils'
import { Message } from 'element-ui'

const user = {
  state: {
    user: '',
	  userInfo: null
  },
  mutations: {
    // SET_CODE: (state, code) => {
    //   state.code = code
    // },
	
	  // set 用户信息
	  SET_USERINFO: (state, userInfo) => {
		  state.userInfo = userInfo
	  }
  },

  actions: {
    // 用户名登录
    Login({ commit }, userInfo) {
      const {
        username,
        password
      } = userInfo
      return new Promise((resolve, reject) => {
        login(username, password).then((res) => {
	        const { code, data } = res.data
	        if (code === 200) {
		        localSet('userInfo', data)
		        commit('SET_USERINFO', data)
		        resolve()
	        } else {
		        Message({
			        message: '账号或密码不正确',
			        type: 'error',
			        duration: 5 * 1000
		        })
		        reject()
	        }
        }).catch(error => {
          reject(error)
        })
      })
    },
  }

}

export default user