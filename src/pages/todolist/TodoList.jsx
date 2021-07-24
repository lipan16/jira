import React from 'react';
import css from '@/style/todolist/todolist.module.less';

class TodoList extends React.Component {
    state = {
        data: [
            {id: 1, title: 'lipan'},
            {id: 2, title: 'lipan'}
        ]
    };

    render(){
        const data = this.state.data;
        return (
            <div className={css.todolist}>
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className={css.todo}>
                                <input type="checkbox"/>
                                <span>xxx</span>
                                <button>删除</button>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default TodoList;
