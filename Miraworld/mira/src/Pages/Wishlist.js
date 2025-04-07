import React from "react";
import Sidebar from "../Components/Sidebar";
import "./Wishlist.css";
import Wishlistitems from "../Components/Wishlistitems";
import Navbar from "../Components/Navbar";

const Wishlist = ({ toggleDarkMode }) => {
  return (
    <div className="Wishlist">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="wish-container">
        <div className="wish-aside">
          <Sidebar />
        </div>
        <div className="wish-feed">
          <Wishlistitems />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
