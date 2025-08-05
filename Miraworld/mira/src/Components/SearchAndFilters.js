import React from 'react';
import './SearchAndFilters.css';

const SearchAndFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedPriority, 
  setSelectedPriority,
  selectedTimeframe,
  setSelectedTimeframe 
}) => {
  const priorities = ['High Priority', 'Medium Priority', 'Low Priority'];
  const timeframes = ['This Week', 'This Month', 'Last Week', 'Last Month'];

  return (
    <div className="search-filters">
      <div className="search-input-container">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 17L13.1333 13.1333" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
          type="text"
          placeholder="Search for ticket"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filters-container">
        <div className="filter-dropdown">
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="filter-select"
          >
            <option value="">Select Priority</option>
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
          <svg className="dropdown-icon" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M4.75 7.125L9.5 11.875L14.25 7.125" stroke="#84818A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="filter-dropdown">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="filter-select"
          >
            {timeframes.map((timeframe) => (
              <option key={timeframe} value={timeframe}>
                {timeframe}
              </option>
            ))}
          </select>
          <svg className="dropdown-icon" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M4.75 7.125L9.5 11.875L14.25 7.125" stroke="#84818A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
