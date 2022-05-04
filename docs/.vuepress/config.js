/**
 * 提示：如您想使用JS版本的配置文件可参考：
 * https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
const htmlModules = require("./config/htmlModules.js"); // 自定义插入的html块
const nav = require("./config/nav");
const plugins = require("./config/plugins");

module.exports = {
  theme: "vdoing", // 使用npm包主题
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  title: "Simonzhangs' blog",
  description:
    "Simonzhangs' blog,松本松的Web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。",

  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "/img/logo.png", // 导航栏logo
    repo: "simonzhangs/howlermusic", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: "docs", // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: "编辑",

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImg: [
    //   "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg",
    //   "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg",
    //   "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg",
    // ],
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>   
    // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: "structuring",

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: "simonzhangs", // 必需
      link: "https://github.com/simonzhangs", // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar:
        "https://cdn.jsdelivr.net/gh/simonzhangs/image-hosting@master/20220319/image.4x708q9wzse0.webp",
      name: "Simonzhangs",
      slogan: "前端学习探索者",
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:2863389578@qq.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/simonzhangs",
        },
        {
          iconClass: "icon-erji",
          title: "听音乐",
          link: "http://woaitouxiang.top",
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2021, // 博客创建年份
      // 博客版权信息，支持a标签或换行标签</br>
      copyrightInfo:
        '<br><a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2021023197号-2</a><br>Simonzhans | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', 
    },

    // 自定义hmtl(广告)模块
    // htmlModules
    // 站点配置（首页 & 文章页）
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,css3,html5,Node,git,github,markdown",
      },
    ],
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
    ["meta", { name: "baidu-site-verification", content: "code-1z5Ut8ufD8" }], // 百度统计的站长验证
    ["meta", { name: "baidu_union_verify", content: "c6a4aea9309aa9d3f34a9305150ccf4f"}], // 百度联盟的站长验证
    // 网站关联Google AdSense 与 html格式广告支持
    [
      "script",
      {
        async: true,
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1123091805279475",
      },
    ],
  ],

  // 插件配置
  plugins,

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
};
