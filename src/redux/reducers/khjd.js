import {KHJDTASK} from '../constant';

const initState = {};

/**
 * 创建一个为khjd服务的reducer,本质是一个纯函数，不能包含任何业务逻辑，只处理数据
 * 有条件的处理数据在判断条件之后在决定是否调用reducer
 * @param prevState
 * @param action
 * @returns {string|number|*}
 */
export default function khjdReducer(prevState = initState, action){
    const {type, data} = action;
    switch(type){
        case KHJDTASK:
            return {'khjdTask': data};
        default:
            return prevState;
    }
}
