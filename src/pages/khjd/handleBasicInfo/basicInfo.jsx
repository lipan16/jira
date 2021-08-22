import React                                               from 'react';
import {connect}                                           from 'react-redux';
import {withRouter}                                        from 'react-router-dom';
import {Cell, Checkbox, DateSelect, Input, Select, Switch} from 'zarm';

import './index.less';
import Navigation                                          from '../../../components/khjd/Navigation';

class BasicInfo extends React.Component {
    dataSource = [
        {label: '人民币', value: 'Basic Info'},
        {label: '美元', value: 'Basic Info1'}
    ];
    state      = {
        effectiveDate      : '2021-09-01', // 证件生效日期
        expiryDate         : '', // 证件到期日期
        longEffectiveDate  : false, // 证件是否长期有效
        officeAddress      : '', // 办公地址
        showRegisterCapital: true, // 标明注册资金
        selectedCurrency   : {},// 选择的币种
        paidCapital        : '', // 实收资本金额(万)
        businessScope      : '', // 经营范围
        mainBusiness       : '' // 主营业务
    };

    longEffective         = value => { // 证件是否长期有效
        let expiryDate = value ? '9999-12-31' : '';
        this.setState({longEffectiveDate: value, expiryDate});
    };
    sameRegisteredAddress = value => { // 办公地址 同 注册地址
        let officeAddress = value ? '注册地址' : '';
        this.setState({officeAddress});
    };
    saveBasicInfo         = () => { // 保存基本信息

    };

    render(){

        const savedAble = this.state.effectiveDate && this.state.expiryDate;

        return (
            <>
                <Navigation title="基本信息"/>
                <div className="basic-info-entry">
                    <Cell title="客户名称" description=""/>
                    <Cell title="证件类型" description=""/>
                    <Cell title="证件号码" description=""/>
                    <Cell title="成立日期" description=""/>
                    <Cell title="统一社会信用代码" description=""/>
                    <Cell title="证件生效日期">
                        <DateSelect title="选择证件生效日期" placeholder="请选择日期" mode="date"
                                    value={this.state.effectiveDate}
                                    onOk={value => this.setState({effectiveDate: value})}
                        />
                    </Cell>
                    <Cell title="证件到期日期" description="">
                        <Checkbox onChange={value => this.longEffective(value.target.checked)}>长期有效</Checkbox>
                        <DateSelect title="选择证件到期日期" placeholder="请选择日期" mode="date" max="2099-12-31"
                                    value={this.state.expiryDate} disabled={this.state.longEffectiveDate}
                                    onOk={value => this.setState({expiryDate: value})}
                        />
                    </Cell>
                    <Cell title="注册地址" description=""/>
                    <Cell title="行政区域代码" hasArrow/>

                    <div className="office-address">
                        <Cell title="办公地址">
                            <Checkbox onChange={value => this.sameRegisteredAddress(value.target.checked)}>
                                同注册地址
                            </Checkbox>
                        </Cell>
                        <Input autoHeight showLength type="text" rows="4" maxLength="200" placeholder="办公地址"
                               className={this.state.officeAddress ? '' : 'not-input'}
                               value={this.state.officeAddress}
                               onChange={value => this.setState({officeAddress: value})}
                        />
                    </div>

                    <div className="show-register-capital">
                        <Cell title="标明注册资金" description={
                            <Switch checked={this.state.showRegisterCapital}
                                    onChange={value => this.setState({showRegisterCapital: value})}/>
                        }/>
                        {
                            this.state.showRegisterCapital &&
                            <>
                                <Cell title="注册币种" description=""/>
                                <Cell title="注册资本金额(万)" description=""/>
                                <Cell title="实收币种">
                                    <Select
                                        dataSource={this.dataSource}
                                        onOk={selected => this.setState({selectedCurrency: selected[0]})}
                                    />
                                </Cell>
                                <Cell title="实收资本金额(万)">
                                    <Input type="text" placeholder="请输入实收资本金额"
                                           value={this.state.paidCapital}
                                           onChange={value => this.setState({paidCapital: value})}
                                    />
                                </Cell>
                            </>

                        }
                    </div>

                    <div className="business-scope">
                        <Cell title="经营范围">
                            <Input autoHeight showLength maxLength="200" type="text" rows="6" placeholder="请输入"
                                   className={this.state.businessScope ? '' : 'not-input'}
                                   value={this.state.businessScope}
                                   onChange={value => this.setState({businessScope: value})}
                            />
                        </Cell>
                    </div>

                    <div className="business-scope">
                        <Cell title="主营业务">
                            <Input autoHeight showLength maxLength="200" type="text" rows="6" placeholder="请输入主营业务"
                                   className={this.state.mainBusiness ? '' : 'not-input'}
                                   value={this.state.mainBusiness}
                                   onChange={value => this.setState({mainBusiness: value})}
                            />
                        </Cell>
                    </div>

                    <div className={['unsaved', savedAble ? 'saved' : ''].join(' ')}
                         onClick={() => savedAble && this.saveBasicInfo()}>保存
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(connect(
    state => ({}),
    {}
)(BasicInfo));
