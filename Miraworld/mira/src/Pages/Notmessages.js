import React from "react";
import "./Notmessages.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import s6 from "../assetsmira/s6.jpg";
import More from "../assetsmira/ri_more-fill.png";

const Notmessages = ({ toggleDarkMode }) => {
  return (
    <div className="Notmessages">
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
                <p className="not-link active-link">Notification Messages 2</p>
              </Link>
              <Link to={"/Miraworld/Notpreference"}>
                <p className="not-link">Notification Preferences</p>
              </Link>
            </div>
            <div className="not-mid">
              <div className="act-btns">
                <p className="p">All</p>
                <p className="mark">Mark as read</p>
              </div>
              <div className="nots">
                <div className="not">
                  <div className="prof">
                    <img className="prof-img" src={s6} alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New Messages</h6>
                    <p>
                      <span>Jenny Sandra</span> sent you a message in your chats
                    </p>
                    <p className="p-btn">View chat</p>
                  </div>
                  <img className="more" src={More} alt="" />
                </div>
                <div className="not">
                  <div className="prof">
                    <img className="prof-img" src={s6} alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New Messages</h6>
                    <p>
                      <span>Jenny Sandra</span> sent you a message in your chats
                    </p>
                    <p className="p-btn">View chat</p>
                  </div>
                  <img className="more" src={More} alt="" />
                </div>
                <div className="not">
                  <div className="prof">
                    <img className="prof-img" src={s6} alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New Messages</h6>
                    <p>
                      <span>Jenny Sandra</span> sent you a message in your chats
                    </p>
                    <p className="p-btn">View chat</p>
                  </div>
                  <img className="more" src={More} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notmessages;
