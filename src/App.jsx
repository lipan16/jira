import React                          from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ConfigProvider}               from 'zarm';
import 'zarm/dist/zarm.css';

import routes from './router';
import About  from './components/test/about';

function App(){
    return (
        <ConfigProvider>
            <BrowserRouter>
                <Switch>
                    {
                        routes.map(route =>
                            // 使用exact来实现精准匹配
                            <Route exact key={route.path} path={route.path}>
                                <route.component/>
                            </Route>
                        )
                    }
                    {/*未匹配到路由时的友好页面*/}
                    <Route component={About}/>
                </Switch>
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;
