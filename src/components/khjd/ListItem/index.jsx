import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {storeCompleteList, storePendingList, storeKhjdTask} from '../../../redux/actions/khjd';
import './index.less';

class Item extends React.Component {
    static propTypes = {
        obj: PropTypes.object.isRequired,
        goToDetail: PropTypes.func.isRequired
    };

    render(){
        const {obj} = this.props;
        return (
            <>
                <div className="flex-list list-item" onClick={this.props.goToDetail}>
                    <div className="flex-inline item-name-status">
                        <div className="name">{obj.name}</div>
                        <div className="status">{obj.status}</div>
                    </div>
                    <div className="time">受理时间：{obj.acceptanceTime}</div>
                    <div className="reason">失败原因：{obj.reasonForFailure}</div>
                </div>
            </>
        );
    }
}

// ListItem ui 组件
class ListItem extends React.Component {

    obj = {
        id: '123',
        name: '广东龙胜阿里巴巴化学贸易有限公司尽调广东龙胜阿里巴巴化学贸',
        status: '审核完成',
        acceptanceTime: '2020-09-01',
        reasonForFailure: '照片不清晰'
    };

    state = {
        khjdList: [this.obj, this.obj, this.obj, this.obj, this.obj, this.obj, this.obj]
    };

    goToDetail = (item) => {
        console.log('storeKhjdTask', item);
        this.props.storeCompleteList(this.state.khjdList); // redux 保存已完成列表数据
        this.props.storePendingList(this.state.khjdList); // redux 保存待处理列表数据
        this.props.storeKhjdTask(item); // redux 保存任务项
        this.props.history.push(this.props.to);
    };

    render(){

        return (
            <div className="list">
                {
                    this.state.khjdList.map((item, index) => {
                        return <Item key={index} obj={item} goToDetail={() => this.goToDetail(item)}/>;
                    })
                }
            </div>
        );
    }
}

// listItem 容器组件
export default withRouter(
    connect(
        state => ({}),
        {storeCompleteList, storePendingList, storeKhjdTask}
    )(ListItem)
);
