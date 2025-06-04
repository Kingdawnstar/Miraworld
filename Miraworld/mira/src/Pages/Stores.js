import React from 'react'
import { useState } from 'react';
import './Stores.css';
import Navbar from '../Components/Navbar';
import Storeshops from '../Components/Storeshops';
import Sidebar from '../Components/Sidebar';

const Stores = ({ toggleDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
      <div className='Stores'>
          <Navbar
        toggleDarkMode={toggleDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="Store-container">
        <div className="Store-aside">
          <Sidebar />
        </div>
        <div className="StoreItems">
          <Storeshops />
        </div>
      </div>
      </div>
  )
}

export default Stores