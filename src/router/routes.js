export const routes = {
	path: '/',
	component: () => import('@/views/layout.vue'),
	// redirect: '/home',
	children: [
		{
			path: 'home',
			name: 'Home',
			component: () => import('@/views/home.vue'),
		},
		{
			path: 'mgr',
			name: 'Branding Management',
			component: () => import('@/views/brand-mgr.vue'),
			redirect: '/mgr/design',
			children: [
				{
					path: 'design',
					name: 'Branding Design',
					component: () => import('@/views/design.vue')
				},
				{
					path: 'designDetail',
					name: 'Brand Design Detail',
					hide: true,
					component: () => import('@/views/brand-design-detail.vue')
				},
				{
					path: 'canvas',
					name: 'pod设计',
					hide: true,
					component: () => import('@/views/canvas'),
				},
				{
					path: 'minePack',
					name: 'My Packages',
					component: () => import('@/views/minePack.vue')
				},
				{
					path: 'pay',
					name: '支付',
					hide: true,
					component: () => import('@/views/pay.vue')
				},
				{
					path: 'packBuy',
					name: 'Package Purchasing',
					hide: true,
					component: () => import('@/views/packBuy.vue')
				},
					{
					path: 'packOrder',
					name: 'Package Order',
					component: () => import('@/views/packOrder.vue')
				}
			]
		},
		{
			path: 'goods-linkage',
			name: 'Shopify',
			component: () => import('@/views/goods-linkage'),
			redirect: 'goods-linkage/package',
			children: [
				{
					path: 'authorization',
					name: 'Authorization',
					component: () => import('@/views/authorization'),
				},
				{
					path: 'package',
					name: 'Products Connection',
					component: () => import('@/views/goods-linkage-package')
				},
				{
					path: 'goods-linkage-detail',
					name: '商品关联包装详情页',
					hide: true,
					component: () => import('@/views/goods-linkage-detail'),
				},
				{
					path: 'order',
					name: 'Order',
					component: () => import('@/views/order.vue')
				},
				{
					path: 'order-detail',
					name: '订单详情',
					hide: true,
					component: () => import('@/views/order-detail.vue')
				}
			]
		},
		{
			path: 'private-custom',
			name: 'Private Custom Desgin',
			component: () => import('@/views/private-custom'),
		},
	]
}

export default [{
	path: '/login',
	name: '登陆',
	component: () => import('@/views/login.vue'),
},
	routes
]