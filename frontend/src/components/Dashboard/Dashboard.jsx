import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import UserProfile from './UserProfile';
import CO2Saved from './CO2Saved';
import TotalPoints from './TotalPoints';
import TierCard from './TierCard';
import TripHistory from './TripHistory';
import Leaderboard from './Leaderboard';
import './styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [stats, setstats] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/users/dashboard', {
          method: 'GET',
          credentials: 'include'
        });

        const statres= await fetch('http://localhost:4000/api/v1/stats', {
          method: 'GET',
          credentials: 'include'
        });
        if(!statres.ok){
          console.log("stat problem");
        }
        if (!response.ok) {
          // Redirect to login if not authenticated
          navigate('/login');
          return;
        }
        setstats(await statres.json());
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error verifying token:', error);
        navigate('/login');
      }
    };

    checkAuth();
  }, []);
  return (
    <div className="dashboard-container">
      <div className="main-content" style={{margin: '1px'}}>
        <TopNavbar />
        <div className="dashboard-content">
          {/* Part 1: User Profile and CO2 Saved */}
          <div className="part-1">
            <UserProfile />
            <CO2Saved co2saved={data.totalCO2Reduced} totalco2={stats.totalCO2Reduced}/>
          </div>

          {/* Part 2: Leaderboard, Total Points, and Tier Card */}
          <div className="part-2">
            <Leaderboard />
            <TotalPoints totalPoints = {data.totalTripPoints} nextMilestone = {data.nextMilestone} recentTripPoints = {data.lastTripPoints} />
            <TierCard currentTier = {data.currentLeague} nextTier = {data.nextLeague} progressToNextTier = {data.tierProgress} />
          </div>

          {/* Part 3: Trip History */}
          <div className="part-3">
            <TripHistory />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;