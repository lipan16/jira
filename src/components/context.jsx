import React from 'react';

const NameContext = React.createContext();

class context extends React.PureComponent {
    state = {
        name: 'tom'
    };

    shouldComponentUpdate(nextProps, nextState){
        console.log(this.props, this.state); // 目前的props和state
        console.log(nextProps, nextState); // 接下来要变化的目标props和state
        return true;
    }

    render(){
        return (
            <>
                <h3>我是父组件我的name是{this.state.name}</h3>
                {/*必须写成value，可以传递值，也可以是对象*/}
                <NameContext.Provider value={this.state.name}>
                    <A/>
                </NameContext.Provider>
            </>
        );
    }
}

class A extends React.PureComponent {

    // 当子组件出现错误时，会调用该方法
    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError: error};
    }

    render(){
        return (
            <>
                <h3>我是A(子）组件</h3>
                <B/>
            </>
        );
    }
}

// 类式组件使用context
class B extends React.PureComponent {
    // 声明接收context
    static contextType = NameContext;

    render(){
        return (
            <>
                <h3>我是B(孙）组件</h3>
                <h4>我的name是{this.context}</h4>
            </>
        );
    }
}

// 函数式组件使用context
function B1(){
    return (
        <>
            <h3>我是B(孙）组件</h3>
            <h4>我的name是
                <NameContext.Consumer>
                    {value => {
                        return `${value},年龄是。。。`;
                    }}
                </NameContext.Consumer>
            </h4>
        </>
    );
}

export default context;
