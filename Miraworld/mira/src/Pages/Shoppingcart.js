import React from 'react';
import './Shoppingcart.css';
import Sidebar from '../Components/Sidebar';
import Shoppingcartitems from '../Components/Shoppingcartitems';
import Ordersummary from '../Components/Ordersummary';
import Navbar from '../Components/Navbar';
import { useCart } from '../cartContext'; // Import the useCart hook

const Shoppingcart = ({ toggleDarkMode }) => {
    const { cart } = useCart(); // Get the cart from context

    return (
        <div className='Shopping-cart'>
            <Navbar toggleDarkMode={toggleDarkMode} />
            <div className='Shoppingcart-container'>
                <div className='Shoppingcart-aside'>
                    <Sidebar />
                </div>
                <div className='Shoppingcart-items'>
                    <Shoppingcartitems />
                </div>
                {/* Conditionally render Ordersummary only if the cart is not empty */}
                {cart.length > 0 && (
                    <div className='Shoppingcart-order'>
                        <Ordersummary />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shoppingcart;