import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import G1 from "../assetsmira/greater-than.png";
import tb4 from "../assetsmira/Rectangle 26.png";
import { Link } from "react-router-dom";
import Pro from "../assetsmira/Progress Tracker.png";
import "./Myorders.css";

export const Myorders = ({ toggleDarkMode }) => {
  return (
    <div className="Myorders">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="myOrder-container">
        <div className="myOrder-aside">
          <Sidebar />
        </div>
        <div className="myorder-middle">
          <div className="myorder-heading">
            <Link to={"/Miraworld/Order"}>
              <p className="myfirst-title">My orders</p>
            </Link>
            <p className="mytitle-img">
              <img src={G1} alt="" />
            </p>
            <p className="mysec-title">Order details</p>
          </div>
          <div className="myorder-middlebox">
            <div className="myorder-subheading">
              <div className="subheading-left">
                <p className="bold">Order Details</p>
                <span>.</span>
                <p className="small">April 24, 2026</p>
                <span>.</span>
                <p className="small">3 Products</p>
              </div>
              <div className="subheading-right">
                <h1>Order ID - #304-412</h1>
              </div>
            </div>
            <div className="mymiddle-table">
              <div className="mymiddle-table-left">
                <div className="first-space">
                  <div className="myt-heading">
                    <p>Billing Address</p>
                  </div>
                  <div className="first-entry">
                    <p>Diane Russell</p>
                    <small>4140 Parker Rd Allen town New Mexico 31134</small>
                  </div>
                  <div className="second-entry">
                    <p>Email</p>
                    <small>unstoppableme@gmail.com</small>
                    <p className="no">Phone</p>
                    <small>(234)80 808 460 21</small>
                  </div>
                </div>
                <div className="Sec-space">
                  <div className="myt-heading">
                    <p>Shipping Address</p>
                  </div>
                  <div className="first-entry">
                    <p>Diane Russell</p>
                    <small>4140 Parker Rd Allen town New Mexico 31134</small>
                  </div>
                  <div className="second-entry">
                    <p>Email</p>
                    <small>unstoppableme@gmail.com</small>
                    <p className="no">Phone</p>
                    <small>(234)80 808 460 21</small>
                  </div>
                </div>
              </div>

              <div className="mymiddle-table-right">
                <div className="middle-head">
                  <div className="mid-head1">
                    <p>Order ID</p>
                    <small>#304-412</small>
                  </div>
                  <div className="mid-head2">
                    <p>Payment Method</p>
                    <small>Paypal</small>
                  </div>
                </div>
                <div className="right-body">
                  <div className="right-sub">
                    <span className="up">Subtotal</span>
                    <span>$365.00</span>
                  </div>
                  <div className="right-disc">
                    <span className="up">Discount</span>
                    <span>20%</span>
                  </div>
                  <div className="Right-ship">
                    <span className="up">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="right-tot">
                    <span>Total</span>
                    <span className="Tot-fig">$84.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress">
            <img src={Pro} alt="" />
          </div>
          <div className="prod-summary">
            <div className="top-titles">
              <div className="top-title-left">
                <p>PRODUCT</p>
              </div>
              <div className="top-title-right">
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
              </div>
            </div>
            <div className="pro-list">
              <div className="pro">
                <div className="pic-name">
                  <img className="list-pic" src={tb4} alt="" />
                  <p>Mountain Hardwear</p>
                </div>
                <div className="pic-price">
                  <p>$14.00</p>
                  <p>x5</p>
                  <p>$70.00</p>
                </div>
              </div>
              <div className="pro">
                <div className="pic-name">
                  <img className="list-pic" src={tb4} alt="" />
                  <p>Mountain Hardwear</p>
                </div>
                <div className="pic-price">
                  <p>$14.00</p>
                  <p>x5</p>
                  <p>$70.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
