import React from 'react'
import './Productdetpics.css';
import tb4 from '../assetsmira/Rectangle 26.png';
import tb5 from '../assetsmira/Rectangle 31.jpg';
import tb6 from '../assetsmira/Rectangle 52.png';
import tb7 from '../assetsmira/Rectangle 14926.png';
import tb8 from '../assetsmira/thumbnail8.png';
import S1 from '../assetsmira/s1.jpg';
import c1 from '../assetsmira/snicker.png'
import Simon from '../assetsmira/simon.png'
import G1 from '../assetsmira/greater-than.png';
const Productdetpics = () => {
  return (
    <div className='Productdetpics'>
        <div className='heading'>
            <div className='heading-titles'>
            <span className='first-title'>Products</span>
            <span className='title-img'><img src={G1} alt=''/></span>
            <span className='sec-title'>Order details</span>
            </div>
            <div className='heading-info'>
                <div className='heading-info-pic'>
                    <img src={Simon} alt=''/>
                </div>
                <div className='heading-info-name'>
                    <p>Sole Haven Footwear</p>
                    <span>Visit store</span>
                </div>
            </div>
        </div>
        <div className='picture'>
            <div className='smaller-pics'>
                <img className='little-pic' src={tb4} alt='' />
                <img  className='little-pic' src={tb5} alt='' />
                <img  className='little-pic' src={tb6} alt='' />
                <img  className='little-pic' src={S1} alt='' />
                <img  className='little-pic' src={tb7} alt='' />
                <img  className='little-pic' src={tb8} alt='' />
                <img  className='little-pic' src={c1} alt='' />
            </div>
            <div className='big-pic'>
                <img src={tb4} alt='' />
            </div>
        </div>
    </div>
  )
                
}

export default Productdetpics