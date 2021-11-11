/**
 * 底部Tabbar
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './Tabbar.scss'

/**
 * 组件内部属性
 */
interface IState {
	tabList: Array<{
		id: number
		text: string
	}>
}

class Tabbar extends Component<{}, IState> {
	constructor(props) {
		super(props)
		this.state = { tabList: props.tabList }
	}

	handleTabItemClick(item) {
		console.log(item)
	}

	render() {
		const { tabList } = this.state
		return (
			<View className='tabbar-comp'>
				{tabList.map(tabItem => {
					return (
						<View
							className='tab-item'
							onClick={this.handleTabItemClick.bind(this, tabItem)}
						>
							{tabItem.text}
						</View>
					)
				})}
			</View>
		)
	}
}

export default Tabbar
