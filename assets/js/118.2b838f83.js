(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{349:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vuepress","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 VuePress")]),t._v(" "),a("p",[t._v("VuePress是尤大神发布的一个全新的基于vue的文档生成器")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局安装VuePress")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress\n")])])]),a("ul",[a("li",[a("p",[t._v("本地新建文件夹>vuepress")])]),t._v(" "),a("li",[a("p",[t._v("vuepress/新建docs文件夹")])]),t._v(" "),a("li",[a("p",[t._v("vuepress/新建package.json文件")])]),t._v(" "),a("li",[a("p",[t._v("vuepress/docs/新建README.md文件")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7704547-0ed95fde2aa58e25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",alt:"新建文件"}})]),t._v(" "),a("h2",{attrs:{id:"添加代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加代码")]),t._v(" "),a("ul",[a("li",[t._v("在docs/README.md中添加代码")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# my first vuepress")]),t._v("\n")])])]),a("ul",[a("li",[t._v("在package.json中添加代码")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动项目")]),t._v(" "),a("ul",[a("li",[t._v("在vuepress中启动命令")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("ul",[a("li",[t._v("启动成功后打开看到以下页面说明vuepress已经初步配置成功")])]),t._v(" "),a("p",[a("code",[t._v("如果本地8080端口被占用请根据命令行中提示点端口进行访问")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7704547-40844c80b175f261.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/247/format/webp",alt:"启动项目"}})]),t._v(" "),a("h2",{attrs:{id:"文件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件配置")]),t._v(" "),a("ul",[a("li",[t._v("docs/文件下新建public/文件下新建img/文件下放入一张图片，用作首页显示图片")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7704547-74d923ae5371be77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",alt:"首页图片"}})]),t._v(" "),a("ul",[a("li",[t._v("修改首页显示文件 docs/README.md")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \nhome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nheroImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\nactionText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 快速上手 →\nactionLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("zh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("guide"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nfeatures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 简洁至上\n  details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Vue驱动\n  details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 享受 Vue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 高性能\n  details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VuePress 为每个页面预渲染生成静态的 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),t._v("，同时在页面被加载的时候，将作为 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SPA")]),t._v(" 运行。\nfooter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIT")]),t._v(" Licensed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Copyright © "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("present Evan You\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),a("ul",[a("li",[t._v("docs/文件下新建.vuepress文件夹/新建config.js文件")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7704547-f18cac7b36b96bdd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",alt:"config配置文件"}})]),t._v(" "),a("ul",[a("li",[t._v("导航栏及侧边栏配置 .vuepress/config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Guide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/guide/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'External'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://google.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/page-a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/page-b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Explicit link text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("还可配置"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%90%9C%E7%B4%A2%E6%A1%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("搜索框匹配"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("上/下一篇链接"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5%E9%9D%A2%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义页面"),a("OutboundLink")],1),t._v("等，官方文档都写的非常清楚，可根据需要自行配置即可。")]),t._v(" "),a("h2",{attrs:{id:"打包项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包项目")]),t._v(" "),a("p",[t._v("全部配置完成后打包项目")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm run build \n")])])]),a("p",[t._v("打包成功之后找到 docs/.vuepress/dist 文件夹下文件，全部拷贝到刚开始配置的 Github Page代码仓库中，提交代码，等待一分钟后访问 "),a("code",[t._v("http://自己的github用户名.github.io")])]),t._v(" "),a("p",[t._v("到此已经完成了所有配置，至于里面写什么，完全有你自己决定了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);