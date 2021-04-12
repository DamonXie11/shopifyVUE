import request from '@/utils/request'
export function addProduct(obj) {
  const data = obj
  return request({
	  url: '/brand/shopifyPackageProduct/add',
    method: 'post',
    data
  })
}
export function getDesign(id) {
  const data = {id}
  return request({
	  url: '/brand/shopifyPackageProduct/findById',
    method: 'post',
    data
  })
}