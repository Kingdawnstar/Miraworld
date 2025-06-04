import React from "react";
import "./Prodwishlistitems.css";
import { useWishlist } from "../cartContext";
import { useCart } from "../cartContext";
import { Link } from "react-router-dom";
import { useSearch } from "../cartContext"; // Import SearchContext

const Prodwishlistitems = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
   const { addToCart } = useCart();
  const { searchTerm } = useSearch(); // Get search term from context

  // Filter wishlist based on search term
  const filteredWishlist = wishlist.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Prodwishlistitems">
      <div className="Prodwish-wrap">
        <h5>My Wishlist</h5>
        <div className="topic">
          <Link to={'/Miraworld/Productswish'} ><p className="curr">Products</p></Link>
          <Link to={'/Miraworld/Wishliststore'}><p>Stores</p></Link>
        </div>
        <div className="Prodwishlists">
          {filteredWishlist.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            filteredWishlist.map((product) => (
              <div className="Prodlist" key={product.id}>
                 <div className="Prodlist-upper">
                  <img
                    className="main"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="Prodlist-desc">
                  <div className="Prodlist-desc-upper">
                            <b>{product.name}</b>
                            <p>Knit mock-turtleneck sweater</p>
                            <small>Color<span>*Black</span></small>
                            <p className="remov" onClick={() => removeFromWishlist(product.id)}>X Remove</p>
                  </div>
                    </div>
                  </div>
                
                    <div className="price-sh">
                        {product.price}
                    </div>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart - {product.price}</button>
                </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Prodwishlistitems;
