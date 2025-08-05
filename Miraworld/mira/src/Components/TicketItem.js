import React from 'react';
import './TicketItem.css';

const TicketItem = ({ ticket }) => {
  const handleOpenTicket = () => {
    console.log('Opening ticket:', ticket.id);
  };

  return (
    <article className="ticket-item">
      <header className="ticket-header">
        <div className="ticket-info">
          <div className="ticket-id-container">
            <div 
              className="status-indicator" 
              style={{ backgroundColor: ticket.statusColor }}
            ></div>
            <h3 className="ticket-id">Ticket# {ticket.id}</h3>
          </div>
          {ticket.priority && (
            <div className="priority-badge">
              <span className="priority-text">{ticket.priority}</span>
            </div>
          )}
        </div>
        <time className="posted-time">Posted at {ticket.postedAt}</time>
      </header>

      <div className="ticket-content">
        <div className="ticket-details">
          <h4 className="ticket-title">{ticket.title}</h4>
          <p className="ticket-description">{ticket.description}</p>
        </div>
        <div className="ticket-divider"></div>
      </div>

      <footer className="ticket-footer">
        <div className="author-info">
          <img 
            src={ticket.author.avatar} 
            alt={ticket.author.name}
            className="author-avatar"
          />
          <span className="author-name">{ticket.author.name}</span>
        </div>
        <button className="open-ticket-btn" onClick={handleOpenTicket}>
          Open Ticket
        </button>
      </footer>
    </article>
  );
};

export default TicketItem;