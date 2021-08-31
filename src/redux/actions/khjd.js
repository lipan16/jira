// 该文件专门为khjd生成action对象
import {
    COMPLETELIST,
    PENDINGLIST,
    KHJDTASK,
    BASICINFO,
    CUSTOMERTYPE,
    OPERATEINFO, PERSONINFO, OPENACCOUNTINFO
} from '../../utils/constant';

// 保存已完成列表项
export const storeCompleteList = (data) => ({type: COMPLETELIST, data});
// 保存待处理列表项
export const storePendingList  = (data) => ({type: PENDINGLIST, data});
// 保存任务项
export const storeKhjdTask     = (data) => ({type: KHJDTASK, data});

// 保存客户基本信息录入 的 基本信息
export const storeBasicInfo       = (data) => ({type: BASICINFO, data});
// 保存客户基本信息录入 的 客户归类信息
export const storeCustomerType    = (data) => ({type: CUSTOMERTYPE, data});
// 保存客户基本信息录入 的 经营情况
export const storeOperateInfo     = (data) => ({type: OPERATEINFO, data});
// 保存客户基本信息录入 的 人员情况
export const storePersonInfo      = (data) => ({type: PERSONINFO, data});
// 保存客户基本信息录入 的 开户情况
export const storeOpenAccountInfo = (data) => ({type: OPENACCOUNTINFO, data});

