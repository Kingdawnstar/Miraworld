import React from "react";
import "./Wishlistitems.css";
import { useStore } from "../cartContext";
import { Link } from "react-router-dom";
import { useSearch } from "../cartContext"; // Import SearchContext
import Heart from "../assetsmira/ph_heart-fill.png";
import Shop from "../assetsmira/circum_shop.png";

const Wishlistitems = () => {
  const { storeItems, removeFromStore } = useStore();
  const { searchTerm } = useSearch(); // Get search term from context

  // Filter wishlist based on search term
  const filteredStoreItems = storeItems.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Wishlistitems">
      <div className="wish-wrap">
        <h5>My Wishlist</h5>
        <small>{filteredStoreItems.length} Items</small>
        <div className="topic">
          <Link to={'/Miraworld/Productswish'} ><p>Products</p></Link>
          <Link to={'/Miraworld/Wishliststore'}><p className="curr">Stores</p></Link>
        </div>
        <div className="lists">
          {filteredStoreItems.length === 0 ? (
            <p>Your Saved Stores will show here.</p>
          ) : (
            filteredStoreItems.map((product) => (
              <div className="list" key={product.id}>
                <div className="headnam">
                  <p className="big-name">{product.name}</p>
                  <img src={Shop} alt=""/>
                </div>
                <div className="list-upper">
                  <img
                    className="main"
                    src={product.image}
                    alt={product.name}
                  />
                  <img className="Lovethis" src={Heart} alt="Love this" />
                </div>
                <div className="list-desc">
                  <div className="list-desc-stat">
                    <div className="foll">
                      <p>{ product.followers}</p>
                      <small>Followers</small>
                    </div>
                    <div className="po">
                      <p>{ product.Posts}</p>
                      <small>Posts</small>
                    </div>
                    <div className="catl">
                      <p>{ product.Catalogue}</p>
                      <small>Catalogue</small>
                    </div>
                  </div>
                  <div className="list-desc-upper">
                    <p>Get your products at affordable prices here with great quality...</p>
                  </div>
                </div>
                <div className="actions">
                  <button className="vis">View store</button>
                  <button className="fol">Follow</button>
                  <button className="rem" onClick={() => removeFromStore(product.id)}>
                    Remove
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
