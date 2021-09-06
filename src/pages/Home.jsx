import React, {useEffect} from 'react';
import {useHistory}       from 'react-router-dom';

import Khjd         from './khjd';
import ToDoList     from './todolist';
import About        from '../components/test/about';
import Api          from '../api/API';
import {RouterPath} from '../utils/constant';

function Home(props){

    // let history = useHistory();
    // useEffect(() => {
    //     Api.login().then(res => {
    //         console.log(res);
    //     }).catch(error => {
    //         // history.push(RouterPath.about);
    //         console.log(error);
    //     });
    // }, []);


    return (
        <>
            <Khjd/>
            {/*<About/>*/}
            {/*<ToDoList/>*/}
        </>
    );
}

export default Home;
