import request from '@/utils/request'
import md5 from 'blueimp-md5'

export function login(username, password) {
  const data = {
	  loginName: username,
	  password: md5(password)
  }
  return request({
	  url: '/brand/shopifyAccount/loginIn',
    method: 'post',
    data
  })
}