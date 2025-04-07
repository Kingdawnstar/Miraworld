import React from "react";
import "./Wishlistitems.css";
import { useWishlist } from "../cartContext";
import { useSearch } from "../cartContext"; // Import SearchContext
import S1 from "../assetsmira/s1.jpg";
import Heart from "../assetsmira/ph_heart-fill.png";

const Wishlistitems = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { searchTerm } = useSearch(); // Get search term from context

  // Filter wishlist based on search term
  const filteredWishlist = wishlist.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Wishlistitems">
      <div className="wish-wrap">
        <h5>My Wishlist</h5>
        <div className="lists">
          {filteredWishlist.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            filteredWishlist.map((product) => (
              <div className="list" key={product.id}>
                <div className="list-upper">
                  <img
                    className="main"
                    src={product.image}
                    alt={product.name}
                  />
                  <img className="Lovethis" src={Heart} alt="Love this" />
                </div>
                <div className="list-desc">
                  <div className="list-desc-upper">
                    <p>{product.name}</p>
                    <h2>{product.price}</h2>
                  </div>
                  <div className="list-desc-lower">
                    <img src={S1} alt="Visit Store" />
                    <div className="desc-lower-text">
                      <p>Sole Haven Footwear</p>
                      <small>Visit Store</small>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <button onClick={() => removeFromWishlist(product.id)}>
                    Remove from wishlist
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlistitems;
