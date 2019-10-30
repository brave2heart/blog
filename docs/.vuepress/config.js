module.exports = {
  title: 'zwslib & template',
  description: 'Reusable Framework',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.jpg'
      }
    ], // 增加一个自定义的 favicon(网页标签的图标)
    [
      'link',
      {
        rel: 'manifest',
        href: '/photo.jpg'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/photo.jpg'
      }
    ]
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      {
        text: '在线模板',
        link: 'https://zlab.zlgcloud.com/zwslib/template/index.html'
      }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: ['/md/zwslib.md', '/md/template.md']
  }
}
