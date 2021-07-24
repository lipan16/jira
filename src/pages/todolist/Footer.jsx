import React from 'react';
import css from '@/style/todolist/footer.module.less';
class Footer extends React.Component {
    render(){
        return (
            <div className={css.footer}>
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
                    <span>已完成0</span>/全部0
                </span>
                <button>清除全部已完成任务</button>
            </div>
        );
    };
}

export default Footer;
