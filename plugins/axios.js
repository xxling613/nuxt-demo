import axios from 'axios'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://api.apiopen.top/';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://api.apiopen.top/';
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

// export default function({ $axios, redirect }) {
//     $axios.onRequest(config => {
//         console.log('Making request to ' + config.url)
//     })

//     $axios.onError(error => {
//         const code = parseInt(error.response && error.response.status)
//         if (code === 400) {
//             redirect('/400')
//         }
//     })
// }