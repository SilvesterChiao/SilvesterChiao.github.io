module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: 'docs',
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
