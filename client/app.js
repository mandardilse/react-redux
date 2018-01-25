// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import Main from './components/main.component';
import AllPosts from './components/post.all.component';
import SinglePost from './components/post.single.component';
import App from './components/mainScript.js';

var router = <Provider store={store} >
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AllPosts}></IndexRoute>
            <Route path="/singlepost/:code" component={SinglePost}></Route>
        </Route>
    </Router>
</Provider>

ReactDOM.render(router, document.getElementById('content'));