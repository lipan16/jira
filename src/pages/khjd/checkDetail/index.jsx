import React from 'react';

import {connect}         from 'react-redux';
import {withRouter}      from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard/lib/Component';
import {Toast}           from 'zarm';

import './index.less';
import {dataMasking}     from '../../../utils/func';
import {RouterPath}      from '../../../utils/constant';
import TaskWander        from '../../../components/khjd/TaskWander';
import LpCell            from '../../../components/khjd/Cell';
import copyImg           from '../../../assets/copy.svg';
import backSvg           from '../../../assets/back_white.svg';
import checkDetailSvg         from '../../../assets/checkDetail.svg';
import arrowSvg from '../../../assets/arrow.svg';

class CheckDetail extends React.Component {

    state = {
        telephoneMasking: true
    };

    toTask      = (path) => {
        this.props.history.push(path);
    };
    showMasking = (telephoneMasking) => {
        this.setState({telephoneMasking});
    };

    render(){
        const {khjdTask}         = this.props.khjdReducer;
        const {telephoneMasking} = this.state;
        const taskWanderList     = [{
            taskStatus: 'finished',
            taskName  : '任务受理',
            taskPerson: 'li',
            taskDuty  : '负责人',
            taskTime  : '2021-08-05 19:33:43'
        }, {
            taskStatus: 'unfinished',
            taskName  : '任务受理',
            taskPerson: '立方',
            taskDuty  : '负责人',
            taskTime  : '2021-08-04 12:53:03'
        }];

        return (
            <>
                <div className="flex-inline navigation check-detail-nav">
                    <img src={backSvg} alt="" onClick={()=>this.props.history.go(-1)}/>
                    <div className="strong"/>
                    <div className="title">尽调任务详情</div>
                    <div className="strong"/>
                    <img src='' alt=""/>
                </div>

                <div className="flex-list detail">
                    <div className="blue-bg"/>

                    <div className="header flex-list flex-grow">
                        <div className="name">{khjdTask.name}</div>
                        <div className="number">任务编号：{khjdTask.id}</div>

                        <div className="flex-inline lp-cell">
                            <div className="label">联系电话</div>
                            <div className="value">
                                <span onClick={() => this.showMasking(!telephoneMasking)}>
                                    {dataMasking('12345678998', telephoneMasking ? 'phone' : '')}
                                </span>
                                <CopyToClipboard text="1234567899111118"
                                                 onCopy={() => Toast.show({content: '已复制', stayTime: 1000})}>
                                    <img className="copy-img" src={copyImg} alt=""/>
                                </CopyToClipboard>
                            </div>
                        </div>

                        <LpCell label="当前状态" value="未办理" className="status"/>
                        <LpCell label="地址" value="广东龙胜阿里巴巴化学贸易有限公司尽调广东龙胜阿里巴巴化学贸"/>

                        <div className='flex-inline pdf'>
                            <img src={checkDetailSvg} className="svg" alt=""/>
                            <div>查看客户信息详情</div>
                            <img src={arrowSvg} className="svg" alt=""/>
                        </div>

                        <div className="btns">
                            <div className="btn handle"
                                 onClick={() => alert('审核通过')}>审核通过
                            </div>
                            <div className="btn transfer"
                                 onClick={() => this.toTask(RouterPath.taskTransfer)}>审核不通过
                            </div>
                        </div>

                        <div className="strong"/>

                        <div className="task-wander">
                            <TaskWander title="任务流转" taskWanderList={taskWanderList}/>
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
    ), {})(CheckDetail)
);
