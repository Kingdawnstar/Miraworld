import React from 'react'
import './Paydetailspg.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Paydetails from '../Components/Paydetails';
import Purchasedet from '../Components/Purchasedet';


export const Paydetailspg =  ({ toggleDarkMode }) => {
  return (
    <div className='Paydetailspg'>
         <Navbar 
                toggleDarkMode={toggleDarkMode} 
            />
            <div className='Paydet-container'>
                <div className='Paydet-aside'> 
                    <Sidebar />
                </div> 
                <div className='Paydet-middle'>
                    <Paydetails/>
                </div>
                <div className='Paydet-middle'>
                    <Purchasedet/>
                </div>
                
            </div>
            
    </div>
  )
}
