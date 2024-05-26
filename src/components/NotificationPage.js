import React, { useState } from 'react';
import News from './NotificationPage/News';
import Archive from './NotificationPage/Archive';
import SwitchPanel from './SwitchPanel';


const NotificationPage = () => {
    const [isNews, setisNews] = useState(true);

    const showArchive = () => {
        setisNews(false);
    };

    const showNews = () => {
        setisNews(true);
    };

    return (
        <div>
            <SwitchPanel 
                leftButtonName={'Новости'}
                leftButtonLink={showNews}
                rightButtonName={'Аaрхив'}
                rightButtonLink={showArchive}
            />
            { isNews ? (
                <News/>
            ) : (
                <Archive />
            )}
        </div>
    );
};

export default NotificationPage;