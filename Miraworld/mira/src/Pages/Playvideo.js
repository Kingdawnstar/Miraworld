import React from "react";
import "./Playvideo.css";
import Video from "../Components/Video";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Relatedvideos from "../Components/Relatedvideos";

const Playvideo = ({ toggleDarkMode }) => {
  return (
    <div className="Playvideo">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="video-container">
        <div className="video-aside">
          <Sidebar />
        </div>
        <div className="video-middle">
          <Video />
        </div>
        <div className="Related-vids">
          <Relatedvideos />
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
