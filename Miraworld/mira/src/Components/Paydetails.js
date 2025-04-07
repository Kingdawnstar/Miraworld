import React from "react";
import "./Paydetails.css";
import G1 from "../assetsmira/greater-than.png";

const Paydetails = () => {
  return (
    <div className="Paydetails">
      <div className="heading">
        <div className="heading-titles">
          <span className="first-title">Products</span>
          <span className="title-img">
            <img src={G1} alt="" />
          </span>
          <span className="sec-title">Order details</span>
        </div>
      </div>
      <div className="Cont">
        <p>Contact</p>
        <input type="" placeholder="Email Address" />
      </div>
      <div className="delivery">
        <p>Delivery</p>
        <input className="country" type="" placeholder="Country/Region" />
        <div className="name-space">
          <input type="" placeholder="First Name" />
          <input type="" placeholder="Last Name" />
        </div>
        <input className="addr" type="" placeholder="Address" />
        <div className="city">
          <input type="" placeholder="City" />
          <input type="" placeholder="Postal Code" />
        </div>
        <div className="check">
          <input type="checkbox" />
          <p>Save this info for future</p>
        </div>
      </div>
      <div className="payment">
        <p>Payment</p>
        <div className="pay-up">
          <input className="pay-up-inp" type="" placeholder="Credit Card" />
          <div className="pay-up-img">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="pay-down">
          <div className="card-no">
            <input className="pay-down-inp" type="" placeholder="Card Number" />
            <img src="" alt="" />
          </div>
          <div className="exp-sec">
            <input type="" placeholder="Expiration Date" />
            <input type="" placeholder="Security Code" />
          </div>
          <input
            className="card-holder"
            src=""
            placeholder="Card Holder Name"
          />
          <div className="Check-2">
            <input type="Checkbox" />
            <p>Save this info for future</p>
          </div>
        </div>
      </div>
      <button>Buy Now</button>
    </div>
  );
};

export default Paydetails;
