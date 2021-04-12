import {
  myPackList,
  deletePack
} from '@/api/pack'

const user = {
  state: {

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
    MyPackList({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        myPackList(data).then((res) => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    DeletePack({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        deletePack(data).then((res) => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }

}

export default user