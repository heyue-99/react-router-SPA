import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './test';
import TodoList from './todolist';
import ListTodo from './weiboform';
import Home from './home';
import Music from './music'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={Home} />
        	<Route path="/weiboform" component={ListTodo} />
       		<Route path="/todolist" component={TodoList} />
       		<Route path="/music" component={Music} />
       	</Route>
    </Router>
), document.getElementById('app'));