import { ComponentType } from 'react';
import Taro, { Component, Config, showToast } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';

// import Tabbar from '~/components/Tabbar/Tabbar'
import './index.scss';

/**
 * 页面props
 */
type PageStateProps = {
	counter: any;
};

/**
 * 页面state
 */
type PageState = {};

interface UserIndex {
	props: PageStateProps;
	state: PageState;
}

@inject('counter')
@observer
class UserIndex extends Component {
	config: Config = {
		navigationBarTitleText: '我的',
	};
	share = () => {
		console.log('share', Taro.getShareInfo, Taro.useShareAppMessage);
		return {
			title: '转发分享', // 转发标题
			path: 'goods/pages/goodDetail/index?id=1227440223760351233&__key_=15851931571301', // 转发路径
			// imageUrl: 'xxxx', 自定义图片路径
		};
	};
	saveImg = async () => {
		const query = Taro.createSelectorQuery();
		query
			.select('#myCanvas')
			.fields({ node: true })
			.exec(async res => {
				console.log(res);
				// const canvas = res[0].node;
				// const ctx = canvas.getContext('2d');
				// const dpr = Taro.getSystemInfoSync().pixelRatio;
				// canvas.width = res[0].width * dpr;
				// canvas.height = res[0].height * dpr;
				// ctx.scale(dpr, dpr);
				// ctx.fillRect(0, 0, 100, 100);
			});
		// 创建canvas对象
		// const cxt = Taro.createCanvasContext('myCanvas');
		// // 绘制背景
		// // cxt.drawImage(posterImg, 0, 0, w, h);
		// // 绘制圆形
		// cxt.arc(100, 100, 100 / 2, 0, 2 * Math.PI);
		// // 设置裁剪，下面绘制二维码就会裁剪在圆形上
		// cxt.clip();
		// // 绘制二维码
		// // cxt.drawImage(100, 264, 845, qrCodeSide, qrCodeSide);
		// cxt.draw();
		// console.log('123');
		// 延迟执行才能绘制成功
		// setTimeout(() => {
		// 	Taro.canvasToTempFilePath({
		// 		x: 0,
		// 		y: 0,
		// 		width: 100,
		// 		canvasId: 'myCanvas',
		// 		fileType: 'jpg',
		// 		success(res) {
		// 			setTimeout(() => {
		// 				Taro.saveImageToPhotosAlbum({
		// 					filePath: res.tempFilePath,
		// 					success() {
		// 						showToast({
		// 							title: '保存成功',
		// 						});
		// 					},
		// 				});
		// 			}, 300);
		// 		},
		// 	});
		// }, 300);
	};
	componentDidMount() {
		// this.saveImg();
	}

	render() {
		return (
			<View className='index'>
				<View className='user_info'>个人中心-用户信息</View>
				<Canvas
					style={{ width: '200px', height: '200px' }}
					canvasId='myCanvas'
					type='2d'
				></Canvas>
				<Button size={'default'} type={'default'} onClick={this.saveImg}>
					点击保存
				</Button>
				<Button open-type='share' onClick={() => this.share()}>
					分享
				</Button>
			</View>
		);
	}
}

export default UserIndex as ComponentType;
