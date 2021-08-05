// 该文件专门为khjd生成action对象
import {COMPLETELIST, PENDINGLIST, KHJDTASK} from '../../utils/constant';

// 保存已完成列表项
export const storeCompleteList = (data) => ({type: COMPLETELIST, data});
// 保存待处理列表项
export const storePendingList = (data) => ({type: PENDINGLIST, data});
// 保存任务项
export const storeKhjdTask = (data) => ({type: KHJDTASK, data});
