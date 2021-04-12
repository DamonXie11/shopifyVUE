import request from '@/utils/request'

export function authQuest(name) {
	const data = {
		name,
	}
	return request({
		url: '/brand/shopifyShop/addShopify',
		method: 'post',
		data
	})
}

export function authorize(data) {
	return request({
		url: '/brand/shopifyShop/authorize',
		method: 'post',
		data
	})
}

export function authLogin(data) {
	return request({
		url: '/brand/shopifyAccount/automaticLogon',
		method: 'post',
		data
	})
}


export function getAuthInfo(data) {
	return request({
		url: '/brand/shopifyShop/getShopByUserId',
		method: 'post',
		data
	})
}

export function updateAuthInfo(data) {
	return request({
		url: '/brand/shopifyShop/update',
		method: 'post',
		data
	})
}

export function subAuthpsw(data) {
	return request({
		url: '/brand/shopifyAccount/initPassWord',
		method: 'post',
		data
	})
}