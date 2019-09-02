module.exports = {
  base: '/ouroboros/',
  title: 'Hello VuePress',
  description: 'Just playing around',
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
  },
};
