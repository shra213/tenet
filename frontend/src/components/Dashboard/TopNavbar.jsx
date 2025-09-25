import React from 'react';
import './styles/TopNavbar.css';
import { useNavigate } from 'react-router-dom';

const TopNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="top-dashnavbar">
      {/* GoPoint Logo on the Left */}
      <div className="dashlogo" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="GoPoint" className="gopoint-logo" />
      </div>
    </div>
  );
};

export default TopNavbar;
