import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from './router';
import Home from './pages/Home';

import {ConfigProvider} from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';

function App(){
    return (
        <ConfigProvider locale={zhCN}>
            <BrowserRouter>
                <Home/>
                <Switch>
                    {
                        routes.map(route =>
                            // 使用exact来实现精准匹配
                            <Route exact key={route.path} path={route.path}>
                                <route.component/>
                            </Route>
                        )
                        // <Route component={NotFound}></Route>
                    }
                </Switch>
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;
