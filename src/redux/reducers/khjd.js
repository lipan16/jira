import React from 'react';
import src1  from '../../assets/src1.svg';
import src2  from '../../assets/src2.svg';
import src3  from '../../assets/src3.svg';
import src4  from '../../assets/src4.svg';
import {
    COMPLETELIST,
    PENDINGLIST,
    KHJDTASK,
    RouterPath,
    CustomerBasicInfo, BASICINFO, CUSTOMERTYPE, OPENACCOUNTINFO, PERSONINFO, OPERATEINFO
}            from '../../utils/constant';

const initState = {
    completeList : [], // 已完成列表
    pendingList  : [], // 待处理列表
    khjdTask     : {}, // 任务项
    taskInfoEntry: [ // 任务项信息录入状态
        {src: src1, name: '客户基本信息录入', status: false, path: RouterPath.handleBasicInfo},
        {src: src2, name: '客户风险评估建议', status: false, path: RouterPath.handleRisk},
        {src: src3, name: '尽职调查情况录入', status: false, path: RouterPath.handleSurvey},
        {src: src4, name: '尽职调查照片拍摄', status: false, path: RouterPath.handlePhoto}
    ],

    customerBasicInfo: [ // 客户基本信息
        {id: CustomerBasicInfo.basicInfo, name: '基本信息', status: false, path: RouterPath.basicInfo},
        {id: CustomerBasicInfo.customerType, name: '客户归类', status: false, path: RouterPath.customerType},
        {id: CustomerBasicInfo.operateInfo, name: '经营情况', status: false, path: RouterPath.operateInfo},
        {id: CustomerBasicInfo.personInfo, name: '人员情况', status: false, path: RouterPath.personInfo},
        {id: CustomerBasicInfo.openAccountInfo, name: '开户情况', status: false, path: RouterPath.openAccountInfo}
    ],
    basicInfo        : {}, // 基本信息
    customerType     : {}, // 客户归类
    operateInfo      : {}, // 经营情况
    personInfo       : {}, // 人员情况
    openAccountInfo  : {} // 开户情况
};

/**
 * 创建一个为khjd服务的reducer,本质是一个纯函数，不能包含任何业务逻辑，只处理数据
 * 有条件的处理数据在判断条件之后在决定是否调用reducer
 * @param prevState
 * @param action
 * @returns {string|number|*}
 */
export default function khjdReducer(prevState = initState, action){
    const {type, data} = action;
    const state        = {...prevState};

    switch(type){
        case COMPLETELIST:
            state.completeList = data;
            return state;
        case PENDINGLIST:
            state.pendingList = data;
            return state;
        case KHJDTASK:
            state.khjdTask = data;
            return state;
        case BASICINFO:
            state.basicInfo                   = data;
            state.customerBasicInfo[0].status = true;
            return state;
        case CUSTOMERTYPE:
            state.customerType                = data;
            state.customerBasicInfo[1].status = true;
            return state;
        case OPERATEINFO:
            state.operateInfo                 = data;
            state.customerBasicInfo[2].status = true;
            return state;
        case PERSONINFO:
            state.personInfo                  = data;
            state.customerBasicInfo[3].status = true;
            return state;
        case OPENACCOUNTINFO:
            state.openAccountInfo             = data;
            state.customerBasicInfo[4].status = true;
            return state;
        default:
            return prevState;
    }
}
