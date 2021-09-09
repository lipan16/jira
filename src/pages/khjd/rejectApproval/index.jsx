import React        from 'react';

import './index.less';
import Navigation   from '../../../components/khjd/Navigation';
import backSvg      from '../../../assets/back_white.svg';
import {Input}      from 'zarm';
import {RouterPath} from '../../../utils/constant';

class RejectApproval extends React.Component {

    state = {
        reasons: ''
    };

    render(){
        return (<>
            <Navigation title="尽调任务办理" className="check-detail-nav" backSvg={backSvg}/>
            <div className="flex-list flex-grow reject-approval">
                <div className="blue-bg"/>

                <div className="header flex-list">
                    <div className="title">审核不通过原因填写</div>
                    <Input autoHeight showLength rows={10} maxLength={2000} placeholder="审核不通过原因"
                           value={this.state.reasons} onChange={value => this.setState({reasons: value})}/>

                    <div className="btns">
                        <div className="btn handle"
                             onClick={() => alert('12')}>确认
                        </div>
                        <div className="btn cancel"
                             onClick={() => alert('12')}>取消
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default RejectApproval;
