import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import css from '@/style/todolist/index.module.less';

class ToDo extends React.Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '玩', done: false},
            {id: '003', name: '睡觉', done: false}
        ]
    };

    render(){
        return (
            <div className={css.todo}>
                <Header/>
                <TodoList/>
                <Footer/>
            </div>
        );
    };
}

export default ToDo;
