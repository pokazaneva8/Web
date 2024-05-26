import React from 'react';
import nftLogo from '../../images/imageWallet/nft1.svg';
import Price from '../../components/Price.js';

const Shop = ({}) => {
    return (
        <div className='boxWindow'>
            <div className='positionItemBox'>
              <div className='itemBox'>
                <div className = "product_1">
                  <img src={nftLogo} alt="Product_1" width="75" height="75" vspace="0" hspace = "5" />
                </div>
                <span className="productName">NFT</span>
                <Price price={3000}/>
              </div>
              <div className='itemBox'>
                <div className = "product_1">
                  <img src={nftLogo} alt="Product_1" width="75" height="75" vspace="0" hspace = "5" />
                </div>
                <span className="productName">NFT</span>
                <Price price={3000}/>
              </div>
              
            </div>
        </div>

    );
  };
  
  export default Shop;