(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{410:function(s,a,e){"use strict";e.r(a);var t=e(5),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql安装"}},[s._v("#")]),s._v(" mysql安装")]),s._v(" "),a("blockquote",[a("p",[s._v("mysql5.7.25")])]),s._v(" "),a("h2",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"解压配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压配置"}},[s._v("#")]),s._v(" 解压配置")]),s._v(" "),a("ul",[a("li",[s._v("解压压缩包")]),s._v(" "),a("li",[s._v("将 "),a("code",[s._v("将解压文件夹")]),s._v(" 下的 "),a("code",[s._v("bin")]),s._v(" 文件的路径配置到 "),a("code",[s._v("PATH")]),s._v(" 下(linux系统类似)")])]),s._v(" "),a("h2",{attrs:{id:"注册服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册服务"}},[s._v("#")]),s._v(" 注册服务")]),s._v(" "),a("blockquote",[a("p",[s._v("将mysql注册为window服务")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (管理员运行 命令行窗口)")]),s._v("\n    mysqld "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (管理员运行 命令行窗口)")]),s._v("\n    mysqld  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--console")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("若提示穿件文件失败,则自己手动在 "),a("code",[s._v("bin")]),s._v(" 同级目录下创建一个 "),a("code",[s._v("data")]),s._v(" 文件夹")]),s._v(" "),a("li",[a("code",[s._v("--console")]),s._v(" 用来输出创建日志,若没有带上,可在 "),a("code",[s._v("data")]),s._v(" 下查看一个以 "),a("code",[s._v(".err")]),s._v(" 结尾的文件")]),s._v(" "),a("li",[s._v("初始化密码就在上面的日志中,类似于 "),a("code",[s._v("[Note] A temporary password is generated for root@localhost: uIHy-4JVqeEe")]),s._v(" ,密码就是 "),a("code",[s._v("uIHy-4JVqeEe")])])]),s._v(" "),a("h2",{attrs:{id:"修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改密码"}},[s._v("#")]),s._v(" 修改密码")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("mysql -uroot -p")]),s._v(" 以及上面的密码登录mysql")]),s._v(" "),a("li",[s._v("此时无论操作什么都是提示让修改密码 "),a("code",[s._v("ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.")])]),s._v(" "),a("li",[a("code",[s._v('alter user user() identified by "123456";')]),s._v(" 将root密码修改为 "),a("code",[s._v("123456")])])]),s._v(" "),a("h2",{attrs:{id:"创建用户授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户授权"}},[s._v("#")]),s._v(" 创建用户授权")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    use mysql;\n    CREATE USER 'username'@'%' IDENTIFIED BY 'password';\n    GRANT privileges ON databasename.tablename TO 'username'@'%'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("创建\n"),a("ul",[a("li",[s._v("用户名 "),a("code",[s._v("username")]),s._v(", host 为"),a("code",[s._v("%")]),s._v(", 允许远程连接, 密码为 "),a("code",[s._v("password")])])])]),s._v(" "),a("li",[s._v("授权\n"),a("ul",[a("li",[s._v("privileges：用户的操作权限，如SELECT，INSERT，UPDATE等，如果要授予所的权限则使用ALL")]),s._v(" "),a("li",[s._v("databasename：数据库名")]),s._v(" "),a("li",[s._v("tablename：表名，如果要授予该用户对所有数据库和表的相应操作权限则可用"),a("em",[s._v("表示，如")]),s._v(".*")])])])]),s._v(" "),a("h2",{attrs:{id:"撤销权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销权限"}},[s._v("#")]),s._v(" 撤销权限")]),s._v(" "),a("blockquote",[a("p",[s._v("含义同授权")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    REVOKE privilege ON databasename.tablename FROM 'username'@'%';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[s._v("#")]),s._v(" 删除")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    DROP USER 'username'@'host';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);