import React, { useState } from "react";
import "./Productitems.css";
import tb2 from "../assetsmira/Rectangle 21.png";
import tb4 from "../assetsmira/Rectangle 26.png";
import tb5 from "../assetsmira/Rectangle 31.jpg";
import tb6 from "../assetsmira/Rectangle 52.png";
import tb7 from "../assetsmira/Rectangle 14926.png";
import tb8 from "../assetsmira/thumbnail8.png";
import S1 from "../assetsmira/s1.jpg";
import Heart from "../assetsmira/Group 2172.png";
import HeartFilled from "../assetsmira/ph_heart-fill.png"; // Add your filled heart image here
import { useCart } from "../cartContext";
import { useSearch } from "../cartContext";
import { useWishlist } from "../cartContext";
import { Link } from "react-router-dom";

const ProductItems = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { searchTerm } = useSearch();
  const products = [
    { id: 1, name: "Sole Haven Footwear", price: "$34", image: tb2 },
    { id: 2, name: "ultimate", price: "$24", image: tb4 },
    { id: 3, name: "baeuty world", price: "$44", image: tb5 },
    { id: 4, name: "Pleasure ground", price: "$48", image: tb6 },
    { id: 5, name: "Premium", price: "$65", image: tb7 },
    { id: 6, name: "Ernomous", price: "$30", image: tb4 },
    { id: 7, name: "Creative world", price: "$14", image: tb8 },
    { id: 8, name: "Vibrant", price: "$78", image: tb5 },
    { id: 9, name: "Massive", price: "$33", image: tb8 },
    { id: 10, name: "Glow", price: "$20", image: tb2 },
    { id: 11, name: "Diamond", price: "$30", image: tb7 },
  ];

  // State to track wished products
  const [wishedProducts, setWishedProducts] = useState(new Set());

  // Filter products based on searchTerm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="Product-items">
      <div className="Products-wrap">
        <h5>Products</h5>
        <small>{products.length} Items</small>
        <div className="Products">
          {filteredProducts.map((product) => (
            <div className="Product" key={product.id}>
              <div className="Product-upper">
                <img
                  className="main-Product"
                  src={product.image}
                  alt={product.name}
                />
                <img
                  onClick={() => handleWishlistToggle(product)}
                  className="Lovethis"
                  src={wishedProducts.has(product.id) ? HeartFilled : Heart}
                  alt="Wishlist"
                />
              </div>
              <div className="Product-desc">
                <div className="Product-desc-upper">
                  <p>{product.name}</p>
                  <h2>{product.price}</h2>
                </div>
                <div className="Product-desc-lower">
                  <img src={S1} alt="Store" />
                  <div className="Product-desc-lower-text">
                    <p>{product.name}</p>
                    <Link to={"/Miraworld/Productdetpage"}>
                      <small>Visit Store</small>
                    </Link>
                  </div>
                </div>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItems;