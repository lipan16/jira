import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class ListItem extends React.Component {

    obj = {
        name: '广东龙胜阿里巴巴化学贸易有限公司尽调广东龙胜阿里巴巴化学贸',
        status: '审核完成',
        acceptanceTime: '2020-09-01',
        reasonForFailure: '照片不清晰'
    };

    state = {
        khjdList: [this.obj, this.obj, this.obj, this.obj, this.obj, this.obj, this.obj]
    };

    goToDetail = () => {
        this.props.history.push('/khjd/task');
    };

    render(){

        return (
            <div className="list">
                {
                    this.state.khjdList.map((item, index) => {
                        return <Item key={index} obj={item} goToDetail={this.goToDetail}/>;
                    })
                }
            </div>
        );
    }
}

class Item extends React.Component {
    static propTypes = {
        obj: PropTypes.object.isRequired,
        goToDetail: PropTypes.func.isRequired
    };

    render(){
        const {obj} = this.props;
        return (
            <>
                <div className="flex-list list-item" onClick={() =>
                    this.props.goToDetail()
                }>
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
