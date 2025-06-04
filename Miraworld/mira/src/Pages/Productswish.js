import React from "react";
import Sidebar from "../Components/Sidebar";
import Related from "../Components/Related";
import "./Productswish.css";
import Prodwishlistitems from '../Components/Prodwishlistitems';
import Navbar from "../Components/Navbar";

const Productswish = ({ toggleDarkMode }) => {
  return (
    <div className="Productswish">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="Productswish-container">
        <div className="Productswish-aside">
          <Sidebar />
        </div>
        <div className="Productswish-feed">
          <Prodwishlistitems />
        </div>
      </div>
      <div>
        <Related />
      </div>
    </div>
  );
};

export default Productswish;
