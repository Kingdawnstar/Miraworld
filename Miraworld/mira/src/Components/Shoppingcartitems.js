import React from 'react';
import './ShoppingCartitems.css';
import { useCart } from '../cartContext';
import { useWishlist } from '../cartContext'; // Import WishlistContext
import { useSearch } from '../cartContext'; // Import SearchContext
import Thrash from '../assetsmira/bi_trash.png';
import Heart from '../assetsmira/Empty-heart.png';
import EmptyCartImage from '../assetsmira/noitems.png'; // Import your empty cart image

const Shoppingcartitems = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const { addToWishlist } = useWishlist(); // Get addToWishlist from context
    const { searchTerm } = useSearch(); // Get searchTerm from context

    const handleIncreaseQuantity = (index) => {
        updateQuantity(index, cart[index].quantity + 1);
    };

    const handleDecreaseQuantity = (index) => {
        const newQuantity = Math.max(1, cart[index].quantity - 1);
        updateQuantity(index, newQuantity);
    };

    const handleAddToWishlist = (product) => {
        addToWishlist(product); // Add item to wishlist
    };

    // Filter cart items based on search term
    const filteredCart = cart.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='Shoppingcartitems'>
            <h5>Shopping Cart</h5>
            <div className='Shoppingcart-wrap'>
                {filteredCart.length === 0 ? (
                    <div className='empty-cart'>
                        <img className='empty' src={EmptyCartImage} alt='Empty Cart' />
                        <p>Your cart is <span>Empty</span></p>
                    </div>
                ) : (
                    filteredCart.map((product, index) => (
                        <div className='Shoppingcart-item' key={product.id}>
                            <img className='item-img' src={product.image} alt={product.name} />
                            <div className='description'>
                                <p>{product.name}</p>
                                <small className='sub-head'>Ladies Haven footwear</small>
                                <div className='act'>
                                    <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                                </div>
                            </div>
                            <div className='act-icons'>
                                <div className='thrash' onClick={() => removeFromCart(index)}>
                                    <img src={Thrash} alt='Remove' />
                                    <p>Remove</p>
                                </div>
                                <div className='wish-icon' onClick={() => handleAddToWishlist(product)}>
                                    <img src={Heart} alt='Add to Wishlist' />
                                    <p>Wishlist</p>
                                </div>
                            </div>
                            <h3>${(parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2)}</h3>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Shoppingcartitems;