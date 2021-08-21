import React from 'react';

import './index.less';

export default function LpCell(props){

    return (
        <div className={['flex-inline', 'lp-cell', props.className].join(' ')}>
            <div className="label">{props.label}</div>
            <div className="value" onClick={props.onClick}>{props.value}</div>
            {/*<div className='arrow'/>*/}
        </div>
    );
}
