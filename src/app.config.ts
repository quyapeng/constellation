export default defineAppConfig({
	pages: ['pages/index/index', 'pages/user/index'],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
	tabBar: {
		color: '#969BA0',
		selectedColor: '#333333',
		backgroundColor: '#ffffff',
		list: [
			{
				iconPath: 'assets/images/icon/icon_tabbar_home_default.png',
				selectedIconPath: 'assets/images/icon/icon_tabbar_home_selected.png',
				// pages: 'pages/index/index',
				pagePath: 'pages/index/index',
				text: '星座',
			},
			{
				iconPath: 'assets/images/icon/icon_tabbar_home_default.png',
				selectedIconPath: 'assets/images/icon/icon_tabbar_home_selected.png',
				// pages: 'pages/index/index',
				pagePath: 'pages/index/index',
				text: '星语',
			},
			{
				iconPath: 'assets/images/icon/icon_tabbar_home_default.png',
				selectedIconPath: 'assets/images/icon/icon_tabbar_home_selected.png',
				// pages: 'pages/index/index',
				pagePath: 'pages/index/index',
				text: '星愿',
			},
			{
				iconPath: 'assets/images/icon/icon_tabbar_order_default.png',
				selectedIconPath: 'assets/images/icon/icon_tabbar_order_selected.png',
				// pages: 'pages/user/index',
				pagePath: 'pages/user/index',
				text: '我的',
			},
		],
	},
});
