import React from 'react';
import PropTypes from 'prop-types';
import css from '@/style/todolist/todolist.module.less';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodoStatus: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    };

    render(){
        const {todos, changeTodoStatus, deleteTodo} = this.props;
        return (
            <div className={css.todolist}>
                {
                    todos.map(todo => {
                        return (
                            <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus}
                                  deleteTodo={deleteTodo}/>
                        );
                    })
                }
            </div>
        );
    }
}

class Item extends React.Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        changeTodoStatus: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    };

    state = {
        mouseEnter: false // 标识鼠标移入，移出
    };
    handleMouse = (mouseEnter) => { // 鼠标移入，移出事件
        return () => {
            this.setState({mouseEnter});
        };
    };
    handleChange = (id) => { // 勾选和取消勾选事件
        return (event) => {
            const todo = {id, done: event.target.checked};
            this.props.changeTodoStatus(todo);
        };
    };
    deleteTodoById = (id) => { // 删除todo 非柯里化实现
        if(confirm('确定删除吗？')){
            this.props.deleteTodo(id);
        }
    };

    render(){
        const {todo} = this.props;
        const {mouseEnter} = this.state;
        return (
            <div onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}
                 className={css.todo} style={{backgroundColor: mouseEnter ? '#ddd' : '#fff'}}>
                <input onChange={this.handleChange(todo.id)} type="checkbox" checked={todo.done}/>
                <span>{todo.name}</span>
                <button onClick={() => this.deleteTodoById(todo.id)}
                        style={{display: mouseEnter ? 'unset' : 'none'}}>删除
                </button>
            </div>
        );
    }
}
