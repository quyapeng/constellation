import { COMMON, TABBAR } from './constants'
export default {
	pages: [
		{
			path: 'pages/index/index',
			style: {
				navigationBarTextStyle: 'black',
			},
		},
		{
			path: 'pages/message/index',
			style: {
				navigationStyle: 'custom',
				navigationBarTextStyle: 'white',
			},
		},
		{
			path: 'pages/mine/index',
			style: {
				navigationBarTextStyle: 'black',
			},
		},
	],
	window: {
		navigationBarTitleText: COMMON.APP_NAME,
		navigationBarTextStyle: 'black',
		navigationBarBackgroundColor: '#fff',
		// navigationStyle: "custom",
		// backgroundTextStyle: "light",
	},
	tabBar: {
		color: '#bfbfbf',
		selectedColor: '#1990ff',
		list: TABBAR.LIST,
	},
	debug: true,
}
