import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../page/home/home';
import index from '../page/index/index';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/index" component={index}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
