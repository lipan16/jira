import React, {useState} from 'react';

function About(props){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>About</h2>
            {props.children || 'Welcome to About'}

            <div className="App">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is: {count}
                </button>
            </div>
        </div>
    );
}

export default About;

class AboutA extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countA: 0
        };
    }

    render(){
        return (
            <>
                <button onClick={() => this.setState({countA: this.state.countA + 1})}>count ++</button>
            </>
        );
    }
}


