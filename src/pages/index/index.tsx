import { Component } from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.scss";
const img = require("../../images/banner.png");
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Swiper
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
        </Swiper>
      </View>
    );
  }
}
