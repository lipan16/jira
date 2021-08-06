import React from 'react';

import './index.less';

export default function LpCell(props){
    return (
        <div className="flex-inline lp-cell">
            <div className="label">{props.label}</div>
            <div className="value">{props.value}</div>
        </div>
    );
}
