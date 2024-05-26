import React from 'react';
import Price from '../../components/Price.js';


const DoneTasks = () => {
    return (
        <div>
          <div className='boxWindow'>
            <div className='positionItemBoxTask'>
              <div className='itemBox'>
                  <span className="product_1">Сбор семян</span>
                  <Price price={100}/>
              </div>
              <div className='itemBox'>
                  <span className="product_1">Сбор семян</span>
                  <Price price={100}/>
              </div>        
            </div>        
          </div>
        </div>
    );
  };
  
  export default DoneTasks;