import React from "react";
import css from './style.css';

/*var TodoList = React.createClass({
    getInitialState: function(){
        return{
            todolist:[]
        };
    },

    handleAdd: function(mes){
        this.setState({
            todolist: mes
        });
    },

    render: function(){
        return(
            <div className="container">
                <div className='box1'>
                    <h2 className="top">react-todolist</h2>
                    <TypeNew add={this.handleAdd} todo={this.state.todolist} />
                    <ListTodo todo={this.state.todolist} del={this.handleAdd} />
                </div>
            </div>
            );
    }
});



var TypeNew = React.createClass({
    addContent: function(e){
        e.preventDefault();
        var tet = this.refs.content.value.trim();
        if(tet!=''){
            this.props.todo.push(tet);
            this.props.add(this.props.todo);
        }
        this.refs.content.value='';
    },

    render: function(){
        return(
            <form onSubmit={this.addContent} className="form">
                <input type="text" ref="content" placeHolder="请输入您的todolist" className="input" />
                <input type="submit" value="添加" className="add" />
            </form>
        );  
    }
});


var ListTodo = React.createClass({
    delContent: function(e){
        var i = e.target.getAttribute("data-index");
        this.props.todo.splice(i,1);
        this.props.del(this.props.todo);
    },

    render: function(){
        return(
            <ul id="todo-list">
            {
                this.props.todo.map(function(mes,i){
                    return(
                        <li className="content">
                            <label>{mes}</label>
                            <span className="del" onClick={this.delContent} data-index={i}>×</span>
                        </li>
                    );
                }.bind(this))
            }
            </ul>
        );
    }
});

module.exports = TodoList;*/

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             todolist:[]
        }
    }

    handleAdd(mes){
        this.setState({
            todolist: mes
        });
    }

    render(){
         return(
            <div className="container">
                <div className='box1'>
                    <h2 className="top">react-todolist</h2>
                    <TypeNew add={this.handleAdd.bind(this)} todo={this.state.todolist} />
                    <ListTodo todo={this.state.todolist} del={this.handleAdd.bind(this)} />
                </div>
            </div>
        );
    }
};

class TypeNew extends React.Component{
    addContent(e){
         e.preventDefault();
        var tet = this.refs.content.value.trim();
        if(tet!=''){
            this.props.todo.push(tet);
            this.props.add(this.props.todo);
        }
        this.refs.content.value='';
    }

    render(){
        return(
            <form onSubmit={this.addContent.bind(this)} className="form">
                <input type="text" ref="content" placeHolder="请输入您的todolist" className="input" />
                <input type="submit" value="添加" className="add" />
            </form>
        );  
    }
 };

class ListTodo extends React.Component{
    delContent(e){
        var i = e.target.getAttribute("data-index");
        this.props.todo.splice(i,1);
        this.props.del(this.props.todo);
    }

    render(){
         return(
            <ul id="todo-list">
            {
                this.props.todo.map(function(mes,i){
                    return(
                        <li className="content">
                            <label>{mes}</label>
                            <span className="del" onClick={this.delContent.bind(this)} data-index={i}>×</span>
                        </li>
                    );
                }.bind(this))
            }
            </ul>
        );
    }
}
