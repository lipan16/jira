import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://cn.vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    base: './', // 开发或生产环境服务的公共基础路径
    resolve: {
        alias: [ //设置别名
            {
                find: /@\//,
                replacement: path.join(__dirname, './src/')
            }
        ]
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true // 支持内联 JavaScript
            }
        },
        modules: {
            localsConvention: 'camelCase'
        }
    },
    server: {
        // port: 4000, //启动端口
        // open: true, //开启浏览器
        proxy: { //代理
            // ws:false, //webSocket
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true, //发送请求头host会被设置target(http://localhost:8080/),避免后端做什么限制
                pathReWrite: { // 重写url地址
                    '^/': '/'
                }
            }
        },
        cors: true
    }
});
