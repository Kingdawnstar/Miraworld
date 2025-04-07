import React from "react";
import "./Notpreference.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Not from "../assetsmira/notification.png";

const Notpreference = ({ toggleDarkMode }) => {
  return (
    <div className="Notpreference">
      <div className="settings-cont">
        <Navbar toggleDarkMode={toggleDarkMode} />
        <div className="main-cont">
          <div className="set-aside">
            <Sidebar />
          </div>
          <div className="set-mid">
            <h5>Settings</h5>
            <div className="set-links">
              <Link to={"/Miraworld/Settings"}>
                <p className="set-link">General</p>
              </Link>
              <Link to={"/Miraworld/Notmessages"}>
                <p className="set-link active-link">Notifications</p>
              </Link>
              <p className="set-link">Security</p>
            </div>
            <div className="not-links">
              <Link to={"/Miraworld/Notmessages"}>
                <p className="not-link">Notification Messages 2</p>
              </Link>
              <Link to={"/Miraworld/Notpreference"}>
                <p className="not-link active-link">Notification Preferences</p>
              </Link>
            </div>
            <div className="not-wrap">
              <div className="not">
                <div className="not-set">
                  <h5>Email Notifications</h5>
                  <p>
                    Select which type of email notifications you want to receive
                    such as updates on your account activities, promotional
                    offers and important alerts to stay informed without
                    overwhelming your inbox.
                  </p>
                </div>
                <div className="not-btn">
                  <img className="btn" src={Not} alt="" />
                </div>
              </div>
              <div className="not">
                <div className="not-set">
                  <h5>Push Notifications</h5>
                  <p>
                    Manage the notifications that are sent to your mobile device
                    ensuring you receive important updates and interactions
                    while on the go, without being constantly interrupted.
                  </p>
                </div>
                <div className="not-btn">
                  <img className="btn" src={Not} alt="" />
                </div>
              </div>
              <div className="not">
                <div className="not-set">
                  <h5>In-app Notifications</h5>
                  <p>
                    Customize your in-app notification settings to receive real
                    time updates on your activities, interactions and important
                    events within the app helping you stay engaged and informed
                    while using the platform
                  </p>
                </div>
                <div className="not-btn">
                  <img className="btn" src={Not} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notpreference;
