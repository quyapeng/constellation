export default defineAppConfig({
  pages: ["pages/index/index", "pages/me/index"],
  tabBar: {
    list: [
      { pagePath: "pages/index/index", text: "首页" },
      { pagePath: "pages/me/index", text: "我的" },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
