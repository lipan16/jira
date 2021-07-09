import React from 'react';
import './App.css';
import Temperature from "./components/temperature";

// @ts-ignore

import {Router, Route, Link} from 'react-router';

let lp = React.createClass({
    render() {
        return (
            <>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </>
        );
    }
});

const About = React.createClass({
    render(){
        return <h3>About</h3>;
    }
});

const Inbox = React.createClass({
    render(){
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || 'Welcome to your Inbox'}
            </div>
        );
    }
});

const Message = React.createClass({
    render(){
        return <h3>Message {this.props.params.id}</h3>;
    }
});


function App() {
    return (
        <>
            <Temperature/>
            <Router>
                <Route path="/" component={lp}>
                    <Route path="about" component={About}/>
                    <Route path="inbox" component={Inbox}>
                        <Route path="messages/:id" component={Message}/>
                    </Route>
                </Route>
            </Router>
        </>
    );
}

export default App;
