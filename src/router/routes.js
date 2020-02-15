import _import from './importer';
import Home from '@/views/layouts/Home';

export default [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Index' },
    component: Home,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: _import('index/Index'),
        meta: { title: '首页' }
      },
      {
        path: 'example',
        name: 'Example',
        component: _import('example/Index'),
        meta: { title: '标题党示例' }
      },
      {
        path: 'identify',
        name: 'Identify',
        component: _import('identify/Index'),
        meta: { title: '标题党识别' }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: _import('errors/404')
  }
];
