const dataSource = {
  'children': [
    {
      'title': '基本信息',
      'listStyleType': 'none',
      'col': '2',
      'children': [
        {
          'avatar': 'square', // circle
          'src': 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
        },
        {
          'label': '个人信息',
          'info': '陈** / 男 / 22 岁'
        },
        {
          'label': '学校',
          'info': '深圳大学'
        },
        {
          'label': '专业',
          'info': '计算机科学'
        },
        {
          'label': 'Blog',
          'info': 'https://jimczj.github.io'
        }
      ]
    },
    {
      'title': '联系方式',
      'listStyleType': 'none',
      'col': '3',
      'children': [
        {
          'label': 'Email',
          'info': 'jimczj@gmail.com'
        },
        {
          'label': 'GitHub',
          'info': 'https://github.com/jimczj'
        },
        {
          'label': '手机',
          'info': '158******06'
        }
      ]
    },
    {
      'title': '应聘信息',
      'listStyleType': 'none',
      'col': '3',
      'children': [
        {
          'label': '期望职位',
          'info': 'Web 前端工程师'
        },
        {
          'label': '期望薪资',
          'info': '14～18K'
        },
        {
          'label': '期望城市',
          'info': '深圳'
        }
      ]
    },
    {
      'title': '主要技能',
      'listStyleType': 'none',
      'col': '4',
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
    },
    {
      'title': '主要技能2',
      'listStyleType': 'none',
      'col': '2',
      'children': [
        {
          'label': 'HTML/CSS',
          'percent': '80'
        },
        {
          'label': 'JavaScript',
          'percent': '80'
        },
        {
          'label': 'Node.js',
          'percent': '90'
        },
        {
          'label': 'Python',
          'percent': '90'
        }
      ]
    },
    {
      'title': '主要技能3',
      'listStyleType': 'none',
      'col': '4',
      'children': [
        {
          'label': 'HTML/CSS',
          'circlePercent': '80'
        },
        {
          'label': 'JavaScript',
          'circlePercent': '80'
        },
        {
          'label': 'Node.js',
          'circlePercent': '90'
        },
        {
          'label': 'Python',
          'circlePercent': '90'
        }
      ]
    },
    {
      'title': '项目经验',
      'type': 'experience',
      'children': [
        {
          'label': 'Mock Server 2017.12',
          'info': '实习时写的基于 Koa 的 Mac 上 Fiddler 的替代方案，搭配 vue-cli 项目使用，配置简单灵活，巧妙的实现了热更新路由，修改配置实时更新。做成 npm 插件后还提供了命令行接口。公司多个前端项目都在用。开发过程'
        },
        {
          'label': 'Resume-it 2017.2',
          'info': `好看的简历千千万，但是实用的内容也就是那么多，所以我搞了一个数据模板分离的简历生成器，这样无论换模板还是改数据都非常方便。暂时 89 star，41 fork，有人用是最好的。
最初是用 webpack 打包的，后来换成了 Gulp + browserSync，简单易用，修改数据模板实时更新.`
        },
        {
          'label': 'Blog 2017.4 - 至今',
          'info': `用来练手 Vue 的项目，基于 Koa2 + Vue2 + MongoDB + Redis 搭建的 前后端分离 + RESTful API + SSR 的博客系统，并且进行了简单的性能优化，加快首屏渲染速度。
参考 vue - hacknews2.0 对前端部分进行了一次重构，新版本的 webpack 打包体积小，实现了按需加载。现在是我的试验田，不断进行优化，准备搭建性能监控平台`
        }
      ]
    },
    {
      'title': '技能清单',
      'children': [
        {
          'label': '编程语言',
          'info': 'JavaScript(ES6)*/HTML/CSS, JavaScript 基础扎实，熟练使用 async/await,Proxy 等 ES6 新语法，理解语义化的 HTML，熟练使用 CSS 进行布局'
        },
        {
          'label': '后端语言',
          'info': 'Node.js, 曾使用 Express 框架实现了一个课程大作业网站的后端。'
        },
        {
          'label': '前端库与框架',
          'info': 'Vue*/Angular2, 熟练使用 Vue，理解其基本原理，有实现复杂组件的能力。'
        },
        {
          'label': '前端工具',
          'info': 'Webpack, 能理解配置文件，并知道如何进行修改'
        },
        {
          'label': '数据库相关',
          'info': `MySQL/MongoDB, 在校期间设计过简单的社交网站 MySQL 数据表，工作期间也与后端开发讨论过其数据表的设计。`
        },
        {
          'label': '版本管理',
          'info': `Git 熟悉 Git flow.`
        },
        {
          'label': '云和开放平台',
          'info': `AWS`
        },
        {
          'label': '其他',
          'info': `GraphQL: 了解 GraphQL 基本使用方法，知道其使用场景，使用 Vue + GraphQL +
MongoDB 实现过一个简单的任务管理系统`
        }
      ]
    }
  ]
}

export default dataSource
