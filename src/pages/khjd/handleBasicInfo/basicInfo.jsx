import React                                               from 'react';
import {connect}                                           from 'react-redux';
import {withRouter}                                        from 'react-router-dom';
import {Cell, Checkbox, DateSelect, Input, Select, Switch} from 'zarm';

import './index.less';
import Navigation                                          from '../../../components/khjd/Navigation';
import {storeBasicInfo}                                    from '../../../redux/actions/khjd';
import {AreaCode}                                          from '../../../utils/constant';

class BasicInfo extends React.Component {
    dataSource = [ // 选择的币种
        {value: '12', label: '人民币'},
        {value: '123', label: '美元'}
    ];

    state = Object.assign({}, {
        customerName       : '', // 客户名称
        cardType           : '', // 证件类型
        cardId             : '', // 证件号码
        setUpDate          : '', // 成立日期
        creditId           : '', // 统一社会信用代码
        effectiveDate      : '', // 证件生效日期
        expiryDate         : '', // 证件到期日期
        longEffectiveDate  : false, // 证件是否长期有效
        registerAddress    : '', // 注册地址
        areaCode           : '', // 行政区域代码
        sameRegisterAddress: false,// 同注册地址
        officeAddress      : '', // 办公地址
        showRegisterCapital: false, // 标明注册资金
        registerCurrency   : '', // 注册币种
        registerCapital    : '', // 注册资本
        selectedCurrency   : '',// 选择的币种
        paidCapital        : '', // 实收资本金额(万)
        businessScope      : '', // 经营范围
        mainBusiness       : '' // 主营业务
    }, {...this.props.basicInfo});

    longEffective         = value => { // 证件是否长期有效
        let expiryDate = value ? '9999-12-31' : '';
        this.setState({longEffectiveDate: value, expiryDate});
    };
    sameRegisteredAddress = value => { // 办公地址 同 注册地址
        let officeAddress = value ? '注册地址' : '';
        this.setState({sameRegisterAddress: value, officeAddress});
    };
    toAreaCode            = () => { // 去 行政区域代码 选择页面

    };

    saveBasicInfo = () => { // 保存基本信息
        this.props.storeBasicInfo(this.state);
        console.log('this.props.khjdReducer', this.props.khjdReducer);
    };

    render(){
        // console.log('this.props.basicInfo', this.props.basicInfo);

        const savedAble = true || this.state.effectiveDate && this.state.expiryDate;

        return (
            <>
                <Navigation title="基本信息"/>
                <div className="basic-info-entry">
                    <Cell title="客户名称" description={this.state.customerName}/>
                    <Cell title="证件类型" description={this.state.cardType}/>
                    <Cell title="证件号码" description={this.state.cardId}/>
                    <Cell title="成立日期" description={this.state.setUpDate}/>
                    <Cell title="统一社会信用代码" description={this.state.creditId}/>
                    <Cell title="证件生效日期">
                        <DateSelect title="选择证件生效日期" placeholder="请选择日期" mode="date"
                                    value={this.state.effectiveDate}
                                    onOk={value => this.setState({effectiveDate: value})}
                        />
                    </Cell>
                    <Cell title="证件到期日期">
                        <Checkbox checked={this.state.longEffectiveDate}
                                  onChange={value => this.longEffective(value.target.checked)}>长期有效</Checkbox>
                        <DateSelect title="选择证件到期日期" placeholder="请选择日期" mode="date" max="2099-12-31"
                                    value={this.state.expiryDate} disabled={this.state.longEffectiveDate}
                                    onOk={value => this.setState({expiryDate: value})}
                        />
                    </Cell>
                    <Cell title="注册地址" description={this.state.registerAddress}/>
                    <Cell title="行政区域代码">
                        <Select dataSource={AreaCode} value={this.state.areaCode}
                                onOk={selected => {
                                    console.log('onOk', JSON.stringify(selected));
                                    let areaCode = selected[selected.length-1].value;
                                    this.setState({areaCode}, ()=>{
                                        console.log('areaCode', this.state.areaCode);
                                    })
                                }}
                                // displayRender={selected => {
                                //     console.log('displayRender', JSON.stringify(selected));
                                //     let code = selected[selected.length-1].value;
                                //     return code + selected.map(item => '---' + item.label);
                                // }}
                        />
                    </Cell>


                    <div className="office-address">
                        <Cell title="办公地址">
                            <Checkbox checked={this.state.sameRegisterAddress}
                                      onChange={value => this.sameRegisteredAddress(value.target.checked)}>
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
                                <Cell title="注册币种" description={this.state.registerCurrency}/>
                                <Cell title="注册资本金额(万)" description={this.state.registerCapital}/>
                                <Cell title="实收币种">
                                    <Select dataSource={this.dataSource} value={this.state.selectedCurrency}
                                            onOk={selected => this.setState({selectedCurrency: selected[0].value})}
                                    />
                                </Cell>
                                <Cell title="实收资本金额(万)">
                                    <Input placeholder="请输入实收资本金额" value={this.state.paidCapital}
                                           onChange={value => this.setState({paidCapital: value})}
                                    />
                                </Cell>
                            </>
                        }
                    </div>

                    <div className="business-scope">
                        <Cell title="经营范围">
                            <Input autoHeight showLength maxLength="200" type="text" rows="6"
                                   placeholder="请输入" value={this.state.businessScope}
                                   className={this.state.businessScope ? '' : 'not-input'}
                                   onChange={value => this.setState({businessScope: value})}
                            />
                        </Cell>
                    </div>

                    <div className="business-scope">
                        <Cell title="主营业务">
                            <Input autoHeight showLength maxLength="200" type="text" rows="6"
                                   placeholder="请输入主营业务" value={this.state.mainBusiness}
                                   className={this.state.mainBusiness ? '' : 'not-input'}
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
    state => ({
        khjdReducer: state.khjdReducer,
        basicInfo  : state.khjdReducer.basicInfo
    }),
    {storeBasicInfo}
)(BasicInfo));
