import React, {useState} from 'react';
import store from '../redux/store';
import {addAction} from '../redux/actions/khjd_action';
import {connect} from 'react-redux';

function AboutA(props){
    const [count, setCount] = useState(0);
    const addReduxCount = () => {
        store.dispatch({type: 'add', data: 1});
    };
    return (
        <div>
            <h2>About</h2>
            {props.children || 'Welcome to About'}

            <div className="App">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is: {count}
                </button>
                <button onClick={addReduxCount}>
                    redux count is: {store.getState()}
                </button>
            </div>
        </div>
    );
}

// about的ui组件
class About extends React.Component {

    state = {
        countA: 0
    };

    // componentDidMount(){
    //     // 检测store中状态的变化，只要有任何改变就调用该回调方法。该方法每个组件都要写不适用，一般写在main.jsx中
    //     store.subscribe(() => {
    //         this.setState({}); // 由于不能手动调用this.render()来更新页面
    //     });
    // }

    addReduxCountA = () => {
        this.props.add(1);
        // store.dispatch({type: 'add', data: 1});
    };

    render(){
        return (
            <div>
                <div>count: {this.state.countA}</div>
                <div>redux count: {this.props.he}</div>
                <br/>

                <button onClick={() => this.setState({countA: this.state.countA + 1})}>
                    count ++
                </button>
                &nbsp;
                <button onClick={this.addReduxCountA}>
                    redux count++
                </button>
            </div>
        );
    }
}

// export default About;
// about的容器组件
export default connect(
    store => ({he: store.khjd}),
    {add: addAction}
)(About);
