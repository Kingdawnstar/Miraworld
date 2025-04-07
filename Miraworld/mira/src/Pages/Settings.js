import React from "react";
import "./Settings.css";
import Pen from "../assetsmira/pen.png";
import profile from "../assetsmira/s7.jpg";
import Share from "../assetsmira/Group 2174.png";
import { Link } from "react-router-dom";
import cover from "../assetsmira/Rectangle 14926.png";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Settings = ({ toggleDarkMode }) => {
  return (
    <div className="Settings-gen">
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
                <p className="set-link active-link">General</p>
              </Link>
              <Link to={"/Miraworld/Notmessages"}>
                <p className="set-link">Notifications</p>
              </Link>
              <p className="set-link">Security</p>
            </div>
            <div className="cover-photos">
              <img className="cover" src={cover} alt="" />
              <div className="prof-photo">
                <img className="prof-set" src={profile} alt="" />
              </div>
              <img className="pen-1" src={Pen} alt="" />
              <img className="pen-2" src={Pen} alt="" />
            </div>
            <div className="name-btns">
              <div className="name-set">
                <h4>Davis James</h4>
                <p>davisjames@gmail.com</p>
              </div>
              <div className="btns">
                <div className="btn-1">
                  <img className="share" src={Share} alt="" />
                  <p>Share Profile</p>
                </div>
                <div className="btn-2">
                  <img className="btn-pen" src={Pen} alt="" />
                  <p>Edit Profile</p>
                </div>
              </div>
            </div>
            <div className="set-bottom">
              <div className="set-bot-upper">
                <div className="personal">
                  <h6>Personal Information</h6>
                  <p>
                    You can change your personal information whenever you wish
                    to.
                  </p>
                </div>
                <div className="p-info">
                  <div className="info-top">
                    <div className="full-name">
                      <small>Full Name</small>
                      <h6>Davis James Anthony</h6>
                    </div>
                    <div className="username">
                      <small>User Name</small>
                      <h6>Davis James</h6>
                    </div>
                    <div className="Email">
                      <small>Email</small>
                      <h6>davisjames@gmail.com</h6>
                    </div>
                  </div>
                  <div className="info-down">
                    <div className="phone">
                      <small>Phone Number</small>
                      <h6>+234 813 873 8346</h6>
                    </div>
                    <div className="social-media">
                      <small>Social Media</small>
                      <h6>dribble.com/davis_james</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bio">
                <small>Bio</small>
                <p>
                  Hi there! i'm Jordan, a dedicated online shopper and lifestyle
                  enthusiast from Austin, Texas. I have a passion for finding
                  the best Products that enhance my evryday life from cutting
                  from cutting edge gadgets to carry home decor and stylish
                  fashion pieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
