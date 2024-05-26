import React, { useState } from 'react';
import '../styles/SwitchPanel.css';

const SwitchPanel = ({ leftButtonName, leftButtonLink, rightButtonName, rightButtonLink }) => {
    const [activeButton, setActiveButton] = useState('left');

    const handleLeftButtonClick = () => {
        setActiveButton('left');
        leftButtonLink();
    };

    const handleRightButtonClick = () => {
        setActiveButton('right');
        rightButtonLink(); 
    };

    return (
        <div className='switchPanel'>
            <button className={`buttonSwitchPanel ${activeButton === 'left' ? 'active' : ''}`} onClick={handleLeftButtonClick}>
                <span>{leftButtonName}</span>
            </button>
            <button className={`buttonSwitchPanel ${activeButton === 'right' ? 'active' : ''}`} onClick={handleRightButtonClick}>
                <span>{rightButtonName}</span>
            </button>
        </div>
    );
};

export default SwitchPanel;