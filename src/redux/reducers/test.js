import {ADD, DEC} from '../constant';

const initState = 0;

/**
 * 创建一个为test服务的reducer,本质是一个纯函数，不能包含任何业务逻辑，只处理数据
 * 有条件的处理数据在判断条件之后在决定是否调用reducer
 * @param prevState
 * @param action
 * @returns {string|number|*}
 */
export default function testReducer(prevState = initState, action){
    const {type, data} = action;
    switch(type){
        case ADD:
            return prevState + data;
        case DEC:
            return prevState - data;
        case 'mul':
            return prevState * data;
        case 'div':
            return prevState / data;
        default:
            return prevState;
    }
}

