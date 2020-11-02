/*
 * @Author: SilvesterChiao
 * @Date: 2020-03-31 22:02:32
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-11-02 21:07:38
 */
module.exports = {
  sidebar: {
    '/basic/':  [
      {
        title: '计算机基础',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          '', // 对应 /basic 下 README.md 文件
          '/basic/audition', // 对应 /basic下 audition.md 文件
          '/basic/http/', // 对应 /basic/http 下 index.md 文件
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
          '/basic/algorithm/leetcode',
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
    '/frentend/other/': [
      {
        title: '前端开发',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
          '/frentend/other/browser',
          '/frentend/other/web',
        ]
      },
    ],
    '/frentend/html/': [
      {
        title: 'HTML',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
        ]
      },
    ],
    '/frentend/css/': [
      {
        title: 'CSS',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
          '/frentend/css/sass',
          '/frentend/css/animate',
        ]
      },
    ],
    '/frentend/js/': [
      {
        title: 'JavaScript',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
          '/frentend/js/es5/datatypes',
          '/frentend/js/es5/operators',
          '/frentend/js/es5/expressions',
          '/frentend/js/es5/function',
          '/frentend/js/es5/scope',
          '/frentend/js/es5/string',
          '/frentend/js/es5/number',
          '/frentend/js/es5/array',
          '/frentend/js/es5/object',
          '/frentend/js/es5/prototype',
          '/frentend/js/es5/date',
          '/frentend/js/es5/regex',
          '/frentend/js/jquery',
          '/frentend/js/standard',
        ]
      },
      {
        title: 'DOM',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/js/dom',
        ]
      },
      {
        title: 'BOM',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/js/bom',
        ]
      },
      {
        title: 'ES6',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/js/es6/let',
          '/frentend/js/es6/destructuring',
          '/frentend/js/es6/string',
          '/frentend/js/es6/regex',
          '/frentend/js/es6/number',
          '/frentend/js/es6/function',
          '/frentend/js/es6/array',
          '/frentend/js/es6/object',
          '/frentend/js/es6/symbol',
          '/frentend/js/es6/set',
          '/frentend/js/es6/proxy',
          '/frentend/js/es6/reflect',
          '/frentend/js/es6/promise',
          '/frentend/js/es6/iterator',
          '/frentend/js/es6/generator',
          '/frentend/js/es6/async',
          '/frentend/js/es6/class',
          '/frentend/js/es6/module',
          '/frentend/js/es6/arraybuffer',
          '/frentend/js/es6/decorator',
        ]
      },
    ],
    '/frentend/react/': [
      {
        title: 'React',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
        ]
      },
    ],
    '/frentend/vue/': [
      {
        title: 'Vue(前端 MV\*框架)',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '',
          '/frentend/vue/syntax',
          '/frentend/vue/computed',
          '/frentend/vue/class-and-style',
          '/frentend/vue/conditional',
          '/frentend/vue/list',
          '/frentend/vue/events',
          '/frentend/vue/forms',
          '/frentend/vue/components',
          '/frentend/vue/vuepress',
        ]
      },
      {
        title: 'vue-router(前端单页面路由)',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/vue/router',
        ]
      },
      {
        title: 'vuex(vue 组件状态管理器)',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/vue/vuex',
        ]
      },
      {
        title: 'axios(ajax 库)',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/frentend/vue/axios',
        ]
      },
    ],
    '/backend/': [
      {
        title: 'Nodejs',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
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
          '/backend/docker/docker-dockerfile',
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
          '/other/tools/yeoman',
          '/other/tools/bower',
          '/other/tools/grunt',
          '/other/tools/gulp',
          '/other/tools/hexo',
          '/other/tools/apidoc',
          '/other/tools/jsdoc',
          '/other/tools/npm',
          '/other/tools/nvm',
          '/other/tools/yarn',
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