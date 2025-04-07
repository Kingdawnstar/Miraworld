import React, { useRef } from "react";
import "./Trendingvid.css";
import Play from "../assetsmira/play.png";
import Heart from "../assetsmira/Group 2172.png";
import Share from "../assetsmira/Group 2174.png";
import Tb from "../assetsmira/thumbnail5.png";
import Scroll from "../assetsmira/Group 2175.png";
import S1 from "../assetsmira/s2.jpg";
import { Link } from "react-router-dom";

const Trendingvid = () => {
  const scrollRef = useRef(null); // Create a ref for the scroll container

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

      // Check if we're at the end of the scrollable area
      if (scrollLeft + clientWidth >= scrollWidth) {
        // Reset scroll to the beginning
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll right by 300 pixels
        scrollRef.current.scrollBy({
          top: 0,
          left: 300, // Adjust this value for the scroll distance
          behavior: "smooth", // Smooth scrolling
        });
      }
    }
  };

  return (
    <div className="Trendingvids">
      <h5>Featured Videos</h5>
      <div className="Trend-vid-wrap">
        <p>Trending Videos</p>
        <div className="Trending-vids" ref={scrollRef}>
          {/* Video items */}
          {[...Array(3)].map((_, index) => (
            <Link to={"/Miraworld/Playvideo"} key={index}>
              <div className="Trending-vid">
                <img className="thumb-backdrop" src={Tb} alt="" />
                <div className="Trending-vid-info">
                  <div className="Trend-top">
                    <div className="Profile">
                      <div className="prof-img">
                        <img className="prof" src={S1} alt="" />
                      </div>
                      <p> Jennifer Adams</p>
                    </div>
                    <div className="Trending-vid-act">
                      <img className="heart" src={Heart} alt="" />
                      <img className="share" src={Share} alt="" />
                    </div>
                  </div>
                  <div className="title-time">
                    <h5>Brandbuzz: Unveiling Our Latest Collection</h5>
                    <p>12:53</p>
                  </div>
                  <img className="play" src={Play} alt="" />
                </div>
              </div>
            </Link>
          ))}
          {/* Cloned video items for seamless scrolling */}
          {[...Array(3)].map((_, index) => (
            <Link to={"/Miraworld/Playvideo"} key={index + 5}>
              <div className="Trending-vid">
                <img className="thumb-backdrop" src={Tb} alt="" />
                <div className="Trending-vid-info">
                  <div className="Trend-top">
                    <div className="Profile">
                      <div className="prof-img">
                        <img className="prof" src={S1} alt="" />
                      </div>
                      <p> Jennifer Adams</p>
                    </div>
                    <div className="Trending-vid-act">
                      <img className="heart" src={Heart} alt="" />
                      <img className="share" src={Share} alt="" />
                    </div>
                  </div>
                  <div className="title-time">
                    <h5>Brandbuzz: Unveiling Our Latest Collection</h5>
                    <p>12:53</p>
                  </div>
                  <img className="play" src={Play} alt="" />
                </div>
              </div>
            </Link>
          ))}
          <img
            className="next"
            src={Scroll}
            alt=""
            onClick={handleScrollRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Trendingvid;
