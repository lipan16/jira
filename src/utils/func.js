// 返回
export function pageBack(param){
    return (event) => {
        history.go(param);
    };
}

// 数据前端脱敏
export function dataMasking(data = '', type = 'default'){
    switch(type){
        case 'phone':
            return data.replace(/(\d{3})\d*(\d{4})/, '$1****$2'); // 手机号脱敏
        case 'name':
            let name = '';
            if(data.length <= 3){
                name = '*' + data.substring(1, data.length);
            }else if(data.length > 3 && data.length <= 6){
                name = '**' + data.substring(2, data.length);
            }else if(data.length > 6){
                name = data.substring(0, 2) + '****' + data.substring(6, data.length);
            }
            return name;
        case 'card':
            return data.replace(/^(.{4})(?:\w+)(.{4})$/, '$1****$2');
        default:
            return data;
    }
}

// 通过对象id获取其在数组中的索引
export function getIndexById(array, id){
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i].id === id){
            return i;
        }
    }
    return -1;
}

// 判断对象是否为空
export function objIsEmpty(obj){
    return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
}

// 获取当前日期的上一个月
export function getPreMonth(){
    let date               = '2021-08-31';
    let [year, month, day] = date.split('-');
    let month2             = parseInt(month) - 1;
    if(0 === month2){
        year   = parseInt(year) - 1;
        month2 = 12;
    }
    let date2 = new Date(year, month2, 0);
    let day2  = date2.getDate();
    if(day > day2){
        day = day2;
    }
    month2 = month2 < 10 ? '0' + month2 : month2;
    return year + month2 + day;
}
