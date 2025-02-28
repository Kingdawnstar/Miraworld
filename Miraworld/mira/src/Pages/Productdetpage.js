import React from 'react'
import './Productdetpage.css';
import Productdetpics from '../Components/Productdetpics';
import Productdetpay from '../Components/Productdetpay';
import Related from '../Components/Related';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Productdetpage =  ({ toggleDarkMode }) => {
  return (
    <div className='Productdetpage'>
        <Navbar 
                toggleDarkMode={toggleDarkMode} 
            />
            <div className='Productdet-container'>
                <div className='Productdet-aside'> 
                    <Sidebar />
                </div> 
                <div className='Productdet-middle'>
                    <Productdetpics/>
                </div>
                <div className='Productdet-middle'>
                    <Productdetpay/>
                </div>
                
            </div>
            <div className='below'>
                <Related/>
            </div>
    </div>
  )
}

export default Productdetpage