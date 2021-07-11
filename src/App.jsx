import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from './router';
import Home from './pages/Home';

function App(){
    return (
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
    );
}

export default App;
