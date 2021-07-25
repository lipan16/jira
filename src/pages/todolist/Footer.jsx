import React from 'react';
import PropTypes from 'prop-types';
import css from '@/style/todolist/footer.module.less';

class Footer extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkedAll: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    };
    handleChangeAll = (event) => {
        this.props.checkedAll(event.target.checked);
    };
    handleClearAllDone = () => {
        this.props.clearAllDone();
    };

    render(){
        const {todos} = this.props;
        const len = todos.length;
        const done = todos.reduce((prev, current) => {
            return prev + (current.done ? 1 : 0);
        }, 0);

        return (
            <div className={css.footer}>
                <label>
                    <input type="checkbox" checked={len === done && len !== 0}
                           onChange={this.handleChangeAll}/>
                </label>
                <span>
                    <span>已完成{done}</span>/全部{len}
                </span>
                <button onClick={this.handleClearAllDone}>清除全部已完成任务</button>
            </div>
        );
    };
}

export default Footer;
