import React, { useState } from "react";
import "./Storeshops.css";
import tb2 from "../assetsmira/Rectangle 21.png";
import tb4 from "../assetsmira/Rectangle 26.png";
import tb5 from "../assetsmira/Rectangle 31.jpg";
import tb6 from "../assetsmira/Rectangle 52.png";
import tb7 from "../assetsmira/Rectangle 14926.png";
import Shop from "../assetsmira/circum_shop.png";
import tb8 from "../assetsmira/thumbnail8.png";
import Heart from "../assetsmira/Group 2172.png";
import { useSearch } from "../cartContext";
import Tick from "../assetsmira/Storepop.png";
import { useStore } from "../cartContext";

const Storeshops = () => {
  const { searchTerm } = useSearch();
  const { addToStore } = useStore();
  const [showPopup, setShowPopup] = useState(false);

  const products = [
    {
      id: 1,
      name: "Sole Haven Footwear",
      followers: "545K",
      Posts: "24K",
      Catalogue: "112",
      image: tb2,
    },
    {
      id: 2,
      name: "Ultimate",
      followers: "320K",
      Posts: "18K",
      Catalogue: "75",
      image: tb4,
    },
    {
      id: 3,
      name: "Beauty World",
      followers: "410K",
      Posts: "30K",
      Catalogue: "95",
      image: tb5,
    },
    {
      id: 4,
      name: "Pleasure Ground",
      followers: "250K",
      Posts: "22K",
      Catalogue: "65",
      image: tb6,
    },
    {
      id: 5,
      name: "Premium",
      followers: "600K",
      Posts: "15K",
      Catalogue: "80",
      image: tb7,
    },
    {
      id: 6,
      name: "Ernomous",
      followers: "150K",
      Posts: "35K",
      Catalogue: "50",
      image: tb4,
    },
    {
      id: 7,
      name: "Creative World",
      followers: "300K",
      Posts: "20K",
      Catalogue: "90",
      image: tb8,
    },
    {
      id: 8,
      name: "Vibrant",
      followers: "180K",
      Posts: "10K",
      Catalogue: "40",
      image: tb5,
    },
    {
      id: 9,
      name: "Massive",
      followers: "500K",
      Posts: "28K",
      Catalogue: "110",
      image: tb8,
    },
    {
      id: 10,
      name: "Glow",
      followers: "400K",
      Posts: "32K",
      Catalogue: "125",
      image: tb2,
    },
    {
      id: 11,
      name: "Diamond",
      followers: "350K",
      Posts: "19K",
      Catalogue: "70",
      image: tb7,
    },
  ];

  const filteredproducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToStore = (product) => {
    addToStore(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Automatically hide after 3 seconds
  };

  return (
    <div className="Storeshops">
      <div className="Storewish-wrap">
        <h5>All Stores</h5>
        <small>{filteredproducts.length} Stores</small>
        <div className="Storelists">
          {filteredproducts.length === 0 ? (
            <p>Available stores will show here.</p>
          ) : (
            filteredproducts.map((product) => (
              <div className="list" key={product.id}>
                <div className="headnam">
                  <p className="big-name">{product.name}</p>
                  <img src={Shop} alt="" />
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
                      <p>{product.followers}</p>
                      <small>Followers</small>
                    </div>
                    <div className="po">
                      <p>{product.Posts}</p>
                      <small>Posts</small>
                    </div>
                    <div className="catl">
                      <p>{product.Catalogue}</p>
                      <small>Catalogue</small>
                    </div>
                  </div>
                  <div className="list-desc-upper">
                    <p>
                      Get your products at affordable prices here with great
                      quality...
                    </p>
                  </div>
                </div>
                <div className="actions">
                  <button className="vis">View store</button>
                  <button className="fol">Follow</button>
                  <button
                    className="sav"
                    onClick={() => handleAddToStore(product)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {showPopup && (
          <div className="Storepop">
            <img src={Tick} alt="" />
            <h1>Store is saved to your wishlist</h1>
            <p>You can easily access the store from your wishlist</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Storeshops;
