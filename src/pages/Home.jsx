import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Button} from 'zarm'
import Khjd from './khjd/Khjd';
import {pageBack} from '../utils/func';


function Home(props){
    let history = useHistory();
    let location = useLocation();

    function goHomeClick(){
        console.log('location' + location);
        console.log(history);
        history.push('/');
    }

    function goAboutClick(){
        console.log('location' + location);
        console.log(history);
        history.push('/about');
    }

    function goBackClick(param, event){
        console.log('1111');
        history.go(param);
    }
    const goBackClick2 = (param) => {
        return (event) => {
            history.go(param);
        }
    }

    return (
        <>
            <Khjd/>
            {/*<Button onClick={goHomeClick}>Go home</Button>*/}
            {/*<Button theme="primary" onClick={goAboutClick}>Go about</Button>*/}

            {/*/!*函数组件中点击事件的三种传参方式*!/*/}
            {/*<button type="button" onClick={(event) => goBackClick(-1, event)}>*/}
            {/*    Go back*/}
            {/*</button>*/}
            {/*<button type="button" onClick={goBackClick.bind(this, -1)}>Go back1</button>*/}
            {/*<button type="button" onClick={pageBack(-1)}>Go back2</button>*/}
        </>
    );
}

export default Home;
