export default {
  pages: ["pages/index/index", "pages/message/index", "pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationStyle: "custom",
  },
  tabBar: {
    color: "#bfbfbf",
    selectedColor: "#1990ff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "images/home.png",
        selectedIconPath: "images/home-hover.png",
        navigationBarTextStyle: "white",
      },
      {
        pagePath: "pages/message/index",
        text: "消息",
        iconPath: "images/message.png",
        selectedIconPath: "images/message-hover.png",
        navigationBarTextStyle: "black",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "images/user.png",
        selectedIconPath: "images/user-hover.png",
        navigationBarTextStyle: "white",
      },
    ],
  },
  debug: true,
};
