/*
 * @Description: axios 请求配置
 * @Author: ontheroad1992
 * @Date: 2020-02-21 19:30:20
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-21 21:38:22
 */
const axios = require("axios");

const IS_DEV = process.env.NODE_ENV === "development";
const baseURL = IS_DEV ? "/api" : "";
// 配置文件
const config = {
  baseURL,
  timeout: 20 * 1000, // 请求超时时间设置
  validateStatus(status) {
    return status >= 200 && status < 500;
  }
};

// 创建 axios 实列
const _axios = axios.create(config);

// 添加请求拦截器
_axios.interceptors.request.use(
  originConfig => {
    const reqConfig = { ...originConfig };
    // step1: 容错处理
    if (!reqConfig.url) {
      /* eslint-disable-next-line */
      console.error("request need url");
      throw new Error({
        source: "axiosInterceptors",
        message: "request need url"
      });
    }
    // 默认请求方式
    if (!reqConfig.method) {
      reqConfig.method = "get";
    }

    // 大小写容错
    reqConfig.method = reqConfig.method.toLowerCase();
    // 参数容错
    if (reqConfig.method === "get") {
      // 防止字段用错
      if (!reqConfig.params) {
        reqConfig.params = reqConfig.data || {};
      }
      // 防止缓存
      const time = new Date().getTime();
      reqConfig.url = `${reqConfig.url}?t=${time}`;
    } else if (reqConfig.method === "post") {
      // 防止字段用错
      if (!reqConfig.data) {
        reqConfig.data = reqConfig.params || {};
      }
    }

    return reqConfig;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
_axios.interceptors.response.use(
  async res => {
    // 如果请求的状态值为 2 系列，可直接返回参数
    if (res.status.toString().charAt(0) === "2") {
      return res.data.data; // 直接返回 data 数据
    }
    // 如果不是，则证明请求的接口，业务错误或者其他
    return new Promise(async (resolve, reject) => {
      // const { data, url, method } = res.config;
      // 获取错误码
      // 记录此次失败请求的参数
      reject(res.data);
    });
  },
  error => {
    // 对响应错误做点什么
    // 判断网络是否中断
    if (error.message === "Network Error") {
      return Promise.reject({ err: "网络中断" });
    }
    // 判断请求超时
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      return Promise.reject({ err: "网络请求超时" });
    }
    return Promise.reject({ err: "网路请求错误" });
  }
);

/**
 * post 请求
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
  return _axios({
    method: "post",
    url,
    data,
    params
  });
}

/**
 * get 请求
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
  return _axios({
    method: "get",
    url,
    params
  });
}

/**
 * put 请求
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
  return _axios({
    method: "put",
    url,
    params,
    data
  });
}
/**
 * delete 请求
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, data = {}) {
  return _axios({
    method: "delete",
    url,
    data
  });
}
