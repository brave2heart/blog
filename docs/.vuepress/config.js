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
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Timeline",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Cocact",
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
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
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
    "record": "BRAVE HEART",
    "startYear": "2019",
    "valineConfig": {
        "appId": 'sdkdADwnb1yC5bO2RIHOGmDf-gzGzoHsz',// your appId
        "appKey": 'QkrMRuYIenMBGLNNTfgBqYgd', // your appKey
      }
    
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      "vuepress-plugin-auto-sidebar",
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
            "url": '/bgm/fall_in_love.mp3',
            "cover": '/bgm/1.jpg'
          },
        ],
        "autoShrink":true,
        "position":{
          "left": '10px',
          "bottom": '100px',
          "z-index": '999999'
        }
      
      }
    ],

  ]
}