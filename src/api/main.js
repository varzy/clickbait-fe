import http from '../utils/http';

export const reqFetchNews = () =>
  http.request({
    url: '/news_list1',
    method: 'GET'
  });

export const reqFetchFeatures = () =>
  http.request({
    url: '/news_list2',
    method: 'GET'
  });

export const reqVerifyNews = data =>
  http.request({
    url: '/predict_pos',
    method: 'POST',
    data
  });

export const reqGenerateTitle = data =>
  http.request({
    url: '/generate_title',
    method: 'POST',
    data
  });
