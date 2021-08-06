import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Navigation from '../../../components/khjd/Navigation';
import './index.less';

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
                <div className={['status', status ? 'status-sure' : ''].join(' ')}>
                    {status ? '已确认' : '未完成'}
                </div>
            </div>
        );
    }
}

class TaskHandle extends React.Component {
    generateReport = () => {
        console.log('生成尽职调查报告');
    };

    render(){
        console.log(this.props.khjdReducer);
        const {khjdTask, taskInfoEntry} = this.props.khjdReducer;
        const generateReportClickable = taskInfoEntry.every(item => {
            return !item.taskStatus;
        });

        return (
            <>
                <Navigation title="尽调任务办理"/>

                <div className="task flex-list">
                    <div className="blue-bg"/>

                    <div className="context">
                        <div className="header">
                            <div className="name">{khjdTask.name}</div>
                            <div className="number">任务编号：{khjdTask.id}</div>
                        </div>

                        <TaskItem item={taskInfoEntry[0]}/>
                        <TaskItem item={taskInfoEntry[1]}/>
                        <TaskItem item={taskInfoEntry[2]}/>
                        <TaskItem item={taskInfoEntry[3]}/>

                        <div
                            className={['btn', generateReportClickable ? 'finished' : ''].join(' ')}
                            onClick={() => generateReportClickable && this.generateReport()}>生成尽职调查报告
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default connect(state => (
    {khjdReducer: state.khjdReducer}
), {})(TaskHandle);
