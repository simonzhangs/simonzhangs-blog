## 📚Blog
这是松本松记录Web前端学习过程中的知识笔记、生活分享和知识内容管理的博客站点~<br/>
博客是用Vuepress的Vdoing主题搭建，[传送门☞](/#🎨关于博客主题)
如果你喜欢这个博客&主题欢迎一起[交流](/#联系)，或者交换[友链](https://simonzhangs.github.io/friends/) ( •̀ ω •́ )✧

:::tip
文章内容仅是我个人的小总结，资历尚浅，如有误还请指正。
:::

<!-- [更新日志](https://github.com/xugaoyi/vuepress-theme-vdoing/commits/master) -->


<!-- <div style="width: 300px;height: 300px;position: fixed;bottom: 0;left: 0;z-index: 1;">
  <script type="text/javascript" src="//rf.revolvermaps.com/0/0/8.js?i=5e4x5w8cxxb&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33&amp;bv=80" async="async"></script>
</div> -->

<!-- 小熊猫 -->
<img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;">

## 🐼Me
Web前端学习路上探索者，热爱前端，希望能做一些有意思的事情，23届毕业生<br/>
这些是我学习过程中做过的项目[传送门☞](https://simonzhangs.github.io/projects/)，欢迎一块交流和学习~

## 技能
* 熟悉 JavaScript、HTML、CSS、Vue 的拼写
* 了解 Linux、windows、macOS 的开关机方式
* 精通 Git 的 pull 和 push，并注册了 GitHub 帐号刷了一些 star


## :email: 联系

- WeChat or QQ: <a :href="qqUrl" class='qq'>{{ QQ }}</a>
- Email:  <a href="mailto:2863389578@qq.com">2863389578@qq.com</a>
- GitHub: <https://github.com/simonzhangs>

<script>
  export default {
    data(){
      return {
        QQ: '2863389578',
        qqUrl: `tencent://message/?uin=${this.QQ}&Site=&Menu=yes`
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = `mqqwpa://im/chat?chat_type=wpa&uin=${this.QQ}&version=1&src_type=web&web_src=oicqzone.com`
      }
    }
  }
</script>

## 🎨关于博客主题

[<img src="https://github-readme-stats.vercel.app/api/pin/?username=xugaoyi&amp;repo=vuepress-theme-vdoing" alt="ReadMe Card" class="no-zoom">](https://github.com/xugaoyi/vuepress-theme-vdoing)
[<img src="https://github-readme-stats.vercel.app/api/pin/?username=xugaoyi&amp;repo=vuepress-theme-vdoing-doc" alt="ReadMe Card" class="no-zoom">](https://doc.xugaoyi.com/)

本站主题是 [`Vdoing`](https://github.com/xugaoyi/vuepress-theme-vdoing)，这是一款简洁高效的VuePress 知识管理&博客 主题。旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ [Github地址](https://github.com/xugaoyi/vuepress-theme-vdoing) 