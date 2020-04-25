module.exports = {
  "title": "WEI HAO",
  "description": "个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "我的",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/brave2heart",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/logo.png",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        "audios": [
          // 本地文件示例
          {
            "name": 'Touch',
            "artist": 'Barcelona',
            "url": '/bgm/touch.mp3',
            "cover": '/bgm/1.jpg'
          },
          {
            "name": 'Fall in Love',
            "artist": 'Barcelona',
            "url": './bgm/fall_in_Love.mp3',
            "cover": '/bgm/1.jpg'
          },
  
          // 网络文件示例
          {
            "name": '강남역 4번 출구',
            "artist": 'Plastic / Fallin` Dild',
            "url": 'https://assets.smallsunnyfox.com/music/2.mp3',
            "cover": 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            "name": '用胳膊当枕头',
            "artist": '최낙타',
            "url": 'https://assets.smallsunnyfox.com/music/3.mp3',
            "cover": 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ],
        "position":{
          "left": '10px',
          "bottom": '10px',
          "z-index": '999999'
        }
      
      }
    ]
  ]
}