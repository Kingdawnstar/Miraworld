import React from 'react';
import './Ordersummary.css';
import { useCart } from '../cartContext';

const Ordersummary = () => {
    const { cart } = useCart();

    // Calculate the subtotal and other values
    const subtotal = cart.reduce((acc, product) => acc + (parseFloat(product.price.replace('$', '')) * product.quantity), 0);
    const shipping = 34; // Static shipping cost, adjust as needed
    const tax = subtotal * 0.09; // Assuming tax is 9%
    const total = subtotal + shipping + tax;

    return (
        <div className='Ordersummary'>
            <div className='summary-wrap'>
                <div className='summary-upper'>
                    <h2>Order Summary</h2>
                    <div className='computation'>
                        <div className='parameters'>
                            <p>Sub-total</p>
                            <p>Shipping</p>
                            <p>Tax</p>
                        </div>
                        <div className='values'>
                            <p>${subtotal.toFixed(2)}</p>
                            <p>${shipping}</p>
                            <p>${tax.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className='tot-computation'>
                    <div className='para-val'>
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Ordersummary;