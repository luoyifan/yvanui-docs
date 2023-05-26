module.exports = {
  theme:"",
  title: "一码平台",
  description: "简化开发与交付，一码成就",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/luoyifan/yvan-ui-example",
    editLinks: false,
  },
};