export const LIST = [
	{
		pagePath: 'pages/index/index',
		text: '首页',
		iconPath: 'images/home.png',
		selectedIconPath: 'images/home-hover.png',
		// navigationBarTextStyle: "white",
		// navigationBarBackgroundColor: "#fff",
	},
	{
		pagePath: 'pages/message/index',
		text: '消息',
		iconPath: 'images/message.png',
		selectedIconPath: 'images/message-hover.png',
		navigationStyle: 'custom',
		// navigationBarTextStyle: "black",
		// navigationBarBackgroundColor: "#000000",
	},
	{
		pagePath: 'pages/mine/index',
		text: '我的',
		iconPath: 'images/user.png',
		selectedIconPath: 'images/user-hover.png',
		// navigationBarTextStyle: "white",
		// navigationBarBackgroundColor: "#fff",
	},
]

export const PATHS = LIST.map(({ pagePath }) => pagePath)
