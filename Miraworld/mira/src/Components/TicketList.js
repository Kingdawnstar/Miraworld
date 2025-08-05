import React from 'react';
import TicketItem from './TicketItem';
import './TicketList.css';

const TicketList = ({ activeTab, searchQuery, selectedPriority, selectedTimeframe }) => {
  const tickets = [
    {
      id: '2023-CS123',
      title: 'How to deposit money to my portal?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'open',
      priority: null,
      author: {
        name: 'John Snow',
        avatar: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/C2Yshj5hy8.png'
      },
      postedAt: '12:45 AM',
      statusColor: 'rgba(248, 165, 52, 0.6)'
    },
    {
      id: '2023-CS124',
      title: 'How to deposit money to my portal?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'open',
      priority: 'High Priority',
      author: {
        name: 'John Snow',
        avatar: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/Y7ePGdoOVJ.png'
      },
      postedAt: '12:45 AM',
      statusColor: '#3B8AFF'
    },
    {
      id: '2023-CS125',
      title: 'How to deposit money to my portal?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'resolved',
      priority: 'High Priority',
      author: {
        name: 'John Snow',
        avatar: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/VLZhz4V7iu.png'
      },
      postedAt: '12:45 AM',
      statusColor: '#54C104'
    }
  ];

  const filteredTickets = tickets.filter(ticket => {
    // Filter by active tab
    if (activeTab !== 'all') {
      if (activeTab === 'new' && ticket.status !== 'new') return false;
      if (activeTab === 'ongoing' && ticket.status !== 'ongoing') return false;
      if (activeTab === 'resolved' && ticket.status !== 'resolved') return false;
    }

    // Filter by search query
    if (searchQuery && !ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !ticket.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Filter by priority
    if (selectedPriority && ticket.priority !== selectedPriority) {
      return false;
    }

    return true;
  });

  return (
    <section className="ticket-list">
      <div className="ticket-list-container">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <div className="no-tickets">
            <p>No tickets found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TicketList;
