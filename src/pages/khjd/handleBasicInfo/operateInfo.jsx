import React                 from 'react';

import './index.less';
import {connect}             from 'react-redux';
import Navigation            from '../../../components/khjd/Navigation';
import {Cell, Input, Select} from 'zarm';
import LpSwitch              from '../../../components/khjd/Switch';
import warnImg               from '../../../assets/warn.svg';

class OperateInfo extends React.Component {
    OperateInfo = [ //经营情况
        {value: '01', label: '在营'},
        {value: '02', label: '停业'},
        {value: '03', label: '吊销'}
    ];

    state = {
        operateInfo: '', // 经营情况
        operateTime: '0年7个月 154天', // 持续经营时间
        staffNumber: '', // 员工人数
        totalAssets: '', // 总资产
        saleIncome : '', // 预计本年销售收入
        settleFunds: ''// 月均结算资金
    };

    render(){
        let {operateInfo, operateTime, staffNumber, totalAssets, saleIncome, settleFunds} = this.state;

        let savedAble = operateInfo && staffNumber && totalAssets && saleIncome && settleFunds;
        return (
            <>
                <Navigation title="经营情况"/>
                <div className="customer-type">
                    <Cell title="经营情况">
                        <Select dataSource={this.OperateInfo}
                                onOk={selected => this.setState({operateInfo: selected[0].value})}
                        />
                    </Cell>
                    <div className="operate-time">
                        持续经营时间
                        <span>{operateTime}</span>
                    </div>
                    <Cell title="员工数(人)">
                        <Input clearable type="text" placeholder="请输入" value={staffNumber}
                               onChange={(value) => this.setState({staffNumber: value})}
                        />
                    </Cell>
                    <Cell title="总资产(万)">
                        <Input clearable type="text" placeholder="请输入" value={totalAssets}
                               onChange={(value) => this.setState({totalAssets: value})}
                        />
                    </Cell>
                    <Cell title="预计本年销售收入(万)">
                        <Input clearable type="text" placeholder="请输入" value={saleIncome}
                               onChange={(saleIncome) => this.setState({saleIncome})}
                        />
                    </Cell>
                    <Cell title="月均结算资金(万)">
                        <Input clearable type="text" placeholder="请输入" value={settleFunds}
                               onChange={(settleFunds) => this.setState({settleFunds})}
                        />
                    </Cell>

                    <div className={['unsaved', savedAble ? 'saved' : ''].join(' ')}
                         onClick={() => savedAble && this.saveBasicInfo()}>保存
                    </div>

                </div>
            </>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(OperateInfo);
