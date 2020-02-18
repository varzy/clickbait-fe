import Axios from 'axios';
import { Message as ElMessage } from 'element-ui';

const instance = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API,
  timeout: 1000 * 60 * 5,
  withCredentials: true,
  responseType: 'json'
});

instance.interceptors.response.use(
  res => res,
  err => {
    const res = err.response;

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
      ElMessage({ message: '网络异常', type: 'error' });
    }

    return Promise.reject(err.response);
  }
);

export default instance;
