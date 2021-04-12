import request from '@/utils/request'

export function myPackList(data) {
  return request({
    url: '/brand/shopifyPackageProduct/list',
    method: 'post',
    data
  })
}

export function deletePack(data) {
  return request({
    url: '/brand/shopifyPackageProduct/delete',
    method: 'post',
    data
  })
}