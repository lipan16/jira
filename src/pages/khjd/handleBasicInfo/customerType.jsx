import React                 from 'react';
import {connect}             from 'react-redux';
import {Cell, Input, Select} from 'zarm';

import './index.less';
import Navigation            from '../../../components/khjd/Navigation';
import LpSwitch              from '../../../components/khjd/Switch';
import warnImg               from '../../../assets/warn.svg';
import {storeCustomerType}   from '../../../redux/actions/khjd';

class CustomerType extends React.Component {
    DepositorType       = [
        {value: '01', label: '企业法人'},
        {value: '02', label: '非企业法人'},
        {value: '03', label: '机关'},
        {value: '04', label: '事业单位'}
    ];
    CompanyRegisterType = [
        {value: '01', label: '内资企业'},
        {value: '02', label: '港澳台投资企业'},
        {value: '03', label: '个体户'},
        {value: '04', label: '事业单位'}
    ];
    RegisterDetail      = [
        {value: '01', label: '内资企业'},
        {value: '02', label: '港澳台投资企业'},
        {value: '03', label: '个体户'},
        {value: '04', label: '事业单位'}
    ];
    CustomerClass       = [
        {value: '01', label: '内资企业'},
        {value: '02', label: '港澳台投资企业'},
        {value: '03', label: '个体户'},
        {value: '04', label: '事业单位'}
    ];
    AbroadCustomer      = [
        {value: '01', label: '境内'},
        {value: '02', label: '境外'}
    ];
    GBCategory          = [
        {value: '01', label: '境内'},
        {value: '02', label: '境外'}
    ];
    IndustryExchange    = [ // 所属行业（外汇）
        {value: '01', label: '境内'},
        {value: '02', label: '境外'}
    ];
    EnterpriseExchange  = [ // 企业属性（外汇
        {value: '01', label: '境内'},
        {value: '02', label: '境外'}
    ];
    CustomerCategories  = [ // 客户类别
        {value: '01', label: '企金客户'},
        {value: '02', label: '个体工商户'},
        {value: '03', label: '同业客户'},
        {value: '04', label: 'SPV客户'}
    ];
    CustomerType        = [ // 客户类型
        {value: '01', label: '企金客户'},
        {value: '02', label: '个体工商户'},
        {value: '03', label: '同业客户'},
        {value: '04', label: 'SPV客户'}
    ];
    AgencyType          = [
        '政府机构', '国际组织', '中央银行', '在证券市场上交易的公司及其关联机构', '金融机构', '事业单位',
        '武警部队', '军队', '居委会', '村委会', '社区委员会', '社会团体'
    ];
    AgencyTaxResidency  = [ // 机构税收居民身份
        {value: '01', label: '仅为中国内地税收居民'},
        {value: '02', label: '仅为非居民'},
        {value: '03', label: '既是中国内地税收居民，又是其他国家(地区)税收居民'}
    ];

    state = Object.assign({}, {
        depositorType           : '', // 存款人类别
        companyRegisterType     : '', // 企业登记注册类型
        registerDetail          : '', // 注册细项
        customerClass           : '', // 客户分类统计标志
        abroadCustomer          : '', // 境内外客户标志
        gbCategory              : '', // 国标行业门类
        switchForeign           : 0, // 0:否  1:是  是否境内机构涉外资金专用户
        switchBranch            : 0, // 0:否  1:是  为分支/附属机构
        switchExchange          : 0, // 0:否  1:是  是否有外汇业务
        switchSpecialZone       : 0, // 0:否  1:是  特殊经济区内企业标志
        supervisorName          : '', // 上级主管单位名称
        supervisorCreditCode    : '', // 上级主管单位信用代码
        supervisorID            : '', // 上级主管单位统一客户编号
        industryExchange        : '', // 所属行业（外汇）
        enterpriseExchange      : '', // 企业属性（外汇
        customerCategories      : '', // 客户类别
        switchTypeAgency        : 1, // 是否以下类型机构
        typeAgency              : [], // 选择的类型机构
        switchNegativeNotFinance: 0, // 是否为消极非金融机构
        agencyTaxResidency      : '', //机构税收居民身份
        customerType            : '', // 客户类型
        switchShareholder       : 0, // 是否我行股东
        switchLinkCompany       : 0 // 是否关联企业
    }, {...this.props.customerType});

    updateSwitchForeign            = switchForeign => {
        this.setState({switchForeign});
    };
    updateSwitchBranch             = switchBranch => {
        this.setState({switchBranch});
    };
    updateSwitchExchange           = switchExchange => {
        this.setState({switchExchange});
    };
    updateSwitchSpecialZone        = switchSpecialZone => {
        this.setState({switchSpecialZone});
    };
    updateSwitchShareholder        = switchShareholder => {
        this.setState({switchShareholder});
    };
    updateSwitchLinkCompany        = switchLinkCompany => {
        this.setState({switchLinkCompany});
    };
    updateSwitchTypeAgency         = switchTypeAgency => {
        this.setState({switchTypeAgency});
    };
    updateSwitchNegativeNotFinance = switchNegativeNotFinance => {
        this.setState({switchNegativeNotFinance});
    };

    selectTypeAgency = typeAgency => { // 选中类型机构
        let ta    = this.state.typeAgency;
        let index = ta.indexOf(typeAgency);
        if(index < 0){
            ta.push(typeAgency);
        }else{
            ta.splice(index, 1);
        }
        this.setState({typeAgency: ta});
    };

    saveCustomerType = () => { // 保存客户归类信息
        this.props.storeCustomerType(this.state);
        console.log('this.props.khjdReducer', this.props.khjdReducer);
    };

    render(){
        let savedAble = true;
        return (
            <>
                <Navigation title="客户归类"/>
                <div className="customer-type">
                    <Cell title="存款人类别" className={this.state.depositorType === '' ? 'not-input' : ''}>
                        <Select dataSource={this.DepositorType}
                                onOk={selected => this.setState({depositorType: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="企业登记注册类型"
                          className={this.state.companyRegisterType === '' ? 'not-input' : ''}>
                        <Select dataSource={this.CompanyRegisterType}
                                onOk={selected => this.setState({companyRegisterType: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="境内机构涉外资金专用户">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchForeign} updateSwitch={this.updateSwitchForeign}/>
                    </Cell>
                    <Cell title="注册细项">
                        <Select dataSource={this.RegisterDetail}
                                onOk={selected => this.setState({registerDetail: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="客户分类统计标志" className={this.state.customerClass === '' ? 'not-input' : ''}>
                        <Select dataSource={this.CustomerClass}
                                onOk={selected => this.setState({customerClass: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="境内外客户标志" className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="居民标志" description="居民机构"/>

                    <div className="space"/>
                    <Cell title="国标行业门类" className={this.state.gbCategory === '' ? 'not-input' : ''}>
                        <Select dataSource={this.GBCategory}
                                onOk={selected => this.setState({gbCategory: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="国标行业大类" className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="国标行业中类" className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="国标行业小类" className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>

                    <div className="space"/>
                    <Cell title="是否为分支/附属机构">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchBranch} updateSwitch={this.updateSwitchBranch}/>
                    </Cell>
                    {
                        this.state.switchBranch === 1 && <>
                            <Cell title="上级主管单位名称" className="second-level-cell">
                                <Input clearable type="text" placeholder="请输入"
                                       value={this.state.supervisorName}
                                       onChange={(value) => this.setState({supervisorName: value})}
                                />
                            </Cell>
                            <Cell title="上级主管单位信用代码" className="second-level-cell">
                                <Input clearable type="text" placeholder="请输入"
                                       value={this.state.supervisorCreditCode}
                                       onChange={(value) => this.setState({supervisorCreditCode: value})}
                                />
                            </Cell>
                            <Cell title="上级主管单位统一客户编号" className="second-level-cell">
                                <Input clearable type="text" placeholder="请输入"
                                       value={this.state.supervisorID}
                                       onChange={(supervisorID) => this.setState({supervisorID})}
                                />
                            </Cell>
                        </>
                    }
                    <Cell title="是否有外汇业务">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchExchange}
                                  updateSwitch={this.updateSwitchExchange}/>
                    </Cell>
                    {
                        this.state.switchExchange === 1 && <>
                            <Cell title="所属行业(外汇)" className="second-level-cell">
                                <Select dataSource={this.IndustryExchange}
                                        onOk={selected =>
                                            this.setState({industryExchange: selected[0].value})}
                                />
                            </Cell>
                            <Cell title="企业属性(外汇)" className="second-level-cell">
                                <Select dataSource={this.EnterpriseExchange}
                                        onOk={selected =>
                                            this.setState({enterpriseExchange: selected[0].value})}
                                />
                            </Cell>
                        </>
                    }
                    <Cell title="特殊经济区内企业标志">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchSpecialZone}
                                  updateSwitch={this.updateSwitchSpecialZone}/>
                    </Cell>

                    <div className="second-title">受益所有人识别归类</div>
                    <Cell title="客户类别" className={this.state.customerCategories === '' ? 'not-input' : ''}>
                        <Select dataSource={this.CustomerCategories}
                                onOk={selected => this.setState({customerCategories: selected[0].value})}
                        />
                    </Cell>

                    <div className="second-title">机构税收居民身份归类</div>
                    <Cell title="是否以下类型机构">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchTypeAgency}
                                  updateSwitch={this.updateSwitchTypeAgency}/>
                    </Cell>
                    {
                        this.state.switchTypeAgency === 1 ? <>
                            <div className="agency-type">
                                {
                                    this.AgencyType.map((item, index) =>
                                        <div key={index}
                                             className={this.state.typeAgency.includes(index) ? 'select' : ''}
                                             onClick={() => this.selectTypeAgency(index)}>
                                            {item}
                                        </div>
                                    )
                                }
                            </div>
                        </> : <>
                            <Cell title="是否为消极非金融机构">
                                <div style={{'flexGrow': 1}}/>
                                <LpSwitch switch={this.state.switchNegativeNotFinance}
                                          updateSwitch={this.updateSwitchNegativeNotFinance}/>
                            </Cell>
                            {
                                this.state.switchNegativeNotFinance === 1 && <div className="warning">
                                    <img src={warnImg} alt=""/>
                                    请填写《机构控制人税收居民身份声明文件》
                                </div>
                            }
                            <Cell title="机构税收居民身份">
                                <Select dataSource={this.AgencyTaxResidency}
                                        onOk={selected => this.setState({agencyTaxResidency: selected[0].value})}
                                />
                            </Cell>
                            {
                                this.state.agencyTaxResidency === '01' || <div className="warning">
                                    <img src={warnImg} alt=""/>
                                    请填写《机构税收居民身份声明文件》
                                </div>
                            }
                        </>
                    }

                    <div className="second-title">本行归类</div>
                    <Cell title="客户类型">
                        <Select dataSource={this.CustomerType}
                                onOk={selected => this.setState({customerType: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="是否我行股东">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchShareholder}
                                  updateSwitch={this.updateSwitchShareholder}/>
                    </Cell>
                    <Cell title="是否关联企业">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchLinkCompany}
                                  updateSwitch={this.updateSwitchLinkCompany}/>
                    </Cell>

                    <div className={['unsaved', savedAble ? 'saved' : ''].join(' ')}
                         onClick={() => savedAble && this.saveCustomerType()}>保存
                    </div>
                </div>
            </>
        );
    }
}

export default connect(
    state => ({
        khjdReducer : state.khjdReducer,
        customerType: state.khjdReducer.customerType
    }),
    {storeCustomerType}
)(CustomerType);
