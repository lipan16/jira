import React from 'react';
import Navigation from '@/components/khjd/Navigation';
import Header from '../../components/khjd/Header';
import ListItem from '../../components/khjd/ListItem';
import './index.less';

function Khjd(props){
    return (
        <div className="khjd">
            <Navigation title="开户尽调"/>
            <Header/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    );
}

export default Khjd;
