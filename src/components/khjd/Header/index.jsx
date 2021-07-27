import React from 'react';
import './index.less';

export default class Header extends React.Component {
    state = {
        active: true,
        statusValue: '全部'
    };

    changeActive = () => {
        const active = this.state.active;
        this.setState({active: !active});
    };

    render(){
        const {active, statusValue} = this.state;
        return (
            <>
                <div className="flex-inline header-theme">
                    <div>
                        <div className={['label', active ? 'label-active' : ''].join(' ')} onClick={() => {
                            this.changeActive();
                        }}>
                            代办列表
                        </div>
                        <div className={active ? 'label-bottom-line' : ''}/>
                    </div>
                    <div>
                        <div className={['label', active ? '' : 'label-active'].join(' ')} onClick={() => {
                            this.changeActive();
                        }}>
                            已办列表
                        </div>
                        <div className={active ? '' : 'label-bottom-line'}/>
                    </div>
                </div>
                <div className="flex-inline header-status">
                    <div className="header-status-label">当前状态：</div>
                    <div className="header-status-value">{statusValue}</div>
                    <div className="header-status-arrow"/>
                </div>
            </>
        );
    }
}
