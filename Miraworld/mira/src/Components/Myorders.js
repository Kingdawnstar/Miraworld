import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import G1 from '../assetsmira/greater-than.png';
import './Myorders.css';

export const Myorders = ({toggleDarkMode}) => {
  return (
    <div className='Myorders'>
         < Navbar toggleDarkMode={toggleDarkMode}/>
        <div className='myOrder-container'>
          <div className='myOrder-aside'> 
              <Sidebar />
          </div> 
          <div className='myorder-middle'>
            <div className='myorder-heading'>
              <span className='myfirst-title'>Products</span>
              <span className='mytitle-img'><img src={G1} alt=''/></span>
              <span className='mysec-title'>Order details</span>
            </div>
            <div className='myorder-middlebox'>
              <div className='myorder-subheading'>
                <div className='subheading-left'>
                  <p>Order Details</p>
                  <small>.April 24, 2026</small>
                  <small>3 Products</small>
                </div>
              </div>
              <div className='mymiddle-table'>
                <div className='mymiddle-table-left'>
                  <div className='first-space'>
                    <div className='myt-heading'>
                      <p>Billing</p>
                    </div>
                    <div className='first-entry'>
                      <p>Diane Russell</p>
                      <small>4140 Parker Rd Allen town New Mexico</small>
                  </div>
                </div>
                <div className='mymiddle-table-right'>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
