import React from 'react';
import { useState, useEffect } from 'react';
import './styles/Leaderboard.css';

const Leaderboard = () => {
  const [topUsers, setTopUsers] = useState([]);
  
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/users/leaderboard', {
          method: 'GET',
          credentials: 'include'
        });

        if (response.ok) {
          const data = await response.json();
          // Sort by points descending to ensure top rankings
          setTopUsers(data);
        } else {
          console.error('Failed to fetch leaderboard');
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []); 

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h3>Top Travelers</h3>
        <span className="leaderboard-subtitle">Ranked by Trip Points</span>
      </div>
      <ul className="leaderboard-list">
        {topUsers.slice(0, 5).map((user, index) => (
          <li key={user._id} className="leaderboard-item">
            <div className="user-rank-container">
              <span className="user-rank">{index + 1}</span>
            </div>
            <span className="user-name">{user.username}</span>
            <div className="user-stats">
              <span className="user-points">{user.TripPoints.toLocaleString()} pts</span>
              <span className={`user-tier ${user.currentLeague}`}>
                {user.currentLeague}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;