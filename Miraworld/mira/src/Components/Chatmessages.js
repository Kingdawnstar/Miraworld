import React from "react";
import Cameron from "../assetsmira/cameron.png";
import "./Chatmessages.css";
import Search from "../assetsmira/tabler_send.png";
import Mic from "../assetsmira/Group 2179.png";
import Chat from "../assetsmira/chat.png";

const Chatmessages = () => {
  return (
    <div className="Chatmessages-main">
      <h4>Chats</h4>
      <div className="Profile">
        <div className="prof">
          <img className="prof-img" src={Cameron} alt="" />
        </div>
        <div className="name-status">
          <p>Sharon Beauties</p>
          <small>Online</small>
        </div>
      </div>
      <div className="Chats-wrap">
        <p className="date">Sunday, 8 Sep 2024</p>
        <div className="messages">
          <div className="received message">
            <p>
              Ask CDCR san quitin prison 2008. We installed purex dispensers
              throughout the prison. what a great time to be alive. Thank God
              Mira is finally becoming a reality
            </p>
            <small>09:23Am </small>
          </div>
          <div className="received message">
            <p>
              Ask CDCR san quitin prison 2008. We installed purex dispensers
              throughout the prison
            </p>
            <small>09:23Am </small>
          </div>
          <div className="sent message">
            <p>
              Ask CDCR san quitin prison 2008. We installed purex dispensers
              throughout the prison
            </p>
            <small>09:23Am </small>
          </div>
          <div className="received message">
            <p>
              Ask CDCR san quitin prison 2008. We installed purex dispensers
              throughout the prison
            </p>
            <small>09:23Am </small>
          </div>
          <div className="sent message">
            <p>
              Ask CDCR san quitin prison 2008. We installed purex dispensers
              throughout the prison
            </p>
            <small>09:23Am </small>
          </div>
        </div>
      </div>
      <div className="message-box">
        <div className="input-box">
          <img className="chat" src={Chat} alt="" />
          <input type="text" placeholder="Type a message" />
          <img className="search" src={Search} alt="se" />
        </div>
        <div className="mic">
          <img src={Mic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chatmessages;
