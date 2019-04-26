(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr","aria-hidden":"true"}},[e._v("#")]),e._v(" ssr")]),a("blockquote",[a("p",[e._v("科学上网")])]),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[e._v("#")]),e._v(" 步骤")]),a("ul",[a("li",[a("p",[e._v("查看服务器语言环境："),a("code",[e._v("locale")]),e._v("\n出现：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LANG=\nLANGUAGE=\nLC_CTYPE="POSIX"\nLC_NUMERIC="POSIX"\nLC_TIME="POSIX"\n...\n')])]),a("p",[e._v("执行 "),a("code",[e._v("export LANG=en_US.UTF-8")]),e._v(" 改变语言。再次输入 "),a("code",[e._v("locale")])]),a("p",[e._v("出现类似下面的\b报错：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("locale: Cannot set LC_CTYPE to default locale: No such file or directory\nlocale: Cannot set LC_MESSAGES to default locale: No such file or directory\nlocale: Cannot set LC_ALL to default locale: No such file or directory\n...\n")])]),a("p",[e._v("需要下载语言包："),a("code",[e._v("sudo locale-gen en_US.UTF-8")]),e._v(" 英文版本：en_US.UTF-8")])]),a("li",[a("p",[e._v("文档介绍")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apt-get install python-pip\npip install git+https://github.com/shadowsocks/shadowsocks.git@master\n")])]),a("p",[e._v("但是这里作为一个\b新的服务器，执行前需要准备其他依赖")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apt-get update\n# git 的依赖\napt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev\napt-get install git\n")])]),a("p",[e._v("除此之外还需要提醒，下载好 pip 后，到运行"),a("code",[e._v("pip install")]),e._v("前，需要重新进入服务器")])]),a("li",[a("p",[e._v("开启并在后台运行")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ssserver -p 443 -k password -m aes-256-cfb -d start\n")])])]),a("li",[a("p",[e._v("关闭")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ssserver -d stop\n")])])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),a("p",[a("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e._v("shadowsocks")])]),a("p",[a("a",{attrs:{href:"http://wiki.ubuntu.org.cn/%E4%BF%AE%E6%94%B9locale",target:"_blank",rel:"noopener noreferrer"}},[e._v("修改locale")])]),a("p",[a("a",{attrs:{href:"https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装git")])])])}],!1,null,null,null);t.default=r.exports}}]);