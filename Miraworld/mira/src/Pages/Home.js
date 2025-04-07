import React from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
// import TopStore from '../Components/TopStore'
import Posts from "../Components/Posts";
import Navbar from "../Components/Navbar";
const Home = ({ toggleDarkMode }) => {
  return (
    <div className="home">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="main-container">
        <div className="aside">
          <Sidebar />
        </div>
        <div className="feed">
          <Posts />
        </div>
        {/* <div className='top-right'>
       <TopStore />
      </div> */}
      </div>
    </div>
  );
};

export default Home;
