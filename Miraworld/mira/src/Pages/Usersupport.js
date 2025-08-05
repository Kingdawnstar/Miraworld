import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Helpdialog from "../Components/Helpdialog";
import Sidebar from "../Components/Sidebar";
import TicketList from "../Components/TicketList";
import SearchAndFilters from "../Components/SearchAndFilters";
import TicketTabs from "../Components/TicketTabs";
import "./Usersupport.css";

const Usersupport = ({ toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Week");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleNewTicket = () => {
    // Handle new ticket creation
    setIsDialogOpen(true);;
  };

  return (
    <div className="Usersupport">
      <div className="Usersupport-cont">
        <Navbar toggleDarkMode={toggleDarkMode} />
        <div className="main-cont">
          <div className="set-aside">
            <Sidebar />
          </div>
          <div className="user-set-mid">
            <div className="set-mid-header">
              <h5>Help and Support</h5>
              <button className="new-ticket-btn" onClick={handleNewTicket}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M17 3H7C5.9 3 5 3.9 5 5V19L12 16L19 19V5C19 3.9 18.1 3 17 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 13H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                New Ticket
              </button>
            </div>

            <section className="help-support-content">
              <div className="ticket-management">
                <SearchAndFilters
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedPriority={selectedPriority}
                  setSelectedPriority={setSelectedPriority}
                  selectedTimeframe={selectedTimeframe}
                  setSelectedTimeframe={setSelectedTimeframe}
                />

                <TicketTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <TicketList
                  activeTab={activeTab}
                  searchQuery={searchQuery}
                  selectedPriority={selectedPriority}
                  selectedTimeframe={selectedTimeframe}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Helpdialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
};

export default Usersupport;
