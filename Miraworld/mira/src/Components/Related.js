import React from 'react'
import './Related.css';
import tb2 from '../assetsmira/Rectangle 21.png';
import tb4 from '../assetsmira/Rectangle 26.png';
import tb5 from '../assetsmira/Rectangle 31.jpg';
import tb8 from '../assetsmira/thumbnail8.png';
import S1 from '../assetsmira/s1.jpg';
import Heart from '../assetsmira/Group 2172.png';
const Related = () => {
  return (
    <div className='Related'>
        <p className='big-header'>Related Products</p>
        <p className='sub-title'>SHOP NOW</p>
        <div className='related-products'>
            <div className='related-product'>
                <img src={tb2} alt='' className='rel-img'/>
                <div className='rel-top-desc'>
                    <p className='top-nam'>Sole Haven Footwear</p>
                    <p className='top-pr'>$34</p>
                </div>
                <div className='rel-down-desc'>
                    <img className='prof-rel' src={S1} alt=''/>
                    <div className='down-desc'>
                        <p className='top'>Sole Haven Footwear</p>
                        <p className='visit'>Visit Store</p>
                    </div>
                   
                </div>
                <button className='rel-cart'>Add to cart</button>
                <img className='hrt' src={Heart} alt=''/>
            </div>

            <div className='related-product'>
                <img src={tb4} alt='' className='rel-img'/>
                <div className='rel-top-desc'>
                    <p className='top-nam'>Sole Haven Footwear</p>
                    <p className='top-pr'>$34</p>
                </div>
                <div className='rel-down-desc'>
                    <img className='prof-rel' src={S1} alt=''/>
                    <div className='down-desc'>
                        <p className='top'>Sole Haven Footwear</p>
                        <p className='visit'>Visit Store</p>
                    </div>
                  
                </div>
                <button className='rel-cart'>Add to cart</button>
                <img className='hrt' src={Heart} alt=''/>
            </div>

            <div className='related-product'>
                <img src={tb5} alt='' className='rel-img'/>
                <div className='rel-top-desc'>
                    <p className='top-nam'>Sole Haven Footwear</p>
                    <p className='top-pr'>$34</p>
                </div>
                <div className='rel-down-desc'>
                    <img className='prof-rel' src={S1} alt=''/>
                    <div className='down-desc'>
                        <p className='top'>Sole Haven Footwear</p>
                        <p className='visit'>Visit Store</p>
                    </div>
                    
                </div>
                <button className='rel-cart'>Add to cart</button>
                <img className='hrt' src={Heart} alt=''/>
            </div>

            <div className='related-product'>
                <img src={tb8} alt='' className='rel-img'/>
                <div className='rel-top-desc'>
                    <p className='top-nam'>Sole Haven Footwear</p>
                    <p className='top-pr'>$34</p>
                </div>
                <div className='rel-down-desc'>
                    <img className='prof-rel' src={S1} alt=''/>
                    <div className='down-desc'>
                        <p className='top'>Sole Haven Footwear</p>
                        <p className='visit'>Visit Store</p>
                    </div>
                  
                </div>
                <button className='rel-cart'>Add to cart</button>
                <img className='hrt' src={Heart} alt=''/>
            </div>
        </div>

    </div>
  )
}

export default Related