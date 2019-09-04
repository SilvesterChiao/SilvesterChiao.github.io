module.exports = {
  base: '/ouroboros/',
  title: '西尔的杂货店',
  description: '跋涉千里向你道别，在最初和最后当雪夜。',
  dest: 'docs',
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: `./favicon.ico` },
    ],
  ],
  markdown: {
    toc: {
      includeLevel: [2, 3],
    },
  },
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'assets/images',
      },
    },
  },
};
