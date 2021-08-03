import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Navigation from '../../../components/khjd/Navigation';
import './index.less';
import src1 from '../../../assets/src1.svg';
import src2 from '../../../assets/src2.svg';
import src3 from '../../../assets/src3.svg';
import src4 from '../../../assets/src4.svg';

class TaskItem extends React.Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    };

    render(){
        const {src, name, status} = this.props.item;
        return (
            <div className="task-item flex-inline">
                <img src={src} className="svg"/>
                <div className="name">{name}</div>
                <div className={['status', status ? 'status-sure' : ''].join(' ')}>已确认</div>
            </div>
        );
    }
}

class KhjdTask extends React.Component {

    render(){
        console.log(this.props.khjdReducer);
        const {khjdTask} = this.props.khjdReducer;
        const obj1 = {src: src1, name: '客户基本信息录入', status: false};
        const obj2 = {src: src2, name: '客户风险评估建议', status: true};
        const obj3 = {src: src3, name: '尽职调查情况录入', status: true};
        const obj4 = {src: src4, name: '尽职调查照片拍摄', status: false};
        return (
            <>
                <Navigation title="尽调任务办理" show={false}/>

                <div className="task">
                    <div className="blue-bg"/>

                    <div className="context">
                        <div className="header">
                            <div className="name">{khjdTask.name}</div>
                            <div className="number">任务编号：{khjdTask.id}</div>
                        </div>

                        <TaskItem item={obj1}/>
                        <TaskItem item={obj2}/>
                        <TaskItem item={obj3}/>
                        <TaskItem item={obj4}/>

                        <div className="btn">生成尽职调查报告</div>
                        {/*<div className="btn finished">审核完成</div>*/}
                        {/*<div className="btn failed">审核失败</div>*/}
                    </div>
                </div>
            </>
        );
    }
}

export default connect(state => (
    {khjdReducer: state.khjdReducer}
), {})(KhjdTask);
