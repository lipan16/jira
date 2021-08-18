import React from 'react';

import './index.less';

// export default class LpSwitch extends React.Component {
//     render(){
//         return (
//             <div className="lp-switch">
//                 <span className={this.props.switch ? 'selected' : ''}
//                       onClick={() => this.props.updateSwitch(1)}>
//                     是
//                 </span>
//                 <span className={this.props.switch ? '' : 'selected'}
//                       onClick={() => this.props.updateSwitch(0)}>
//                     否
//                 </span>
//             </div>
//         );
//     }
// }
export default function LpSwitch(props){
    return (
        <div className="lp-switch">
            <span className={props.switch ? 'selected' : ''}
                  onClick={() => props.updateSwitch(1)}>
                是
            </span>
            <span className={props.switch ? '' : 'selected'}
                  onClick={() => props.updateSwitch(0)}>
                否
            </span>
        </div>
    );
}
