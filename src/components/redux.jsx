import React from 'react';
import {connect} from 'react-redux';
import {addAction} from '../redux/actions/khjd_action';

class reduxCount extends React.Component {

    render(){
        return (
            <>
                <h2>当前和为：{this.props.count}</h2>
                <button onClick={() => this.props.add(1)}>点我+1</button>
            </>
        );
    };
}

export default connect(
    // 映射状态
    store => ({count: store}),
    // 映射操作状态的方法
    dispatch => ({
        add: number => dispatch(addAction(number))
    })
    // {
    //     add: addAction
    // }
)(reduxCount);
