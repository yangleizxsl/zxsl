import axios from "axios";

axios.defaults.headers['Content-Tyepe'] = 'application/json;charset=utf-8';

//创建axios实例

const service = axios.create({
  // axios中请求配置有baseURL选项，标识请求URL公共部分
  baseURL: '/api',
  //超时
  timeout: 10000
})


export default service