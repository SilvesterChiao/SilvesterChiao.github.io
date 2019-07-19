module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    toc: {
      includeLevel: [1, 2, 3],
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
