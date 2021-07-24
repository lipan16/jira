import React from 'react';
import css from '@/style/todolist/header.module.less';
class Header extends React.Component {

    render(){
        return (
            <div className={css.header}>
                <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    };
}

export default Header;
