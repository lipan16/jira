import React from 'react';
import PropTypes from 'prop-types';

import './index.less';
import circleSvg from '../../../assets/circle.svg';
import circleActiveSvg from '../../../assets/circle-active.svg';

class TaskWander extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        taskWanderList: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    render(){
        const {title, taskWanderList} = this.props;
        return (
            <>
                <div className="title">{title}</div>
                {
                    taskWanderList.map((taskWander, index) => {
                        return (
                            <div className="flex-inline content" key={index}>
                                <img src={taskWander.taskStatus === 'finished' ? circleActiveSvg : circleSvg}
                                     alt=""/>
                                <div className='task-person'>{taskWander.taskName}</div>
                                <div className="strong"/>
                                <div className='task-person'>{taskWander.taskPerson}</div>
                                <div className="strong"/>
                                <div className='task-person'>{taskWander.taskDuty}</div>
                                <div className="strong"/>
                                <div>{taskWander.taskTime}</div>
                            </div>
                        );
                    })
                }
            </>
        );
    }
}

export default TaskWander;
