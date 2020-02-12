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
        component: _import('index/Index')
      },
      {
        path: 'example',
        name: 'Example',
        component: _import('example/Index')
      },
      {
        path: 'identify',
        name: 'Identify',
        component: _import('identify/Index')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: _import('errors/404')
  }
];
