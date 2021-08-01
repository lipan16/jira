import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './redux/store';
import './main.less';
import './utils/rem';


ReactDOM.render(
    //开启严格模式
    <React.StrictMode>
        {/*此处用provider包裹app，为了app的所有后代容器组件都能接收store*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// 只要store有改动就重新渲染整个页面（diff算法存在）
// store.subscribe(() => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// });
