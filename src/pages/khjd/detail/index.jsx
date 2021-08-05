import React from 'react';
import {connect} from 'react-redux';

import Navigation from '../../../components/khjd/Navigation';
import LpCell from '../../../components/khjd/Cell';
import './index.less';

class Detail extends React.Component {

    render(){
        const {khjdTask} = this.props.khjdReducer;
        return (
            <>
                <Navigation title="尽调任务详情"/>
                <div className="detail flex-list">
                    <div className="blue-bg"/>

                    <div className="header flex-list flex-grow">
                        <div className="name">{khjdTask.name}</div>
                        <div className="number">任务编号：{khjdTask.id}</div>

                        <LpCell label="联系电话" value="12345678998"/>
                        <LpCell label="当前状态" value="未办理"/>
                        <LpCell label="地址" value="广东龙胜阿里巴巴化学贸易有限公司尽调广东龙胜阿里巴巴化学贸"/>

                        <div className="btn handle">办理</div>
                        <div className="btn transfer">转让</div>
                        <div className='strong'/>

                        <div className="task-wander">
                            任务流转
                            <div>123</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default connect(state => (
    {khjdReducer: state.khjdReducer}
), {})(Detail);
