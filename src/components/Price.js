import React from 'react';
import coinLogo from '../images/coin.png';
import '../styles/Price.css';

const Price = ({price}) => {

    return (
        <div className='PriceBox' >
            <div className='coinPriceImage'>
                <img src={coinLogo} alt="Coin" />
                <span className='PriceText'>{price}</span> 
            </div>
        </div>
    );
};

export default Price;