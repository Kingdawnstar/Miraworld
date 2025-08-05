import React from "react";
import "./Helpdialog.css"; // Import the CSS file for styling

const Helpdialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
            <div className="dialog-header">
          <h2>Create Quick Ticket</h2>
         <button className="help-close-button" onClick={onClose}>
          X
        </button>
        </div>
        <p>Write and address new queries and issues</p>
        
              <div className="input-group">
                  <div className="inp-cont">
                      <p className="field-top">Email</p>
                      <input type="email" placeholder="Type Email" className="input-field" />
                  </div>
                  <div className="inp-cont">
                      <p className="field-top">Request Ticket Type</p>
          <select className="input-field">
            <option value="">Choose Type</option>
            <option value="issue">Issue</option>
            <option value="question">Question</option>
          </select>
                  </div>

                  <div className="inp-cont">
                      <p className="field-top">Priority Status</p>
                      <select className="input-field">
            <option value="">Select Status</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          </div>
          
        </div>

        <label htmlFor="ticket-body">Ticket Body</label>
        <textarea
          id="ticket-body"
          className="ticket-body"
          placeholder="Type your ticket issue here..."
        />

        <button className="send-ticket-btn" onClick={onClose}>
          Send Ticket
        </button>
      </div>
    </div>
  );
};

export default Helpdialog;