// 该文件专门为test生成action对象
import {ADD} from '../../utils/constant'

// 返回一个同步action，同步action是一个一般对象
export const addAction = (data)=>({type: ADD, data})
// 返回一个异步action，异步action是一个函数（函数可以开启异步任务）异步action一般会调用同步action
export const decAction = (data, time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addAction(data))
        }, time)
    }
}
