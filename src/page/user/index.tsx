import { ComponentType } from 'react';
import Taro, {
	Component,
	Config,
	useShareAppMessage,
	useShareTimeline,
} from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';
import Meta from '~/utils/meta';

// import Tabbar from '~/components/Tabbar/Tabbar'
import './index.scss';

Meta.setTitle('我的');
const Index = () => {
	useShareAppMessage(res => {
		if (res.from === 'button') {
			// 来自页面内转发按钮
			console.log(res.target);
		}
		return {
			title: '自定义转发标题',
			path: '/page/user?id=123',
		};
	});
	useShareTimeline(() => {
		console.log('onShareTimeline');
		return {
			title: '123',
			query: 'pages/user',
		};
	});
	return (
		<View className='index'>
			<View className='user_info'>个人中心-用户信息</View>
			{/* <Canvas
				style={{ width: '200px', height: '200px' }}
				canvasId='myCanvas'
				type='2d'
			></Canvas>
			<Button size={'default'} type={'default'} onClick={this.saveImg}>
				点击保存
			</Button> */}
			<Button openType='share'>分享</Button>
		</View>
	);
};
export default Index;
