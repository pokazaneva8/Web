import React from 'react';
import nftLogo from'../../images/imageWallet/nft1.svg';


const Storage = ({}) => {
    return (
        <div className='boxWindow'>
          <div className='positionItemBox'>
            <div className='itemBox'>
                <div className="product_1">
                  <img src={nftLogo} alt="Product_1" />
                </div>
                <span className="productName">NFT</span>
            </div>
            <div className='itemBox'>
                <div className="product_1">
                  <img src={nftLogo} alt="Product_1" />
                </div>
                <span className="productName">Футболка</span>
            </div>  
          </div>
        </div>

    );
  };
  
  export default Storage;