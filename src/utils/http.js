import Axios from 'axios';
import { Message as ElMessage } from 'element-ui';

const reportWhenDeveloping = (data, title = `AXIOS ERROR`) => {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable no-console */
    console.error(`!!! ${title} !!!`);
    /* eslint-disable no-console */
    console.warn('--- Log Start ---');
    console.log(data);
    /* eslint-disable no-console */
    console.warn('--- Log End ---');
  }
};

const instance = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API,
  timeout: 8000,
  withCredentials: true,
  responseType: 'json'
});

instance.interceptors.response.use(
  res => {
    // 正常情况
    if (res.data && res.data.code === 0) return res.data;

    // ↓ 异常情况
    reportWhenDeveloping(res, `MAYBE AN ABNORMAL RESPONSE`);

    // 如果接口允许显示异常
    // - 如果后端提供了信息则使用后端的信息
    // - 后端没有提供信息则使用默认的异常信息
    if (res.config && res.config.showError) {
      const message =
        res.data && res.data.message && typeof res.data.message === 'string'
          ? res.data.message
          : res.config.errorMsg;
      ElMessage({ message, type: 'error' });
    }

    return Promise.reject(res.data);
  },
  err => {
    const res = err.response;
    reportWhenDeveloping(res, `HTTP REQUEST ERROR`);

    // http 404
    if (+res.status === 404) {
      ElMessage({ message: '资源未找到', type: 'error' });
    }
    // http 504
    else if (+res.status === 504) {
      ElMessage({ message: '网络连接超时，请稍候重试', type: 'error' });
    }
    // 其他异常
    else {
      // 如果接口允许显示异常，则显示预设的异常信息
      if (res.config && res.config.showError) {
        ElMessage({ message: res.config.errorMsg, type: 'error' });
      }
    }

    return Promise.reject(err.response);
  }
);

export default instance;
