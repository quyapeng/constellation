import { Component } from "react";
import { View } from "@tarojs/components";
import "./index.scss";
// const img = require("../../images/banner.png");
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="tab_context">123</View>
        {/* <View className="page-section-spacing">
          <View className="flex-wrp" style="flex-direction:row;">
            <View className="flex-item demo-text-1"></View>
            <View className="flex-item demo-text-2"></View>
            <View className="flex-item demo-text-3"></View>
          </View>
        </View> */}
        {/* <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">
              <Image
                src={img}
                style="width:100%;height:400rpx;display:block;"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">
              <Image
                src={img}
                style="width:100%;height:400rpx;display:block;"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">
              <Image
                src={img}
                style="width:100%;height:400rpx;display:block;"
              />
            </View>
          </SwiperItem>
        </Swiper> */}
      </View>
    );
  }
}
