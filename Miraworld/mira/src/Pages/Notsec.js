import React, { useState } from 'react';
import "./Notsec.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";


const Notsec = ({ toggleDarkMode }) => {
  const [isTwoStepEnabled, setIsTwoStepEnabled] = useState(false);

  const handleToggle = () => {
    setIsTwoStepEnabled(!isTwoStepEnabled);
  };

  return (
    <div className='Notsec'>
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
                <p className="set-link">Notifications</p>
              </Link>
              <Link to={"/Miraworld/Notsec"}>
                <p className="set-link active-link">Security</p>
              </Link>
            </div>
            <div className="notsec-wrap">
              <div className="notsec">
                <div className="not-sec">
                  <h5>Password</h5>
                  <p>Manage your password, Protect Your Account.</p>
                </div>
                <div className="not-btn-sec-edit">
                  <button>Edit</button>
                </div>
              </div>
              <div className="notsec">
                <div className="not-sec">
                  <h5>Two Step Verification</h5>
                  <p>We recommend requiring a verification code in addition to your password</p>
                </div>
                <div className="toggle">
                  <input 
                    type="checkbox" 
                    checked={isTwoStepEnabled} 
                    onChange={handleToggle} 
                    id="toggle" 
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-circle"></span>
                  </label>
                </div>
              </div>
              <div className="notsec">
                <div className="not-sec del">
                  <h5>Delete Account</h5>
                  <p>Delete your account Permanently</p>
                </div>
                <div className="not-btn-sec-del">
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notsec;
