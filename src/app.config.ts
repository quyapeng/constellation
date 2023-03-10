export default defineAppConfig({
  pages: ["pages/index/index", "pages/me/index"],
  tabBar: {
    color: "#3f3f6f",
    selectedColor: "#6f68f9",
    backgroundColor: "#101028",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/icon1.png",
        selectedIconPath: "assets/icon1_s.png",
      },
      {
        pagePath: "pages/me/index",
        text: "我的",
        iconPath: "assets/icon.png",
        selectedIconPath: "assets/icon.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
