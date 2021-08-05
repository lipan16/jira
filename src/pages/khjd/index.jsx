import React from 'react';
import {useHistory} from 'react-router-dom';

import Navigation from '@/components/khjd/Navigation';
import Header from '../../components/khjd/Header';
import ListItem from '../../components/khjd/ListItem';
import './index.less';

function Khjd(){
    let history = useHistory();

    return (
        <div className="flex-list khjd">
            <Navigation title="开户尽调"/>
            <Header/>
            <ListItem history={history} to="/khjd/detail"/>
        </div>
    );
}

export default Khjd;
