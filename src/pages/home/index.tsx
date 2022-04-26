import { ComponentType } from 'react';
import Taro, { Component, Config, useState } from '@tarojs/taro';
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
// import { AtNoticebar, AtTag } from 'taro-ui'
import {
	// HdPaging,
	// HdBackToTop,
	// HdCard,
	// HdCountdown,
	// HdModal,
	// HdNodata,
	HdTabs,
} from 'taro-ui-hd';

// import Tabbar from '~/components/Tabbar/Tabbar'
// import QQMapWSService from '~/services/qqMap/ws.service'
// import LianouService from '~/services/root/drug.service'
import './index.scss';

type PageStateProps = {
	counter: {
		counter: number;
		increment: Function;
		decrement: Function;
		incrementAsync: Function;
	};
};
// type obj = {
// 	mode: string
// 	src: string
// }
type PageState = {
	testState: string;
	mobileText: string; // 手机号归属地展示文字
	/**
	 * 弹窗
	 */
	modalVisible: boolean;
	icon: Array<{
		// mode?: string
		src: any;
		name: string;
	}>;
	tabList: Array<{
		id: number;
		text: string;
	}>;
	currentTab: number;
	iconurl: any;
};

interface Index {
	props: PageStateProps;
	state: PageState;
}

const Index = () => {
	let state = {
		testState: '1212',
		mobileText: '',
		modalVisible: true,
		icon: [
			{
				name: '星座',
				// mode: 'aspectFit',
				src: require('~/assets/images/label/icon_1.png'),
			},
			{
				name: '星语',
				src: require('~/assets/images/label/icon_2.png'),
			},
			{
				name: '星盘',
				src: require('~/assets/images/label/icon_3.png'),
			},
			{
				name: '运势',
				src: require('~/assets/images/label/icon_4.png'),
			},
			{
				name: '更多',
				src: require('~/assets/images/label/more.png'),
			},
		],
		tabList: [
			{
				id: 1,
				text: '关注',
			},
			{
				id: 2,
				text: '发现',
			},
			{
				id: 3,
				text: '星座',
			},
		],
		currentTab: 0,
		iconurl: require('~/assets/images/label/icon_1.png'),
	};

	/**
	 * 指定config的类型声明为: Taro.Config
	 *
	 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
	 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
	 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
	 */
	// config: Config = {
	// 	navigationBarTitleText: '首页',
	// };

	// const componentDidShow=()=> {
	// 	console.error('into componentDidshow at home index', APP_CONF.API_HOST);
	// 	Meta.setTitle('首页');
	// }
	// componentDidHide() {
	// 	console.error('into componentDidhide at home index');
	// }

	// increment = () => {
	// 	this.setState({
	// 		testState: `${state.testState}expand`,
	// 	});
	// 	const { counter } = this.props;
	// 	counter.increment();
	// };

	// decrement = () => {
	// 	const { counter } = this.props;
	// 	counter.decrement();
	// };

	// incrementAsync = () => {
	// 	const { counter } = this.props;
	// 	counter.incrementAsync();
	// };

	// // 手机号输入
	// handleInput(type, e) {
	// 	console.log('type', type, e);
	// }

	// async handleJSONPTest() {
	// 	// const result = await QQMapWSService.geocoder({
	// 	// 	location: `28.2532,112.87887`,
	// 	// 	get_poi: 0,
	// 	// })
	// 	// console.log('result', result)
	// }

	// async handleProxyText() {
	// 	// const result = await LianouService.queryDiseaseByDrugName({
	// 	// 	ComName: '阿莫西林胶囊',
	// 	// })
	// 	// console.log('result', result)
	// }

	// /**
	//  * 弹窗关闭
	//  */
	// handleModalClose() {
	// 	this.setState({
	// 		modalVisible: false,
	// 	});
	// }

	// /**
	//  * handleTabChange
	//  */
	const tabList = [
		{
			id: 1,
			text: '关注',
		},
		{
			id: 2,
			text: '发现',
		},
		{
			id: 3,
			text: '星座',
		},
	];
	const [currentTab, setTab] = useState(0);
	const handleTabChange = e => {
		console.log('handleTabChange', e);
		setTab(e.id - 1);
	};

	// const handleOk = ()=> {
	// 	this.setState({
	// 		modalVisible: false,
	// 	});
	// }
	// render() {
	return (
		<View className='index'>
			<Swiper
				className='index-banner'
				indicatorColor='#999'
				indicatorActiveColor='#333'
				circular
				indicatorDots
				autoplay
			>
				<SwiperItem>
					<Image
						style='width:100%;height: 100%;background: #fff;'
						src={require('~/assets/images/label/banner.png')}
					/>
				</SwiperItem>
				<SwiperItem>
					<View className='demo-text-2'>
						<Image
							style='width:100%;height: 100%;background: #fff;'
							src={require('~/assets/images/label/banner.png')}
						/>
					</View>
				</SwiperItem>
				<SwiperItem>
					<View className='demo-text-3'>
						<Image
							style='width:100%;height: 100%;background: #fff;'
							src={require('~/assets/images/label/banner.png')}
						/>
					</View>
				</SwiperItem>
			</Swiper>
			<View className='tab_banner'>
				{state.icon.map((i, index) => {
					return (
						<View className='tab_icon' key={index}>
							<Image src={i.src} />
							<Text>{i.name}</Text>
						</View>
					);
				})}
			</View>
			<View className='tab_card'>
				<Text className='title'>今日运势</Text>
				<Text className='more'>更多运势 &gt;&gt; </Text>
			</View>
			{/* <Tabbar tabList={this.state.tabList} /> */}
			<HdTabs
				currentTab={currentTab}
				list={tabList}
				onChange={handleTabChange.bind(this)}
			/>
		</View>
	);
	// }
};

export default Index;
