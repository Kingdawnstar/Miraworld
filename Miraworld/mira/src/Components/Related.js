import React, { useState } from "react";
import "./Related.css";
import tb2 from "../assetsmira/Rectangle 21.png";
import HeartFilled from "../assetsmira/ph_heart-fill.png";
import tb4 from "../assetsmira/Rectangle 26.png";
import tb5 from "../assetsmira/Rectangle 31.jpg";
import tb8 from "../assetsmira/thumbnail8.png";
import S1 from "../assetsmira/s1.jpg";
import Heart from "../assetsmira/Group 2172.png";
import { useCart } from "../cartContext";
import { useWishlist } from "../cartContext";

const Related = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  
  const products = [
    { id: 1, name: "Sole Haven Footwear", price: "$34", image: tb2 },
    { id: 2, name: "Ultimate", price: "$24", image: tb4 },
    { id: 3, name: "Beauty World", price: "$44", image: tb5 },
    { id: 4, name: "Pleasure Ground", price: "$48", image: tb8 },
  ];

  // State to track wished products
  const [wishedProducts, setWishedProducts] = useState(new Set());

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleWishlistToggle = (product) => {
    const updatedWishedProducts = new Set(wishedProducts);

    if (updatedWishedProducts.has(product.id)) {
      updatedWishedProducts.delete(product.id); // Remove from wishlist
    } else {
      updatedWishedProducts.add(product.id); // Add to wishlist
      addToWishlist(product); // Add item to wishlist context
    }

    setWishedProducts(updatedWishedProducts);
  };

  return (
    <div className="Related">
      <p className="big-header">Related Products</p>
      <p className="sub-title">SHOP NOW</p>
      <div className="related-products">
        {products.map((product) => (
          <div key={product.id} className="related-product">
            <img src={product.image} alt={product.name} className="rel-img" />
            <div className="rel-top-desc">
              <p className="top-nam">{product.name}</p>
              <p className="top-pr">{product.price}</p>
            </div>
            <div className="rel-down-desc">
              <img className="prof-rel" src={S1} alt="" />
              <div className="down-desc">
                <p className="top">{product.name}</p>
                <p className="visit">Visit Store</p>
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart(product)} 
              className="rel-cart"
            >
              Add to cart
            </button>
            <img 
              className="hrt" 
              src={wishedProducts.has(product.id) ? HeartFilled : Heart}
              alt="Wishlist" 
              onClick={() => handleWishlistToggle(product)} 
              style={{ cursor: 'pointer' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Related;