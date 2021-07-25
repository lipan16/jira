import React from 'react';
import PropTypes from 'prop-types';
import css from '@/style/todolist/header.module.less';

class Header extends React.Component {

    static propTypes = {
        len: PropTypes.number.isRequired,
        addTodo: PropTypes.func.isRequired
    };

    handleKeyup = (event) => { // 键盘输入事件
        const {keyCode, target} = event;
        if(keyCode !== 13){
            return;
        }
        if(!target.value.trim()){
            alert('输入不能为空');
            return;
        }

        const obj = {id: this.props.len, name: target.value, done: false};
        this.props.addTodo(obj);
        target.value = '';
    };

    render(){
        return (
            <div className={css.header}>
                <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    };
}

export default Header;
