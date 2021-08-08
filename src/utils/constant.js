// 该文件用于定义项目中的常量值

// test相关action对象中type类型的常量值
export const ADD = 'add';
export const DEC = 'dec';

// khjd相关action对象的type类型
export const COMPLETELIST = 'complete_list';
export const PENDINGLIST  = 'pending_list';
export const KHJDTASK     = 'khjd_task';


// router路由器相关的地址常量
export const RouterPath = {
    index          : '/',
    about          : '/about',
    khjdDetail     : '/khjd/detail',
    taskHandle     : '/khjd/taskHandle',
    taskTransfer   : '/khjd/taskTransfer',
    handleBasicInfo: '/khjd/handleBasicInfo',
    handleRisk     : '/khjd/handleRisk',
    handleSurvey   : '/khjd/handleSurvey',
    handlePhoto    : '/khjd/handlePhoto',
    basicInfo      : '/khjd/handleBasicInfo/basicInfo',
    customerType   : '/khjd/handleBasicInfo/customerType',
    operateInfo    : '/khjd/handleBasicInfo/operateInfo',
    personInfo     : '/khjd/handleBasicInfo/personInfo',
    openAccountInfo: '/khjd/handleBasicInfo/openAccountInfo'
};

export const CustomerBasicInfo = {
    basicInfo      : 'basicInfo',
    customerType   : 'customerType',
    operateInfo    : 'operateInfo',
    personInfo     : 'personInfo',
    openAccountInfo: 'openAccountInfo'
};
