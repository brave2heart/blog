---
title: 从零开始打造一个APP应用
---

## 介绍


`template`是基于`zwslib`库开发的可复用框架示例模板。

## 功能

```javascript
- 主题
    - 动态设置切换主题色
    - 本地设置主题色

- 登录、忘记密码、注册
    - 动态设置Logo/项目名显示与隐藏、居左居中居右显示
    - 动态设置登录页面背景色/背景图片
    - 动态设置登录输入框区域背景色/背景图片
    - 动态切换是否显示忘记密码页面、注册页面和体验账号按钮。
    - 动态设置输入框是否可输入，以及默认文本
- 主页
    - 动态设置头部左右两侧菜单选项
    - 垂直/水平显示菜单栏
    - 两种收缩左侧菜单栏方式
    - 动态设置左侧菜单栏
    - 自适应布局，超过浏览器窗口大小才出现滚动条
- 设备管理
    - 设备列表
       - 设备概况
       - 设备类型
       - 设备列表
- 数据管理
    - 实时数据
       - 当前设备
    - 历史数据
       - 当前设备
- 用户管理
    - 账户余额
    - 用户信息
    - 账户安全

```

## 使用

1、直接拷贝`tempalte`模板代码生成新的项目。

2、安装 npm
```javascript
npm install
```

3、运行`template-copy`项目下的脚本文件`install.sh`，该脚本会依赖引入`zwslib`库。

4、运行项目
```javascript
npm run dev
```

5、配置参数

`config.js`文件位于`src`文件夹下，主要用于配置项目一些参数，可以根据具体项目需求，快速配置相关内容，不需要的功能项，只要置空即可。
```javascript
export const Common = {
  // 项目主题色
  projectThemeColor: '#8fc41e',
  // 项目LOGO
  projectLogo: require('@/assets/images/logo.png'),
  // 项目名称
  projectName: 'TEMPLATE'
}
export const Config = {
  // 登录
  login: {
    projectThemeColor: Common.projectThemeColor,
    projectLogo: Common.projectLogo,
    projectName: Common.projectName,
    projectLogoWidth: '',
    projectLogoHeight: '',
    projectNamefontSize: '28px',
    // 项目名+logo方向：居左flex-start、居中center、居右flex-end
    projectDirection: 'center',
    // 是否禁止输入
    usernameDisabled: false,
    passwordDisabled: false,
    usernamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码',
    rememberPassword: '记住密码',
    forgetPassword: '忘记密码?',
    loginButtonText: '登录',
    experienceAccount: '体验账号',
    toRegister: '没有账号?马上注册',
    // 是否显示体验账号按钮
    showExperienceButton: false,
    // 登录背景 backgroundColor（背景颜色）/backgroundImage（背景图片） 二选一
    backgroundColor: '#0d1729',
    // backgroundImage: require('@/assets/images/project/Login_bg.jpg'),
    // 登录区域宽度
    loginWidth: '',
    // 登录区域高度
    loginHeight: '',
    // 登录区域背景颜色
    loginBackgroundColor: '',
    // 登录区域背景图片
    loginBackgroundImage: require('@/assets/images/login_div.png'),
    // 登录区域文本颜色
    loginTextColor: '#ffffff'
  },
  // 主页布局
  container: {
    header: {
      projectThemeColor: Common.projectThemeColor,
      projectLogo: require('@/assets/images/logo.png'),
      projectname: Common.projectName,
      projectBackgroundColor: '#23374f',
      // 顶部高度
      height: 47,
      username: 'hi，user',
      dropdownMenu: [{
        title: '用户中心',
        command: 'userCenter'
      },
      {
        title: '系统设置',
        command: 'setting'
      },
      {
        title: '退出登录',
        command: 'logout'
      }
      ],
      // 顶部左侧菜单栏
      // '监控大屏', '消息', '记录', '日志'
      leftNavs: ['监控大屏', '消息', '记录', '日志'],
      // 顶部右侧菜单栏
      rightNavs: ['帮助']
    },
    // 左侧菜单栏
    aside: {
      projectThemeColor: Common.projectThemeColor,
      navMenuModeIsHorizontal: false,
      iconOpenRight: 'iconfont iconsidemenu_run',
      iconCloseLeft: 'iconfont iconsidemenu_close',
      // 二级菜单左侧偏移量，为了和一级菜单标题居中。
      itemTitlePaddingLeft: '22px',
      // 菜单的背景色（仅支持 hex 格式）
      navMenuBackgroundColor: '#2b415a',
      // 菜单的文字颜色（仅支持 hex 格式）
      navMenuTextColor: '#b6c5d6',
      // 当前激活菜单的文字颜色（仅支持 hex 格式）
      navMenuActiveTextColor: '#ffffff',
      navMenu: [{
        icon: 'el-icon-s-home icon',
        title: '首页',
        index: '/Home/Main'
      },
      {
        icon: 'el-icon-s-platform icon',
        title: '设备管理',
        childrens: [{
          title: '设备列表',
          index: '/Home/Device/DeviceList'
        }]
      },
      {
        icon: 'el-icon-s-data icon',
        title: '数据管理',
        childrens: [{
          title: '实时数据',
          index: '/Home/Data/LiveData'
        },
        {
          title: '历史数据',
          index: '/Home/Data/HistoricalData'
        }
        ]
      },
      {
        icon: 'el-icon-s-custom icon',
        title: '用户管理',
        childrens: [{
          title: '用户中心',
          index: '/Home/User/UserCenter'
        },
        {
          title: '角色管理',
          index: '/Home/User/RoleManager'
        }
        ]
      }
      ]

    }

  }
}

```
