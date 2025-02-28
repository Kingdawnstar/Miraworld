import React from 'react'
import './Purchasedet.css';
import tb4 from '../assetsmira/Rectangle 26.png';


const Purchasedet = () => {
  return (
    <div className='Purchasedet'>
        <div className='top-titles'>
            <div className='top-title-left'>
            <p>PRODUCT</p>
            </div>
            <div className='top-title-right'>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SUBTOTAL</p>
            </div>
        </div>
        <div className='pro-list'>
            <div className='pro'>
                <div className='pic-name'>
                    <img className='list-pic' src={tb4} alt=''/>
                    <p>Mountain Hardwear</p>
                </div>
                <div className='pic-price'>
                <p>$14.00</p>
                <p>x5</p>
                <p>$70.00</p>
                </div>
            </div>
            <div className='pro'>
                <div className='pic-name'>
                    <img className='list-pic' src={tb4} alt=''/>
                    <p>Mountain Hardwear</p>
                </div>
                <div className='pic-price'>
                <p>$14.00</p>
                <p>x5</p>
                <p>$70.00</p>
                </div>
            </div>
            <div className='pro'>
                <div className='pic-name'>
                    <img className='list-pic' src={tb4} alt=''/>
                    <p>Mountain Hardwear</p>
                </div>
                <div className='pic-price'>
                <p>$14.00</p>
                <p>x5</p>
                <p>$70.00</p>
                </div>
            </div>
        </div>
        <div className='sub-t'>
            <div className='sub'>
                <p className='left'>Subtotal:</p>
                <p>$365.00</p>
            </div>
            <div className='dis'>
                <p className='left'>Discount</p>
                <p>20%</p>
            </div>
            <div className='shi'>
                <p className='left'>Shipping</p>
                <p>Free</p>
            </div>
            <div className='tot'>
                <p><b>Total</b></p>
                <p className='grand'>$84.00</p>
            </div>
        </div>
    </div>
  )
}

export default Purchasedet