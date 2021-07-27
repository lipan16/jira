import React from 'react';
import Navigation from '@/components/khjd/Navigation';
import Header from '../../components/khjd/Header';
import ListItem from '../../components/khjd/ListItem';
import './index.less';
import {useHistory} from 'react-router-dom';

function Khjd(){
    let history = useHistory();

    return (
        <div className="khjd flex-list">
            <Navigation title="开户尽调"/>
            <Header/>
            <ListItem history={history}/>
        </div>
    );
}

export default Khjd;
