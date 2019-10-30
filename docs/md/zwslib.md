---
title: zwslib
---

# 基础

### 介绍

`zwslib`是基于`vue`和`element-ui`开发的可复用框架库，主要是将公司`web`前端项目里可以复用的业务模块抽取出来，便于二次开发。主要包括页面层`Components`和逻辑层`sdk`。

### 功能

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

### 使用

1、在项目中引入 zwslib 库。

2、跟`element-ui`使用方式一样，在项目`main.js`文件里按需引入：

```javascript
import {
  LoginArea,
  LoginPage,
  ZWSHome,
  ZWSHeader,
  ZWSAside,
  ZWSMain,
  ZWSFooter,
  DeviceListPage,
  RealTimeDataPage,
  HistoryDataPage,
  UserCenterPage,
  HomePage
} from '/zwslib/Components/index.js'
Vue.use(LoginArea)
  .use(LoginPage)
  .use(ZWSHome)
  .use(ZWSHeader)
  .use(ZWSAside)
  .use(ZWSMain)
  .use(ZWSFooter)
  .use(DeviceListPage)
  .use(RealTimeDataPage)
  .use(HistoryDataPage)
  .use(UserCenterPage)
  .use(HomePage)
```

3、然后在`.vue`文件中直接组件名加上前缀`zws`即可，比如使用`LoginPage`：

```javascript
<zws-login-page></zws-login-page>
```

## Components

`Components`是`zwslib`库的组件层，主要包括：

- `Ctrl`：界面 UI 的封装，Element-UI 基本满足项目很多需求，所以这一层基本没有。
- `Area`：Ctrl+SDK，UI 加上逻辑的封装，一个界面和功能都完整的模块。
- `Page`：多个 Area 模块的组装，比如用户中心是账户信息、硬盘管理、用户信息和账户安全 4 个 Area 模块的组装，
  有多个 Area 组装才会需要 Page 层，如果不是，一般直接引用 Area 即可满足需求。





### LoginArea

登录模块。

### RegisterArea

注册模块。

### ForgetPasswordArea

忘记密码模块。

### LoginPage

由 LoginArea、RegisterArea 和 ForgetPasswordArea 组成。

### SystemStatisticsArea

系统统计模块。

### DeviceStatisticsArea

设备统计模块。

### DeviceOverviewArea
设备概括模块。
### DeviceTypeArea
设备类型模块。
### DeviceTableArea
设备列表模块。

### DeviceListPage
由DeviceOverviewArea、DeviceTypeArea和DeviceTableArea组成。

### RealTimeDataPage
实时数据模块。

### HistoryDataPage
历史数据模块。


### AccountBalanceArea
账户信息模块。
### AccountSecurityArea
账号安全模块。

### UserInfoArea
用户信息模块。

### UserCenterPage
由AccountBalanceArea、AccountSecurityArea和UserInfoArea组成。



## SDK

主要包括Api、数据处理业务逻辑代码和常用工具类。
