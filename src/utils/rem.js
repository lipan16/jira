// rem 等比例适配 配置文件

// 基准大小
const baseSize = 16;

// 设置rem函数
function setRem(){
    // 当前页面宽度相对于 375 宽的缩放比例
    const scale = document.documentElement.clientWidth / 375;
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}

// 初始化
setRem();
// 改变窗口大小是重新设置rem
window.onresize = function (){
    console.log('%c onresize', 'color: red');
    setRem();
};
