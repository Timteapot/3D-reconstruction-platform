// 用于二次封装axios
import axios from 'axios';
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { message } from 'antd';
// import '@ant-design/v5-patch-for-react-19';
import {store} from '../../store';

// 创建axios实例
const http: AxiosInstance = axios.create({
    baseURL: 'https://www.demo.com', // 设置基础URL
    timeout: 5000, // 设置请求超时时间
})

// 请求拦截器
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log('请求拦截器触发', config);//config是请求配置对象，包括url、method、headers等信息
        // 添加token到请求头（如果有的话）
        const token = store.getState().authSlice.token || sessionStorage.getItem('token');
        if (token) {
            // authentication:用于携带token的标准头部字段，bearer表示使用的是Bearer Token认证方案
            config.headers!['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
)
// 响应拦截器
http.interceptors.response.use((response: AxiosResponse) => {
    const res = response.data
    if (res.code !== 200) {
        if (res.code === 401) {
            console.log('token失效')
            store.dispatch({ type: 'authSlice/logout' })
            return Promise.reject(new Error('token失效'))
        }
         else {
            message.error(res.code + ":" + res.message);
            return Promise.reject(new Error(res.message))
        }
    }

    return response.data
})

export default http;