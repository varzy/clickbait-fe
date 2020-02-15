import http from '../utils/http';

export const FetchNews = () =>
  http.request({
    url: '/news_list1',
    method: 'GET'
  });
