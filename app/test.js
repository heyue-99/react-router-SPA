import React from 'react';
import { Link, IndexLink } from 'react-router';
require('./style.css')

// 定义App组件
// 增加 this.props.children 用来渲染子组件
export default class App extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="list">
        <div className="left">
            <div className='bac'></div>
            <ul role="nav" className="leftul">
            	<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            	<li><Link to="/weiboform" activeClassName="active">weibo-form</Link></li>
            	<li><Link to="/todolist" activeClassName="active">todolist</Link></li>
                <li><Link to="/music" activeClassName="active">music-player</Link></li>
            </ul>
            <div className="mygit">
                <a href="https://github.com/heyue-99">Follow me on Github</a>
            </div>
        </div>
            {this.props.children}
         </div>
        );
    }
}