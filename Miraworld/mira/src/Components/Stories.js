import React from "react";
import S1 from "../assetsmira/s1.jpg";
import S2 from "../assetsmira/s2.jpg";
import S3 from "../assetsmira/s3.jpg";
import S4 from "../assetsmira/s4.jpg";
import S6 from "../assetsmira/s6.jpg";
import S5 from "../assetsmira/s5.jpg";
import S7 from "../assetsmira/s7.jpg";

import "./Stories.css";
const Trends = () => {
  return (
    <div className="Trends">
      <h5>Stories</h5>
      <div className="Trend-wrap">
        <div className="Trend">
          <img className="Trend-door" src={S1} alt="t1" />
          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S1} alt="t1" />
          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S1} alt="t1" />
          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S2} alt="t1" />

          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S3} alt="t1" />

          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S4} alt="t1" />

          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S5} alt="t1" />

          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S6} alt="t1" />

          <p>Shoe chic boutique</p>
        </div>

        <div className="Trend">
          <img className="Trend-door" src={S7} alt="t1" />

          <p>Shoe chic boutique</p>
        </div>
      </div>
    </div>
  );
};

export default Trends;
