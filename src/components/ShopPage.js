import React, { useState } from 'react';
import Shop from './ShopPage/Shop';
import Storage from './ShopPage/Storage';
import SwitchPanel from './SwitchPanel';


const ShopPage = () => {
    const [isStorage, setisStorage] = useState(true);

    const showShop = () => {
        setisStorage(false);
    };

    const showStorage = () => {
        setisStorage(true);
    };

    return (
        <div>
            <SwitchPanel 
                leftButtonName={'Покупки'}
                leftButtonLink={showStorage}
                rightButtonName={'Магазин'}
                rightButtonLink={showShop}
            />
            { isStorage ? (
                <Storage/>
            ) : (
                <Shop />
            )}
        </div>
    );
};

export default ShopPage;