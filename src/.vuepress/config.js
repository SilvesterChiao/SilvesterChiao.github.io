const { sidebar } = require('./sidebar')

module.exports = {
  dest: 'docs',
  title: '西尔杂货店',
  description: '跋涉千里向你道别，在最初和最后当雪夜。',
  locales: {
    '/': {
      lang: 'zh-CN',
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
    activeHeaderLinks: false,
    nav: [
      { text: '计算机', link: '/basic/' },
      {
        text: '前端',
        ariaLabel: '前端开发',
        items: [
          { text: '前端开发', link: '/frentend/other/' },
          { text: 'HTML', link: '/frentend/html/' },
          { text: 'CSS', link: '/frentend/css/' },
          { text: 'JavaScript', link: '/frentend/js/' },
          { text: 'React 技术栈', link: '/frentend/react/' },
          { text: 'Vue 技术栈', link: '/frentend/vue/' },
        ]
      },
      { text: '后端', link: '/backend/nodejs/' },
      { text: '其他', link: '/other/' },
    ],
    sidebarDepth: 0,
    sidebar,
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'assets/images',
      },
    },
  },
};
