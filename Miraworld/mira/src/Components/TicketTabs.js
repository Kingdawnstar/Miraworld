import React from 'react';
import './TicketTabs.css';

const TicketTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 'all',
      label: 'All Tickets',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.33333 3.33333H16.6667C17.5833 3.33333 18.3333 4.08333 18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5C1.66667 4.08333 2.41667 3.33333 3.33333 3.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.3333 6.66667L10 11.6667L1.66667 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'new',
      label: 'New',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.33333 3.33333H16.6667C17.5833 3.33333 18.3333 4.08333 18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5C1.66667 4.08333 2.41667 3.33333 3.33333 3.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.3333 6.66667L10 11.6667L1.66667 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="15" cy="5" r="3" fill="#FF4444"/>
        </svg>
      )
    },
    {
      id: 'ongoing',
      label: 'On-Going',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.33333 3.33333H16.6667C17.5833 3.33333 18.3333 4.08333 18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5C1.66667 4.08333 2.41667 3.33333 3.33333 3.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.3333 6.66667L10 11.6667L1.66667 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.66667 10L8.33333 11.6667L13.3333 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'resolved',
      label: 'Resolved',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.33333 3.33333H16.6667C17.5833 3.33333 18.3333 4.08333 18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5C1.66667 4.08333 2.41667 3.33333 3.33333 3.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.3333 6.66667L10 11.6667L1.66667 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.66667 10L8.33333 11.6667L13.3333 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <nav className="ticket-tabs">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="tab-underline">
        <div className={`active-indicator tab-${activeTab}`}></div>
      </div>
    </nav>
  );
};

export default TicketTabs;
