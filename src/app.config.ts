import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: ["pages/index/index", "pages/mine/index"],
  window: {
    navigationBarTitleText: "",
    navigationBarBackgroundColor: "#ffffff",
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#4e77ef",
    backgroundColor: "red",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "/images/home.png",
        selectedIconPath: "/images/home-hover.png",
        text: "首页",
      },
      {
        pagePath: "pages/mine/index",
        iconPath: "/images/user.png",
        selectedIconPath: "/images/user-hover.png",
        text: "我的",
      },
    ],
  },
};

export default config;
