import React from "react";
import "./Productdetpay.css";
import R from "../assetsmira/rated.png";
import Tr from "../assetsmira/van.png";
import Eye from "../assetsmira/eye.png";
import pay from "../assetsmira/payoption.png";
import share from "../assetsmira/refer.png";
import pack from "../assetsmira/pack.png";
import Compare from "../assetsmira/compare.png";
import loader from "../assetsmira/loader.png";
import bigstar from "../assetsmira/big-star.png";
import { Link } from "react-router-dom";

const Productdetpay = () => {
  return (
    <div className="Productdetpay">
      <div className="top-side">
        <p className="chief-head">MIRA</p>
        <div className="star-line">
          <div className="rating">
            <h4>Red Denim Jacket</h4>
            <div className="stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <p></p>
            </div>
          </div>
          <img className="bigstar" src={bigstar} alt="" />
        </div>
        <div className="price">
          <p>
            $39.00
            <span>
              <del>$50.00</del>
            </span>
          </p>
          <small className="promo">save 30%</small>
        </div>
        <div className="view">
          <img src={Eye} alt="" />
          <small>24 people are viewing this right now</small>
        </div>
      </div>
      <div className="writeup">
        <p>Hurry up! Sale ends in:</p>
        <div className="duration">
          <span>00</span>
          <span>:</span>
          <span>05</span>
          <span>:</span>
          <span>59</span>
          <span>:</span>
          <span>47</span>
        </div>
      </div>
      <div className="load">
        <p>
          only <b>9</b> items left in stock!
        </p>
        <img className="loader" src={loader} alt="" />
      </div>
      <div className="size-session">
        <p className="size">
          <b>Size:</b>
          <span>M</span>
        </p>
        <div className="size-list">
          <p className="active-size">M</p>
          <p>L</p>
          <p>XL</p>
          <p>XXL</p>
        </div>
      </div>
      <div className="color-session">
        <p>
          <b>Color:</b> Blue
        </p>
        <div className="circle-containers">
          <span className="circle blue"></span>
          <span className="circle black"></span>
          <span className="circle pink"></span>
        </div>
      </div>
      <div className="quantity-session">
        <p className="quantity">Quantity</p>
        <div className="count-add">
          <div className="count">
            <span className="minus">-</span>
            <span className="number">1</span>
            <span className="plus">+</span>
          </div>
          <p className="cart">Add to cart</p>
        </div>
      </div>
      <Link to={"/Miraworld/Paydetailspg"}>
        <div className="buy">
          <p>Buy now</p>
        </div>
      </Link>
      <div className="act">
        <div className="compare">
          <img src={Compare} alt="" />
          <p>compare</p>
        </div>
        <div className="Rate-p">
          <img src={R} alt="" />
          <p>Rate-p</p>
        </div>
        <div className="Share">
          <img src={share} alt="" />
          <p>Share</p>
        </div>
      </div>
      <div className="deliver">
        <div className="est-del">
          <img src={Tr} alt="" />
          <p>
            <b>Estimated Delivery:</b> Jul 30 - Aug 03
          </p>
        </div>
        <div className="ship">
          <img src={pack} alt="" />
          <p>
            <b>Free Shipping & Returns: </b>On all orders over $75
          </p>
        </div>
        <div className="pay-option">
          <img src={pay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Productdetpay;
