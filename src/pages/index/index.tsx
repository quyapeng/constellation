import { ComponentType } from 'react';
import Taro, {
	Component,
	Config,
	useState,
	useReady,
	useDidShow,
	useDidHide,
	usePullDownRefresh,
} from '@tarojs/taro';
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components';

import { HdTabs } from 'taro-ui-hd';

import HomeService from '~/services/home/home.service';
import './index.scss';

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

	// const async function getBanner() {
	// 	const result = await HomeService.getBanner();
	// 	console.log('result', result);
	// };

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
