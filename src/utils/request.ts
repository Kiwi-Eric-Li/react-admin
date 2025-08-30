import { ParamEncoder } from './../../node_modules/axios/index.d';
import axios from 'axios'
import { message } from "antd";

const instance = axios.create({
    baseURL: "",
    timeout: 3000,
    timeoutErrorMessage: "请求超时，请刷新重试！"
});

// 请求拦截
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use((response) => {
    const data = response.data;
    if(data.code === 40001){
        window.location.href = "/login";
    } else if(data.code !== 200){
        const [messageApi, contextHolder] = message.useMessage();
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    }
    return data;
}, (error) => {
    return Promise.reject(error);
});

const get = (url: string, params?: object) => {
    return instance.get(url, {params});
}
const post = (url: string, params?: object) => {
    return instance.post(url, {params});
}
const put = (url: string, params?: object) => {
    return instance.put(url, {params});
}
const del = (url: string, params?: object) => {
    return instance.delete(url, {params});
}

export {get, post, put, del};