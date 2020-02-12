import _import from './importer';

export default [
  {
    path: '/',
    name: 'Index',
    component: _import('Index')
  },
  {
    path: '*',
    name: '404',
    component: _import('errors/404')
  }
];
