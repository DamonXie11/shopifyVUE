import { addProduct,getDesign } from '@/api/pod'
import { localSet } from '@/utils'

const pod = {
  state: {
    proDetail: null,
    designList:null
  },
  mutations: {
	  // set 用户信息
	  SET_POD: (state, proDetail) => {
		  state.proDetail = proDetail
	  },
	  SET_DESIGN: (state, designList) => {
		  state.designList = designList
	  }
  },

  actions: {
    AddProduct({ commit }, proDetail) {
       
      const obj = proDetail
      return new Promise((resolve, reject) => {
        addProduct(obj).then((res) => {
             console.log(proDetail)
	        const { code, data } = res.data
	        if (code === 200) {
		        commit('SET_POD', data)
		        resolve()
	        } else {
		        reject()
	        }
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetDesign({ commit }, proDetail) {
      const {id} = proDetail;
      return new Promise((resolve, reject) => {
        getDesign(id).then((res) => {
	        const { code, data } = res.data;
	        if (code === 200) {
		        localSet('designList', data)
		        commit('SET_DESIGN', data)
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

export default pod