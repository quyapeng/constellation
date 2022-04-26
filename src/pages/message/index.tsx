import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Text, Icon } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';

import QQMapWSService from '~/services/qqMap/ws.service';
import LianouService from '~/services/root/drug.service';
import './index.scss';

type PageStateProps = {
	counter: {
		counter: number;
		increment: Function;
		decrement: Function;
		incrementAsync: Function;
	};
};

interface LabIndex {
	props: PageStateProps;
	state: {};
}

const LabIndex = () => {
	/**
	 * 指定config的类型声明为: Taro.Config
	 *
	 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
	 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
	 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
	 */
	// config: Config = {
	// 	navigationBarTitleText: '消息中心',
	// }

	return (
		<View className='message'>
			<View className='label_mess'>
				<View className='tab_icon'>
					<Image src={require('~/assets/images/label/banner.png')} />
					<Text>好友申请</Text>
				</View>
				<View className='tab_icon'>
					<Image src={require('~/assets/images/label/banner.png')} />
					<Text>我的好友</Text>
				</View>
				<View className='tab_icon'>
					<Image src={require('~/assets/images/label/banner.png')} />
					<Text>附近的人</Text>
				</View>
				<View className='tab_icon'>
					<Image src={require('~/assets/images/label/banner.png')} />
					<Text>我的收藏</Text>
				</View>
			</View>
			<View className='list'>
				<View className='list_item'>
					<View className='avatar'>
						<Image src={require('~/assets/images/label/banner.png')} />
						<Icon size='20' type='warn' color='red' />
					</View>
					<View>
						<Text>天蝎宝宝</Text>
						<Text>今天运势好到爆～</Text>
					</View>
					<View>10:30</View>
				</View>
			</View>
		</View>
	);
};

export default LabIndex;
