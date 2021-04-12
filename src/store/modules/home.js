import { login } from '@/api/login'
import { localSet } from '@/utils'

const user = {
  state: {
    videoRect: null
  },
  mutations: {
    // SET_CODE: (state, code) => {
    //   state.code = code
    // },

    // set 用户信息
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    set_videoRect(state, rect) {
      state.videoRect = rect
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