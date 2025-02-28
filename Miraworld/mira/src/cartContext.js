import React, { createContext, useContext, useState } from 'react';

// Create the cart context
const CartContext = createContext();

// Create the wishlist context
const WishlistContext = createContext();

// Create the search context
const SearchContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex >= 0) {
            // Update quantity
            const newCart = [...cart];
            newCart[existingProductIndex].quantity += 1;
            setCart(newCart);
        } else {
            // Add new product with quantity 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const updateQuantity = (index, quantity) => {
        const newCart = [...cart];
        newCart[index].quantity = quantity;
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Wishlist Provider
export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.find((item) => item.id === product.id)) {
                return [...prevWishlist, product];
            }
            return prevWishlist;
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Search Provider
export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};

// Custom hooks for easier access
export const useCart = () => useContext(CartContext);
export const useWishlist = () => useContext(WishlistContext);
export const useSearch = () => useContext(SearchContext);

// Combined Provider
export const AppProvider = ({ children }) => {
    return (
        <CartProvider>
            <WishlistProvider>
                <SearchProvider>
                    {children}
                </SearchProvider>
            </WishlistProvider>
        </CartProvider>
    );
};