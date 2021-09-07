import Axios from 'axios';

const pendingRequest = new Map();// 请求

function generateReqKey(config){
    const {method, url, params, data} = config;
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&');
}

function addPendingRequest(config){ // 把当前请求信息添加到 pendingRequest 对象中
    const requestKey   = generateReqKey(config);
    config.cancelToken = config.cancelToken || new Axios.CancelToken(cancel => {
        if(!pendingRequest.has(requestKey)){
            pendingRequest.set(requestKey, cancel);
        }
    });
}

function removePendingRequest(config){ // 检查是否存在重复请求，若存在则取消已发出的请求
    const requestKey = generateReqKey(config);
    if(pendingRequest.has(requestKey)){
        const cancelToken = pendingRequest.get(requestKey);
        cancelToken(requestKey);
        pendingRequest.delete(requestKey);
    }
}

const service = Axios.create({
    baseURL: '',
    timeout: 1000, // request timeout 1s
    headers: {
        'Content-Type'               : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    }
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 如果有token 就携带token
    const token = window.localStorage.getItem('token');
    if(token){
        config.headers.Authorization = token;
    }
    removePendingRequest(config);
    addPendingRequest(config);
    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
   removePendingRequest(response.config)
    if(response.status && response.status === 200){ // 接口请求调用成功
        if(response.data.flags === 200){ //业务逻辑调用成功
            return response.data;
        }
        return Promise.reject(new Error(response.data.info || 'Error'));
    }
    return Promise.reject(new Error('接口调用Error'));
}, error => {
    console.log(error);
    removePendingRequest(error.config || {})
    return Promise.reject(error);
});

export default service;
