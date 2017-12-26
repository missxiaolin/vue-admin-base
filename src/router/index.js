import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* layout */
import layout from '@/components/layout/Layout'

export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/error',
    name: '401',
    component: layout,
    redirect: '/error/401',
    hidden: true,
    children: [
      { path: '401', component: _import('errorPage/401') }
    ]
  },
  { path: '/404', name: '404', component: _import('errorPage/404'), hidden: true },
  // 登录
  { path: '/login', name: 'login', hidden: true, component: _import('login/login') },
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      { path: 'dashboard', component: _import('dashboard/index') }
    ]
  }, {
    path: '/introduction',
    component: layout,
    redirect: '/introduction/index',
    icon: 'icon-ren',
    noDropdown: true,
    children: [
      { path: 'index', component: _import('introduction/index'), name: '简述' }]
  }, {
    path: '/excel',
    component: layout,
    redirect: '/excel/download',
    name: 'excel',
    icon: 'icon-Excel',
    noDropdown: false,
    children: [
      { path: 'download', component: _import('excel/index'), name: 'excel导出' },
      { path: 'download2', component: _import('excel/selectExcel'), name: 'export selected' },
      { path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel' }
    ]
  }, {
    path: '/assembly',
    component: layout,
    redirect: '/assembly/index',
    name: '组件',
    icon: 'icon-zujianku',
    noDropdown: false,
    children: [
      { path: 'index', component: _import('assembly/index'), name: '介绍' },
      { path: 'tinymce', component: _import('assembly/tinymce'), name: '富文本编辑器' },
      { path: 'markdown', component: _import('assembly/markdown'), name: 'Markdown' },
      { path: 'jsoneditor', component: _import('assembly/jsonEditor'), name: 'jsoneditor' },
      { path: 'avatarupload', component: _import('assembly/avatarUpload'), name: '头像上传' },
      { path: 'dropzone', component: _import('assembly/dropzone'), name: 'Dropzone' },
      { path: 'sticky', component: _import('assembly/sticky'), name: 'Sticky' },
      { path: 'splitpane', component: _import('assembly/splitpane'), name: 'Splitpane' },
      { path: 'mixin', component: _import('assembly/mixin'), name: '小组件' },
      { path: 'backtotop', component: _import('assembly/backToTop'), name: '返回顶部' },
      { path: 'dndlist', component: _import('assembly/dndList'), name: '列表拖拽' }
    ]
  }, {
    path: '/zip',
    component: layout,
    redirect: '/zip/download',
    name: 'zip',
    icon: 'icon-zip',
    noDropdown: false,
    children: [
      { path: 'download', component: _import('zip/index'), name: 'export zip' }
    ]
  }, {
    path: '/charts',
    component: layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'icon-tubiao',
    noDropdown: false,
    children: [
      { path: 'index', component: _import('charts/index'), name: '介绍' },
      { path: 'keyboard', component: _import('charts/keyboard'), name: '键盘图表' },
      { path: 'keyboard2', component: _import('charts/keyboard2'), name: '键盘图表2' },
      { path: 'line', component: _import('charts/line'), name: '折线图' },
      { path: 'mixchart', component: _import('charts/mixChart'), name: '混合图表' }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: asyncRouterMap
})
