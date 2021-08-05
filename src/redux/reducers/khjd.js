import {COMPLETELIST, PENDINGLIST, KHJDTASK} from '../../utils/constant';

const initState = {
    completeList: [], // 已完成列表
    pendingList: [], // 待处理列表
    khjdTask: {} // 任务项
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
    const state = {...prevState};

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
        default:
            return prevState;
    }
}
