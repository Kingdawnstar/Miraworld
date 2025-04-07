import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Mira from "../assetsmira/Mira.png";
import Search from "../assetsmira/search.png";
import Sc from "../assetsmira/shopping-cart-01.png";
import Not from "../assetsmira/notification-02.png";
import Shop from "../assetsmira/circum_shop.png";
import { useSearch } from "../cartContext"; // Import the useSearch hook

const Navbar = ({ toggleDarkMode }) => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchTerm } = useSearch(); // Get setSearchTerm from context

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <nav className="Navbar">
      <div className="Navbar-left Navbar">
        <Link to={"/Miraworld"}>
          <img className="logo" src={Mira} alt="img" />
        </Link>
      </div>

      <div className="Navbar-middle Navbar">
        <div className="shop-icon">
          <Link to={"/Miraworld/Products"}>
            <img className="shop" src={Shop} alt="" />
          </Link>
          <span className="green-active">123</span>
        </div>
        <div className="Search-box">
          <input
            className="Search-inp"
            type="text"
            placeholder="Search for items, stores, posts..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <img
            className="search"
            src={Search}
            alt="se"
            onClick={handleSearch}
          />
        </div>
      </div>

      <div className="Navbar-right Navbar">
        <button onClick={toggleDarkMode}>Darkmode</button>
        <Link to={"/Miraworld/Shoppingcart"}>
          <img className="cart-img" src={Sc} alt="" />
        </Link>
        <Link to={"/Miraworld/Chats"}>
          <img className="notify" src={Not} alt="not" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
