const dataSource = {
  'children': [
    {
      'content': '',
      'col': 2,
      'backgroundColor': '#00bfa5',
      'fontColor': '#fff',
      'children': [
        {
          'content': '基本信息',
          'iconType': 'solution',
          'underlineColor': 'none',
          'type': 'basic',
          'listStyleType': 'none',
          'children': [
            {
              'avatar': 'square', // circle
              'src': 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
              'size': '200'
            },
            {
              'label': '个人信息',
              'content': '陈** / 男 / 22 岁'
            },
            {
              'label': '学校',
              'content': '深圳大学'
            },
            {
              'label': '专业',
              'content': '计算机科学'
            },
            {
              'label': 'Blog',
              'content': 'https://jimczj.github.io'
            }
          ]
        },
        {
          'content': '联系方式',
          'iconType': 'profile',
          'type': 'basic',
          'listStyleType': 'none',
          'underlineColor': 'none',
          'children': [
            {
              'iconType': 'mail',
              'label': 'Email',
              'content': 'jimczj@gmail.com'
            },
            {
              'iconType': 'github',
              'label': 'GitHub',
              'content': 'https://github.com/jimczj'
            },
            {
              'iconType': 'phone',
              'label': '手机',
              'content': '158******06'
            }
          ]
        },
        {
          'content': '主要技能',
          'iconType': 'radar-chart',
          'type': 'basic',
          'listStyleType': 'none',
          'underlineColor': 'none',
          'children': [
            {
              'label': 'HTML/CSS',
              'rate': '4.5'
            },
            {
              'label': 'JavaScript',
              'rate': '4'
            },
            {
              'label': 'Node.js',
              'rate': '4'
            },
            {
              'label': 'Python',
              'rate': '4'
            }
          ]
        }
      ]
    },
    {
      'content': '',
      'col': 20,
      'children': [
        {
          'type': 'basic',
          'iconType': 'bars',
          'content': '技能清单',
          'children': [
            {
              'label': '',
              'content': '编程语言：JavaScript(ES6)*/HTML/CSS, JavaScript 基础扎实，熟练使用 async/await,Proxy 等 ES6 新语法，理解语义化的 HTML，熟练使用 CSS 进行布局'
            },
            {
              'label': '',
              'content': '后端语言：Node.js, 曾使用 Express 框架实现了一个课程大作业网站的后端。'
            },
            {
              'label': '',
              'content': '前端库与框架：Vue*/Angular2, 熟练使用 Vue，理解其基本原理，有实现复杂组件的能力。'
            },
            {
              'label': '',
              'content': '前端工具：Webpack, 能理解配置文件，并知道如何进行修改'
            },
            {
              'label': '',
              'content': `数据库相关：MySQL/MongoDB, 在校期间设计过简单的社交网站 MySQL 数据表，工作期间也与后端开发讨论过其数据表的设计。`
            },
            {
              'label': '',
              'content': `版本管理：Git 熟悉 Git flow.`
            },
            {
              'label': '',
              'content': `云和开放平台：AWS`
            },
            {
              'label': '',
              'content': `其他：GraphQL: 了解 GraphQL 基本使用方法，知道其使用场景，使用 Vue + GraphQL +
MongoDB 实现过一个简单的任务管理系统`
            }
          ]
        },
        {
          'content': '项目经验',
          'iconType': 'project',
          'children': [
            {
              'content': '开源项目',
              'type': 'experience',
              'underlineColor': 'none',
              'children': [
                {
                  'label': 'Mock Server 2017.12',
                  'content': '实习时写的基于 Koa 的 Mac 上 Fiddler 的替代方案，搭配 vue-cli 项目使用，配置简单灵活，巧妙的实现了热更新路由，修改配置实时更新。做成 npm 插件后还提供了命令行接口。公司多个前端项目都在用。开发过程'
                },
                {
                  'label': 'Resume-it 2017.2',
                  'content': `好看的简历千千万，但是实用的内容也就是那么多，所以我搞了一个数据模板分离的简历生成器，这样无论换模板还是改数据都非常方便。暂时 89 star，41 fork，有人用是最好的。
最初是用 webpack 打包的，后来换成了 Gulp + browserSync，简单易用，修改数据模板实时更新.`
                },
                {
                  'label': 'Blog 2017.4 - 至今',
                  'content': `用来练手 Vue 的项目，基于 Koa2 + Vue2 + MongoDB + Redis 搭建的 前后端分离 + RESTful API + SSR 的博客系统，并且进行了简单的性能优化，加快首屏渲染速度。
参考 vue - hacknews2.0 对前端部分进行了一次重构，新版本的 webpack 打包体积小，实现了按需加载。现在是我的试验田，不断进行优化，准备搭建性能监控平台`
                }
              ]
            },
            {
              'content': '公司项目',
              'underlineColor': 'none',
              'type': 'experience',
              'children': [
                {
                  'label': 'Mock Server 2017.12',
                  'content': '实习时写的基于 Koa 的 Mac 上 Fiddler 的替代方案，搭配 vue-cli 项目使用，配置简单灵活，巧妙的实现了热更新路由，修改配置实时更新。做成 npm 插件后还提供了命令行接口。公司多个前端项目都在用。开发过程'
                },
                {
                  'label': 'Resume-it 2017.2',
                  'content': `好看的简历千千万，但是实用的内容也就是那么多，所以我搞了一个数据模板分离的简历生成器，这样无论换模板还是改数据都非常方便。暂时 89 star，41 fork，有人用是最好的。
最初是用 webpack 打包的，后来换成了 Gulp + browserSync，简单易用，修改数据模板实时更新.`
                },
                {
                  'label': 'Blog 2017.4 - 至今',
                  'content': `用来练手 Vue 的项目，基于 Koa2 + Vue2 + MongoDB + Redis 搭建的 前后端分离 + RESTful API + SSR 的博客系统，并且进行了简单的性能优化，加快首屏渲染速度。
参考 vue - hacknews2.0 对前端部分进行了一次重构，新版本的 webpack 打包体积小，实现了按需加载。现在是我的试验田，不断进行优化，准备搭建性能监控平台`
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default dataSource
