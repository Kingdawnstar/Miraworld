import React, { useState } from "react";
import "./Commentpopup.css"; // Ensure this CSS file is created for styling
import Mic from "../assetsmira/Group 2179.png";
import Chat from "../assetsmira/chat.png";
import Share from "../assetsmira/tabler_send.png";
import S1 from "../assetsmira/s1.jpg";
import S2 from "../assetsmira/s2.jpg";
import S3 from "../assetsmira/s3.jpg";
import St1 from "../assetsmira/st1.jpg";
import S6 from "../assetsmira/s6.jpg";
import S5 from "../assetsmira/s5.jpg";
import S7 from "../assetsmira/s7.jpg";

const CommentPopup = ({ isOpen, onClose, postImage }) => {
  const [newComment, setNewComment] = useState("");

  // Sample comments data
  const comments = [
    {
      profilePic: S1,
      name: "User One",
      text: "Great post! Mira is really a great platform that has helped me over the years",
    },
    {
      profilePic: S2,
      name: "User Two",
      text: "Thanks for sharing! Mira is really a great platform that has helped me over the years",
    },
    {
      profilePic: S3,
      name: "User Three",
      text: "Amazing content  Mira is really a great platform that has helped me over the years!",
    },
    {
      profilePic: St1,
      name: "User One",
      text: "Great post  Mira is really a great platform that has helped me over the years!",
    },
    {
      profilePic: S6,
      name: "User Two",
      text: "Thanks for sharing  Mira is really a great platform that has helped me over the years!",
    },
    {
      profilePic: S1,
      name: "User One",
      text: "Great post! Mira is really a great platform that has helped me over the years",
    },
    {
      profilePic: S2,
      name: "User Two",
      text: "Thanks for sharing! Mira is really a great platform that has helped me over the years",
    },
    {
      profilePic: S5,
      name: "User Three",
      text: "Amazing content  Mira is really a great platform that has helped me over the years!",
    },
    {
      profilePic: S7,
      name: "User Three",
      text: "Amazing content  Mira is really a great platform that has helped me over the years!",
    },
  ];

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Logic to add a new comment can be implemented here
    setNewComment("");
  };

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="popup-content">
          <div className="p-img">
            <img className="post-image" src={postImage} alt="Post" />
          </div>
          <div className="comments-section">
            <h4>Comments</h4>
            <div className="comment-wrap">
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <img
                    className="comment-profile"
                    src={comment.profilePic}
                    alt="Profile"
                  />
                  <div className="comment-info">
                    <h4>{comment.name}</h4>
                    <div className="content">
                      <div className="paragraph">
                        <p>{comment.text}</p>
                      </div>
                      <div className="time">
                        <span>02:00pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <div className="input">
                <img className="first-img" src={Chat} alt="" />
                <input
                  type="text"
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment..."
                />
                <img className="sec-img" src={Share} alt="" />
              </div>
              <div className="audio-mic">
                <img src={Mic} alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
