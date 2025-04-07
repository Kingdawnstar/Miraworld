import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import "./Order.css";

const Order = ({ toggleDarkMode }) => {
  return (
    <div className="Order">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="Order-container">
        <div className="Order-aside">
          <Sidebar />
        </div>
        <div className="Order-middle">
          <div className="Order-top-side">
            <div className="Order-top-left">
              <p>
                <b>My Orders</b>
              </p>
              <small>3 Items</small>
            </div>
            <div className="Order-top-right">
              <p>Recently Added</p>
            </div>
          </div>
          <div className="Order-body">
            <div className="Order-top-titles">
              <p>Order ID</p>
              <p>Order Time</p>
              <p>Order Status</p>
              <p>Product</p>
              <p>Order Amount</p>
            </div>
            <div className="Order-body-entries">
              <Link to={"/Miraworld/Myorders"}>
                <div className="Order-body-entry">
                  <p>+</p>
                  <p>#304-412</p>
                  <p>20.02.2025, 15:02:44</p>
                  <p className="process">Processing</p>
                  <p>1</p>
                  <p>$138.88</p>
                </div>
              </Link>
              <div className="Order-body-entry">
                <p>+</p>
                <p>#304-412</p>
                <p>20.02.2025, 15:02:44</p>
                <p className="finish">Finished</p>
                <p>1</p>
                <p>$138.88</p>
              </div>

              <div className="Order-body-entry">
                <p>+</p>
                <p>#304-412</p>
                <p>20.02.2025, 15:02:44</p>
                <p className="finish">Finished</p>
                <p>1</p>
                <p>$138.88</p>
              </div>
              <div className="Order-body-entry">
                <p>+</p>
                <p>#304-412</p>
                <p>20.02.2025, 15:02:44</p>
                <p className="finish">Finished</p>
                <p>1</p>
                <p>$138.88</p>
              </div>
              <div className="Order-body-entry">
                <p>+</p>
                <p>#304-412</p>
                <p>20.02.2025, 15:02:44</p>
                <p className="finish">Finished</p>
                <p>1</p>
                <p>$138.88</p>
              </div>
              <div className="Order-body-entry">
                <p>+</p>
                <p>#304-412</p>
                <p>20.02.2025, 15:02:44</p>
                <p className="finish">Finished</p>
                <p>1</p>
                <p>$138.88</p>
              </div>
              <div className="Order-body-entry">
                <p>+</p>
                <p>#304-412</p>
                <p>20.02.2025, 15:02:44</p>
                <p className="finish">Finished</p>
                <p>1</p>
                <p>$138.88</p>
              </div>
              <div className="Order-body-entry">
                <p>+</p>
                <p>#304-412</p>
                <p>20.02.2025, 15:02:44</p>
                <p className="finish">Finished</p>
                <p>1</p>
                <p>$138.88</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
