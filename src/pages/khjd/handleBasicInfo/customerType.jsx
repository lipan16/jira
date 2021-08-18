import React                      from 'react';
import {connect}                  from 'react-redux';
import {Cell, DateSelect, Select} from 'zarm';

import './index.less';
import Navigation                 from '../../../components/khjd/Navigation';
import LpSwitch                   from '../../../components/khjd/Switch';

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

    state = {
        depositorType      : '', // 存款人类别
        companyRegisterType: '', //企业登记注册类型
        registerDetail     : '', // 注册细项
        customerClass      : '', // 客户分类统计标志
        abroadCustomer     : '', // 境内外客户标志
        gbCategory         : '', // 国标行业门类
        switch             : 0, // 0:否  1:是
    };

    updateJwjgSwitch = (value) => {
        this.setState({switch: value});
    };

    render(){
        return (
            <>
                <Navigation title="客户归类"/>
                <div className="customer-type">
                    <Cell title="存款人类别"
                          className={this.state.depositorType === '' ? 'not-input' : ''}>
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
                        <LpSwitch switch={this.state.switch} updateSwitch={this.updateJwjgSwitch}/>
                    </Cell>

                    <Cell title="注册细项">
                        <Select dataSource={this.RegisterDetail}
                                onOk={selected => this.setState({registerDetail: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="客户分类统计标志"
                          className={this.state.customerClass === '' ? 'not-input' : ''}>
                        <Select dataSource={this.CustomerClass}
                                onOk={selected => this.setState({customerClass: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="境内外客户标志"
                          className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="居民标志" description="居民机构"/>

                    <div className="space"/>
                    <Cell title="国标行业门类"
                          className={this.state.gbCategory === '' ? 'not-input' : ''}>
                        <Select dataSource={this.GBCategory}
                                onOk={selected => this.setState({gbCategory: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="国标行业大类"
                          className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="国标行业中类"
                          className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="国标行业小类"
                          className={this.state.abroadCustomer === '' ? 'not-input' : ''}>
                        <Select dataSource={this.AbroadCustomer}
                                onOk={selected => this.setState({abroadCustomer: selected[0].value})}
                        />
                    </Cell>

                    <div className="space"/>
                </div>
            </>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(CustomerType);
