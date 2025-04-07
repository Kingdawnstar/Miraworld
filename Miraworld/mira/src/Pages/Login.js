import React from "react";
import "./Login.css";
import Pic from "../assetsmira/Loginpic.png";
import Logo from "../assetsmira/Mira.png";
import Fb from "../assetsmira/fb-logo.png";
import G from "../assetsmira/google-logo.png";
import A from "../assetsmira/apple-logo.png";
import Eye from "../assetsmira/crosseye.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);

  const toggleIsPassword = () => {
    setIsPassword(!isPassword);
  };
  return (
    <div className="Login">
      <div className="pic-cont">
        <img className="pic" src={Pic} alt="" />
      </div>
      <div className="form-cont">
        <div className="form-cont-wrap">
          <div className="form-area">
            <div className="form-area-heading">
              <img className="form-img" src={Logo} alt="" />
              <h1>Log in</h1>
              <p>Please enter your login details</p>
            </div>
            <div className="form">
              <div className="E-mail">
                <small>Email</small>
                <div className="search">
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="Password">
                <small>Password</small>
                <div className="search">
                  <input
                    type={isPassword ? "text" : "password"}
                    placeholder=""
                  />
                  <img onClick={toggleIsPassword} src={Eye} alt="" />
                </div>
              </div>
              <div className="check-box">
                <form>
                  <input type="checkbox" />
                </form>
                <p className="remember">Remember me</p>
              </div>
              <Link to={"/Miraworld"}>
                <button>Log in to account</button>
              </Link>
              <p className="signup">
                Don't have an account?{" "}
                <Link to={"/Miraworld/Createacct"}>
                  <span>Sign up</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="login-img">
            <img src={Fb} alt="f" />
            <img src={G} alt="g" />
            <img src={A} alt="a" />
          </div>
        </div>
        <div className="or">
          <h1>OR</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
