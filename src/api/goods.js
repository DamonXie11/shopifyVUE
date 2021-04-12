import request from '@/utils/request'

export function getList(upJson) {
  const data = upJson
  return request({
    url: '/brand/shopifyProducts/list',
    method: 'post',
    data
  })
}

export function detailList(upJson) {
    const data = upJson
    return request({
      url: '/brand/shopifyPackageProduct/list',
      method: 'post',
      data
    })
}

export function deleteFun(upJson) {
    const data = upJson
    return request({
      url: '/brand/shopifyAssociated/deleteAssociated',
      method: 'post',
      data
    })
}

export function addGlFun(upJson) {
  const data = upJson
  return request({
    url: '/brand/shopifyAssociated/add',
    method: 'post',
    data
  })
}

export function checkFun(upJson) {
  const data = upJson
  return request({
    url: '/brand/shopifyAssociated/getAssociatedProduct',
    method: 'post',
    data
  })
}