// 该文件用于定义项目中的常量值

// test相关action对象中type类型的常量值
export const ADD = 'add';
export const DEC = 'dec';

// zarm 下拉刷新状态
export const REFRESH_STATE = {
    normal : 0, // 普通
    pull   : 1, // 下拉刷新（未满足刷新条件）
    drop   : 2, // 释放立即刷新（满足刷新条件）
    loading: 3, // 加载中
    success: 4, // 加载成功
    failure: 5 // 加载失败
};
// zarm 上滑加载状态
export const LOAD_STATE    = {
    normal  : 0, // 普通
    abort   : 1, // 中止
    loading : 2, // 加载中
    success : 3, // 加载成功
    failure : 4, // 加载失败
    complete: 5 // 加载完成（无新数据）
};

// khjd相关action对象的type类型
export const COMPLETELIST    = 'complete_list'; // 已办列表
export const PENDINGLIST     = 'pending_list'; // 待办列表
export const KHJDTASK        = 'khjd_task'; // 任务详情
export const BASICINFO       = 'save_basic_info'; // 基本信息
export const CUSTOMERTYPE    = 'save_customer_type'; // 客户归类
export const OPERATEINFO     = 'save_operate_info'; // 经营情况
export const PERSONINFO      = 'save_person_info'; // 人员情况
export const OPENACCOUNTINFO = 'save_open_account_info'; // 开户情况

// router路由器相关的地址常量
export const RouterPath = {
    index            : '/',
    about            : '/about',
    khjdDetail       : '/khjd/detail',
    taskHandle       : '/khjd/taskHandle',
    taskTransfer     : '/khjd/taskTransfer',
    handleBasicInfo  : '/khjd/handleBasicInfo',
    handleRisk       : '/khjd/handleRisk',
    handleSurvey     : '/khjd/handleSurvey',
    handlePhoto      : '/khjd/handlePhoto',
    basicInfo        : '/khjd/handleBasicInfo/basicInfo',
    customerType     : '/khjd/handleBasicInfo/customerType',
    operateInfo      : '/khjd/handleBasicInfo/operateInfo',
    personInfo       : '/khjd/handleBasicInfo/personInfo',
    openAccountInfo  : '/khjd/handleBasicInfo/openAccountInfo',
    basicInfoAreaCode: '/khjd/handleBasicInfo/basicInfo/basicInfoAreaCode',
    checkDetail      : '/khjd/checkDetail'
};

export const CustomerBasicInfo = {
    basicInfo      : 'basicInfo',
    customerType   : 'customerType',
    operateInfo    : 'operateInfo',
    personInfo     : 'personInfo',
    openAccountInfo: 'openAccountInfo'
};

export const AreaCode = [ // 行政区域代码
    {
        value   : '1',
        label   : '北京市',
        children: [
            {
                value: '11', label: '海淀区', children: [
                    {value: '112', label: '112人民币'},
                    {value: '113', label: '113美元'}
                ]
            },
            {
                value: '12', label: '西城区', children: [
                    {value: '122', label: '122人民币'},
                    {value: '123', label: '123美元'}
                ]
            }
        ]
    },
    {
        value   : '2',
        label   : '上海市',
        children: [
            {value: '20', label: '杨浦区'},
            {
                value: '21', label: '杨浦区', children: [
                    {value: '212', label: '人212民币'},
                    {value: '213', label: '美213元'}
                ]
            },
            {
                value: '22', label: '静安区', children: [
                    {value: '222', label: '人民币222'},
                    {value: '223', label: '美元223'}
                ]
            }
        ]
    }
];

export const PublicKey = '-----BEGIN PUBLIC KEY-----\n' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC03xBXfETom+yyJYeFJQDU2nP4\n' +
    'b7lgul0ygqcDck66SW1/Yognxdil2aLS1T2DF9wxktWeaVRirRNfWPA/XZPBFUBS\n' +
    'z+uLLb/l34tiY4SVXh44wy0qUVYyKXNL1RyrXHTdj6gLHHU24cJvlOhduYzoPfgS\n' +
    'LokIPo4iUxYDou8SbwIDAQAB\n' +
    '-----END PUBLIC KEY-----';

export const PrivateKey = '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIICXQIBAAKBgQC03xBXfETom+yyJYeFJQDU2nP4b7lgul0ygqcDck66SW1/Yogn\n' +
    'xdil2aLS1T2DF9wxktWeaVRirRNfWPA/XZPBFUBSz+uLLb/l34tiY4SVXh44wy0q\n' +
    'UVYyKXNL1RyrXHTdj6gLHHU24cJvlOhduYzoPfgSLokIPo4iUxYDou8SbwIDAQAB\n' +
    'AoGBAJMCFtM0owF48mpdTIfwanuWztmnXUH8V5GdVcfcWZbZ5ZC68jV5fjxW5xt7\n' +
    'zFJHy2XTlaL6s2a8i9lcfXDTSyoueBf6GxPumsYbsGNgtyUsT4ZRprgGxtoCwx7Z\n' +
    'bvvhydik/1PdPbmQZcN4mPnrAkGR4Stibzg8zIPZm6um7G65AkEA6YDbLAI3IgXI\n' +
    '1xFvEDkAZxBMhwzKqTHPnhkVMdxti90V1a0PljjIRRs40dUxLwXr4MGZVNIeA9Kp\n' +
    '1sB6k1EO1QJBAMZMFo3D5i//xwXqzduDaxQqZ6CjdBRvkNyFGVoq0J1PQr20hdK/\n' +
    'y3e2fiS5tBRRkcMXVTdNn1QDT+TQRiT/pjMCQA/kAQZhsDbUhfJ88T39YxWgelTG\n' +
    'fhQ9m496zYJzKdFW3mGIQYNLofVyAM/m3k4A7SiChFjNY9WGxKAkwTK9VXECQHzx\n' +
    'yGw++TVZRsAVuOwNnFSye2UeWK/ftDkerGDCBXx5SqZZrtCiBMRDeqwNTshWtS9l\n' +
    '7k3QXQoEpDyadvgtFT0CQQCS02QuzGpy5/eAJtn+TYnRVRsdbViC6QEQaIhoCyg1\n' +
    'oFZ1SCyQQrSlHR0jU073QbCsfg2GL3WvN/UVMFk7rWQU\n' +
    '-----END RSA PRIVATE KEY-----';
