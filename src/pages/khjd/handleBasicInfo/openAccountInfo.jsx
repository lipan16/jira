import React                        from 'react';
import {connect}                    from 'react-redux';

import './index.less';
import Navigation                   from '../../../components/khjd/Navigation';
import {Cell, Input, Modal, Select} from 'zarm';
import LpSwitch                     from '../../../components/khjd/Switch';
import {getIndexByValue}            from '../../../utils/func';


class AccountManager extends React.Component {
    CardType = [ // 证件种类
        {value: '01', label: '居民身份证或临时身份证'},
        {value: '02', label: '军人身份证'},
        {value: '03', label: '军官证'},
        {value: '04', label: '士兵证'}
    ];

    state = {
        name    : '', // 姓名
        phone   : '', // 移动电话
        cardType: '', // 证件种类
        cardId  : '' // 证件号码
    };

    saveInput = (key, value) => {
        this.setState({[key]: value},
            () => this.props.updateAccount(this.props.id, {id: this.props.id, ...this.state})
        );
    };

    render(){
        return (
            <div className="account">
                <div className="delete"><span onClick={this.props.deleteAccount}>删除</span></div>
                <Cell title="姓名">
                    <Input clearable type="text" placeholder="请输入" value={this.state.name}
                           onChange={(value) => this.saveInput('name', value)}
                    />
                </Cell>
                <Cell title="移动电话">
                    <Input clearable type="text" placeholder="请输入" value={this.state.phone}
                           onChange={(value) => this.saveInput('phone', value)}
                    />
                </Cell>
                <Cell title="证件种类">
                    <Select dataSource={this.CardType} value={this.state.cardType}
                            onOk={selected => this.saveInput('cardType', selected[0].value)}
                    />
                </Cell>
                <Cell title="证件号码">
                    <Input clearable type="text" placeholder="请输入" value={this.state.cardId}
                           onChange={(value) => this.saveInput('cardId', value)}
                    />
                </Cell>
            </div>
        );
    }
}


class OpenAccountInfo extends React.Component {

    AccountAttribute = [ //账户属性
        {value: '01', label: '一般账户'},
        {value: '02', label: '基本账户'},
        {value: '03', label: '临时户'},
        {value: '04', label: '专用存款户'}
    ];

    state = {
        accountAttribute       : '01', //账户属性
        switchDualRemoteAccount: 0, // 是否双异地客户开户
        switchLegalPersonDo    : 0, // 是否机构法人亲办
        accountManager         : [] // 授权开户经办人
    };

    updateSwitchDualRemoteAccount = value => {
        this.setState({switchDualRemoteAccount: value});
    };
    updateSwitchLegalPersonDo     = value => {
        this.setState({switchLegalPersonDo: value});
    };

    addAccountManager = () => { // 新增 拟授权开户经办人
        if(this.state.accountManager.length >= 2){
            Modal.alert({
                title     : '系统提示',
                content   : '开户经办人不能超过2人',
                cancelText: '确定'
            });
            return;
        }
        let accountManager = [...this.state.accountManager, {
            id      : Date.now(),
            name    : '', // 姓名
            phone   : '', // 移动电话
            cardType: '', // 证件种类
            cardId  : ''
        }];
        this.setState({accountManager});
    };
    deleteAccount     = id => { // 删除 拟授权开户经办人
        Modal.confirm({
            title  : '系统提示',
            content: '是否确认删除？',
            onOk   : () => {
                let accountManager = this.state.accountManager;
                let index          = getIndexByValue(accountManager, id);
                accountManager.splice(index, 1);
                this.setState({accountManager});
            }
        });
    };
    updateAccount     = (id, value) => {
        let accountManager    = this.state.accountManager;
        let index             = getIndexByValue(accountManager, id);
        accountManager[index] = value;
        this.setState({accountManager});
    };


    saveBasicInfo = () => {
        console.log(this.state);
    };

    render(){
        return (
            <>
                <Navigation title="开户情况"/>
                <div className="customer-type">
                    <Cell title="账户属性">
                        <Select dataSource={this.AccountAttribute} value={this.state.accountAttribute}
                                onOk={selected => this.setState({accountAttribute: selected[0].value})}
                        />
                    </Cell>
                    <Cell title="是否双异地客户开户">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchDualRemoteAccount}
                                  updateSwitch={this.updateSwitchDualRemoteAccount}/>
                    </Cell>
                    <Cell title="是否机构法人亲办">
                        <div style={{'flexGrow': 1}}/>
                        <LpSwitch switch={this.state.switchLegalPersonDo}
                                  updateSwitch={this.updateSwitchLegalPersonDo}/>
                    </Cell>

                    <div className="account-manager">
                        <div className="title">拟授权开户经办人</div>
                        {
                            this.state.accountManager.map(item =>
                                <AccountManager key={item.id} id={item.id}
                                                updateAccount={this.updateAccount}
                                                deleteAccount={() => this.deleteAccount(item.id)}/>
                            )
                        }
                        <div className="add-account" onClick={this.addAccountManager}>新增</div>
                    </div>

                    <div className={['unsaved', 'saved'].join(' ')}
                         onClick={() => this.saveBasicInfo()}>保存
                    </div>
                </div>
            </>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(OpenAccountInfo);
