import React        from 'react';
import {connect}    from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Cell}       from 'zarm';

import Navigation from '../../../components/khjd/Navigation';

import './index.less';

class HandleBasicInfo extends React.Component {
    gotoInfoDetail = (info) => {
        console.log('gotoInfoDetail', info);
        this.props.history.push(info.path);
    };
    saveInfo       = () => {

    };

    render(){
        console.log(this.props);
        const {customerBasicInfo} = this.props;
        const savedAble           = customerBasicInfo.every(item => item.status);
        return (
            <>
                <Navigation title="客户基本信息"/>
                <div className="basic-info flex-list">
                    {
                        customerBasicInfo.map((info, index) =>
                            <Cell hasArrow key={index} title={info.name}
                                  description={info.status ? '已保存' : '未保存'}
                                  className={info.status ? 'info-saved' : 'info-unsaved'}
                                  onClick={() => this.gotoInfoDetail(info)}
                            />
                        )
                    }

                    <div className={['unsaved', savedAble ? 'saved' : ''].join(' ')}
                         onClick={() => savedAble && this.saveInfo()}>保存
                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(connect(
    state => ({customerBasicInfo: state.khjdReducer.customerBasicInfo}),
    {}
)(HandleBasicInfo));
