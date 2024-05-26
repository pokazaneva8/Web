import React, { useState } from 'react';
import {ReactComponent as IconTop} from '../icon/top.svg';
import {ReactComponent as IconWallet} from '../icon/wallet.svg';
import {ReactComponent as IconTasks} from '../icon/tasks.svg';
import {ReactComponent as IconMain} from '../icon/main.svg';

export const NavigationPanel = ({showMain, showTasks, showPay, showTop}) => {
    const [activeButton, setActiveButton] = useState('main');

    return (
        <footer>
            <nav>
                <button className={activeButton === 'main' ? 'active' : ''} onClick={() => setActiveButton('main')}>
                    <IconMain name="main" sizeW="43px" sizeH="45px" onClick={showMain} />
                </button>
                <button className={activeButton === 'tasks' ? 'active' : ''} onClick={() => setActiveButton('tasks')}>
                    <IconTasks name="tasks" sizeW="39px" sizeH="47px" onClick={showTasks} />
                </button>
                <button className={activeButton === 'wallet' ? 'active' : ''} onClick={() => setActiveButton('wallet')}>
                    <IconWallet name="wallet" sizeW="51px" sizeH="43px" onClick={showPay} />
                </button>
                <button className={activeButton === 'info' ? 'active' : ''} onClick={() => setActiveButton('info')}>
                    <IconTop name="info" sizeW="49px" sizeH="49px" onClick={showTop} />
                </button>
            </nav>
        </footer>
    );
};