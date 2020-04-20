module.exports = {
  title: 'WEI HAO',
  description: '个人博客',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
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
    // logo: '/assets/img/logo.png',
    nav: [
      {
        text: 'kotlin',
        link: '/md/kotlin.md'
      },
      {
        text: 'VuePress',
        link: 'https://vuepress.vuejs.org/zh/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/dpoyweihao'
      }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: {
      // {
      //   title: '专题',   // 必要的
      //   path: '/foo/',      // 可选的, 应该是一个绝对路径
      //   collapsable: true, // 可选的, 默认值是 true,
      //   sidebarDepth: 1,    // 可选的, 默认值是 1
      //   children: [
      //     '/md/Kotlin.md'
      //   ]
      // },
      '/md/kotlin.md': [
        {
          title: '基础',
          collapsable: false
        }
      ]
    }
  }
}

