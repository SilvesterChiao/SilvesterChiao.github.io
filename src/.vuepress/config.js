module.exports = {
  base: '/ouroboros/',
  dest: 'docs',
  title: '西尔杂货店',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '西尔杂货店',
      description: '跋涉千里向你道别，在最初和最后当雪夜。'
    }
  },
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: `./favicon.ico` },
    ],
  ],
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3],
    },
  },
  themeConfig: {
    repo: 'SilvesterChiao/ouroboros',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      { text: '计算机', link: '/basic/' },
      { text: '前端', link: '/frentend/' },
      { text: '后端', link: '/backend/' },
      { text: '其他', link: '/other/' },
    ],
    sidebar: {
      '/basic/':  [
        {
          title: '计算机基础',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '',
            '/basic/audition',
            '/basic/http/',
            '/basic/oo/',
          ]
        },
        {
          title: '数据结构',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/basic/structure/',
          ],
        },
        {
          title: '算法',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/basic/algorithm/',
          ],
        },
        {
          title: '设计模式',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/basic/pattern/',
          ],
        }
      ],
      '/frentend/':  [
        {
          title: 'HTML',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '',
          ]
        },
        {
          title: 'CSS',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/frentend/css/',
          ]
        },
        {
          title: 'JavaScript',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/frentend/js/',
            '/frentend/js/es5/',
            '/frentend/js/es6/',
            '/frentend/js/standard',
          ]
        },
        {
          title: 'Vue',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/frentend/vue/',
            '/frentend/vue/vue',
            '/frentend/vue/router',
            '/frentend/vue/vuex',
            '/frentend/vue/vuepress',
            '/frentend/vue/axios',
          ]
        },
        {
          title: 'React',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/frentend/react/',
            '/frentend/react/classNames',
            '/frentend/react/router',
            '/frentend/react/mobx',
          ]
        },
      ],
      '/backend/': [
        {
          title: 'Nodejs',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/backend/nodejs/',
            '/backend/nodejs/readline',
            '/backend/nodejs/process',
            '/backend/nodejs/cli',
          ]
        },
        {
          title: 'MySQL',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/backend/mysql/',
          ]
        },
        {
          title: 'Linux',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/backend/linux/linux',
            '/backend/linux/terminator',
            '/backend/linux/tmux',
          ]
        },
        {
          title: 'Nginx',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/backend/nginx/',
          ]
        },
      ],
      '/other/': [
        {
          title: '其他',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '',
            '/other/books',
            '/other/markdown',
            '/other/git/',
            '/other/language/',
          ]
        },
        {
          title: '工具',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/other/tools/apidoc',
            '/other/tools/babel',
            '/other/tools/bower',
            '/other/tools/eslint',
            '/other/tools/prettier',
            '/other/tools/npm',
            '/other/tools/yarn',
            '/other/tools/grunt',
            '/other/tools/gulp',
            '/other/tools/webpack',
          ]
        },
        {
          title: '编辑器',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/other/editor/vim',
            '/other/editor/emmet',
            '/other/editor/vscode',
            '/other/editor/vscode-kaybindings',
          ]
        },
      ],
    },
  },
  plugins: ['@vuepress/back-to-top'],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'assets/images',
      },
    },
  },
};
