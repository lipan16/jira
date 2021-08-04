// 引入createStore，专门用于创建redux中最为核心的store，combineReducers汇总多个reducer
import {createStore, combineReducers} from 'redux';
// 引入为khjd服务的reducer
import khjdReducer from './reducers/khjd';
import testReducer from './reducers/test';

const allReducer = combineReducers({
    khjdReducer,
    testReducer
});
export default createStore(allReducer);
