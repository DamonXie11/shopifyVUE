import {
    getList,
    detailList,
    deleteFun,
    addGlFun
  } from '@/api/goods'
  const goods = {
    state: {
      user: '',
    },
    mutations: {
      // SET_CODE: (state, code) => {
      //   state.code = code
      // },
    },
  
    actions: {
        GetList({ commit }, userInfo) {
        const {
          pageNum,
          pageSize
        } = userInfo
        console.log(userInfo)
        return new Promise((resolve, reject) => {
            getList(userInfo).then((res) => {
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      DetailList({ commit }, userInfo) {
        console.log(userInfo)
        return new Promise((resolve, reject) => {
          detailList(userInfo).then((res) => {
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      DelGlFun({ commit }, userInfo) {
        console.log(userInfo)
        return new Promise((resolve, reject) => {
          deleteFun(userInfo).then((res) => {
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      AddGlFun({ commit }, userInfo) {
        console.log(userInfo)
        return new Promise((resolve, reject) => {
          addGlFun(userInfo).then((res) => {
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      CheckFun({ commit }, userInfo) {
        console.log(userInfo)
        return new Promise((resolve, reject) => {
          checkFun(userInfo).then((res) => {
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
    }
  
  }
  
  export default goods