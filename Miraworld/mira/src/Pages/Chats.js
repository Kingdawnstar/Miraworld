import React from "react";
import Chatmessages from "../Components/Chatmessages";
import Sidebar from "../Components/Sidebar";
import Recentconversations from "../Components/Recentconversations";
import "./Chats.css";
import Navbar from "../Components/Navbar";

const Chats = ({ toggleDarkMode }) => {
  return (
    <div className="Chats">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="main-chat-container">
        <div className="Chat-aside">
          <Sidebar />
        </div>
        <div className="Chats-middle">
          <Chatmessages />
        </div>
        <div className="Recent-chats">
          <Recentconversations />
        </div>
      </div>
    </div>
  );
};

export default Chats;
