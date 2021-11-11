import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import QQMapWSService from '~/services/qqMap/ws.service'
import LianouService from '~/services/root/drug.service'
import './index.scss'

type PageStateProps = {
	counter: {
		counter: number
		increment: Function
		decrement: Function
		incrementAsync: Function
	}
}

interface LabIndex {
	props: PageStateProps
	state: {}
}

@inject('counter')
@observer
class LabIndex extends Component {
	/**
	 * 指定config的类型声明为: Taro.Config
	 *
	 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
	 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
	 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
	 */
	config: Config = {
		navigationBarTitleText: '首页',
	}

	async handleJSONPTest() {
		const result = await QQMapWSService.geocoder({
			location: `28.2532,112.87887`,
			get_poi: 0,
		})
		console.log('result', result)
	}

	async handleProxyText() {
		const result = await LianouService.queryDiseaseByDrugName({
			ComName: '阿莫西林胶囊',
		})
		console.log('result', result)
	}

	handleCustomRoute() {
		console.error('into handleCustomRoute')
		Taro.switchTab({
			url: '/pages/lab/index',
		})
	}

	hanldeCompTest(type) {
		Taro.navigateTo({
			url: `/pages/lab/comp?type=${type}`,
		})
	}

	handleFormValidate() {
		Taro.navigateTo({
			url: `/pages/lab/FormValidate`,
		})
	}

	render() {
		return <View className='index'>消息</View>
	}
}

export default LabIndex as ComponentType
