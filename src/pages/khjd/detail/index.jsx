import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {RouterPath} from '../../../utils/constant';
import Navigation from '../../../components/khjd/Navigation';
import LpCell from '../../../components/khjd/Cell';
import TaskWander from '../../../components/khjd/TaskWander';
import './index.less';

class Detail extends React.Component {

    toTask = (path) => {
        this.props.history.push(path);
    };


    render(){
        const {khjdTask} = this.props.khjdReducer;
        const taskWanderList = [{
            taskStatus: 'finished',
            taskName: '任务受理',
            taskPerson: 'li',
            taskDuty: '负责人',
            taskTime: '2021-08-05 19:33:43'
        },{
            taskStatus: 'unfinished',
            taskName: '任务受理',
            taskPerson: '立方',
            taskDuty: '负责人',
            taskTime: '2021-08-04 12:53:03'
        }]
        return (
            <>
                <Navigation title="尽调任务详情"/>
                <div className="detail flex-list">
                    <div className="blue-bg"/>

                    <div className="header flex-list flex-grow">
                        <div className="name">{khjdTask.name}</div>
                        <div className="number">任务编号：{khjdTask.id}</div>

                        <LpCell label="联系电话" value="12345678998"/>
                        <LpCell label="当前状态" value="未办理" className='status'/>
                        <LpCell label="地址" value="广东龙胜阿里巴巴化学贸易有限公司尽调广东龙胜阿里巴巴化学贸"/>

                        <div className="btns">
                            <div className="btn handle"
                                 onClick={() => this.toTask(RouterPath.taskHandle)}>办理
                            </div>
                            <div className="btn transfer"
                                 onClick={() => this.toTask(RouterPath.taskTransfer)}>转让
                            </div>
                        </div>

                        <div className="strong"/>

                        <div className="task-wander">
                            <TaskWander title="任务流转" taskWanderList={taskWanderList} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default withRouter(
    connect(state => (
        {khjdReducer: state.khjdReducer}
    ), {})(Detail)
);
