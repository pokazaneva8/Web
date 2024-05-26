import React, { useState } from 'react';
import Tasks from './TaskPage/Tasks';
import DoneTasks from './TaskPage/DoneTasks';
import SwitchPanel from './SwitchPanel';


const TaskPage = ({}) => {
    const [isTasks, setisTasks] = useState(true);

    const showTasks = () => {
        setisTasks(true);
    };

    const showDoneTasks = () => {
        setisTasks(false);
    };

    return (
        <div>
            <SwitchPanel 
                leftButtonName={'Задания'}
                leftButtonLink={showTasks}
                rightButtonName={'Выполнено'}
                rightButtonLink={showDoneTasks}
            />
            { isTasks ? (
                <Tasks />
            ) : (
                <DoneTasks />
            )}
        </div>
    );
};

export default TaskPage;