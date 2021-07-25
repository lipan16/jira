import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import css from '@/style/todolist/index.module.less';

class ToDo extends React.Component {
    state = {
        todos: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '玩', done: false},
            {id: 3, name: '睡觉', done: false}
        ]
    };

    addTodo = (todo) => { // 添加一条todo
        console.log('app: addTodo', todo);
        const {todos} = this.state;
        const newTodos = [todo, ...todos];
        this.setState({todos: newTodos});
    };
    changeTodoStatus = (todo) => { // 修改todo状态
        console.log('app: changeTodoStatus', todo);
        const todos = this.state.todos.map(item => {
            if(item.id === todo.id){
                return {...item, done: todo.done};
            }
            return item;
        });
        this.setState({todos});
    };
    deleteTodo = (id) => { // 删除一个todo
        const todos = this.state.todos.filter(item => item.id !== id);
        this.setState({todos});
    };
    checkedAll = (done) => { // 全部标为已完成
        const todos = this.state.todos.map(item => {
            return {...item, done: done};
        });
        this.setState({todos});
    };
    clearAllDone = () => { // 清楚所有已经完成的
        const todos = this.state.todos.filter(item => !item.done);
        this.setState({todos});
    };

    render(){
        return (
            <div className={css.todo}>
                <Header len={this.state.todos.length + 1} addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} changeTodoStatus={this.changeTodoStatus}
                          deleteTodo={this.deleteTodo}/>
                <Footer todos={this.state.todos} checkedAll={this.checkedAll}
                        clearAllDone={this.clearAllDone}/>
            </div>
        );
    }

;
}

export default ToDo;
