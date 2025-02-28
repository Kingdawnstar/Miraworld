import React from 'react'
import './Featuredvideos.css';
import Trendingvid from '../Components/Trendingvid'
import Vidbycategory from '../Components/Vidbycategory'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

const Featuredvideos = ({toggleDarkMode}) => {
  return (
    <div className='Featuredvids'>
    < Navbar toggleDarkMode={toggleDarkMode}/>
      <div className='container'>
     <div className='vid-aside'> 
    <Sidebar />
   </div> 
   <div className='main-vid-container'>
    <div className='vids-middle'>
    <Trendingvid />
    </div>
    <div className='vidsbycat'>
     < Vidbycategory/>
    </div>
    </div>
  </div>
  </div>
    
  )
}

export default Featuredvideos