/*
 * @Author: SilvesterChiao
 * @Date: 2020-03-31 22:02:32
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-03 11:15:57
 */
module.exports = {
  sidebar: {
    '/basic/':  [
      {
        title: '计算机基础',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 0,    // 可选的, 默认值是 1
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
        children: [
          '/basic/structure/',
        ],
      },
      {
        title: '算法',
        collapsable: false,
        children: [
          '/basic/algorithm/',
        ],
      },
      {
        title: '设计模式',
        collapsable: false,
        children: [
          '/basic/pattern/',
        ],
      }
    ],
    '/frentend/':  [
      {
        title: '其他',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
          '/frentend/other/browser/',
        ]
      },
      {
        title: 'HTML',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/html/',
        ]
      },
      {
        title: 'CSS',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/css/',
        ]
      },
      {
        title: 'JavaScript',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
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
        children: [
          '/frentend/react/',
        ]
      },
    ],
    '/backend/': [
      {
        title: 'Nodejs',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
          '/backend/nodejs/readline',
          '/backend/nodejs/process',
          '/backend/nodejs/cli',
        ]
      },
      {
        title: 'MySQL',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/backend/mysql/',
        ]
      },
      {
        title: 'Linux',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/backend/linux/',
          '/backend/linux/terminator',
          '/backend/linux/tmux',
        ]
      },
      {
        title: 'Nginx',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/backend/nginx/',
        ]
      },
      {
        title: 'Docker',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/backend/docker/',
          '/backend/docker/setup',
          '/backend/docker/image',
          '/backend/docker/command',
          '/backend/docker/compose',
          '/backend/docker/dockerfile',
        ]
      },
      {
        title: 'CI',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/backend/ci/travis',
          '/backend/ci/jenkins',
          '/backend/ci/githubactions',
        ],
      },
    ],
    '/other/': [
      {
        title: '其他',
        collapsable: false, // 可选的, 默认值是 true,
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
        children: [
          '/other/editor/vim',
          '/other/editor/emmet',
          '/other/editor/vscode',
          '/other/editor/vscode-kaybindings',
        ]
      },
    ],
  }
}