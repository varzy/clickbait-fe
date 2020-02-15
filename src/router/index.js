import Router from './router';
import _ from 'lodash';

Router.beforeEach((to, from, next) => {
  /**
   * 设置页面标题
   */
  const routeTitle = _(to.matched)
    .map(item => _.get(item, 'meta.title'))
    .compact()
    .last();
  document.title = routeTitle ? `标题党新闻识别 - ${routeTitle}` : '标题党新闻识别';

  next();
});

export default Router;
