import React, { useState } from 'react';
import Categories from '../Components/Categories';
import Sidebar from '../Components/Sidebar';
import './Products.css';
import ProductItems from '../Components/ProductItems';
import Navbar from '../Components/Navbar';

const Products = ({ toggleDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="Products">
            <Navbar 
                toggleDarkMode={toggleDarkMode} 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
            />
            <div className='Product-container'>
                <div className='Product-aside'> 
                    <Sidebar />
                </div> 
                <div className='Product-feed'>
                    <Categories />
                </div>
                <div className='ProductsItems'>
                    <ProductItems searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
};

export default Products;