import React from 'react';

import {RouterPath} from '../../utils/constant';
import Navigation   from '@/components/khjd/Navigation';
import Header       from '../../components/khjd/Header';
import ListItem     from '../../components/khjd/ListItem';
import './index.less';

function Khjd(){

    return (
        <div className="flex-list khjd">
            <Navigation title="开户尽调"/>
            <Header/>
            <ListItem to={RouterPath.khjdDetail}/>
        </div>
    );
}

export default Khjd;
