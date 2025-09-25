import React from 'react';
import './styles/CO2Saved.css';

const CO2Saved = ({ co2saved, totalco2 }) => {
  const userCO2Saved = co2saved || 0;
  const totalCO2Saved = totalco2 || 1;

  const contributionPercentage = totalCO2Saved
    ? Math.floor((userCO2Saved / totalCO2Saved) * 100)
    : 0;

  let encouragementMessage = `Keep going! Your efforts contribute ${contributionPercentage}% to our collective savings.`;
  if (contributionPercentage >= 40) {
    encouragementMessage = `🌟 Incredible! You’re a major eco-champion with a ${contributionPercentage}% contribution!`;
  } else if (contributionPercentage >= 25) {
    encouragementMessage = `💪 Great job! You're making a significant impact with ${contributionPercentage}% contribution!`;
  } else if (contributionPercentage >= 10) {
    encouragementMessage = `👍 Good work! Every bit counts—${contributionPercentage}% and climbing!`;
  }

  return (
    <div className="co2-saved">
      <h3>CO2 Saved</h3>
      <div className="co2-content">
        <div className="co2-icon" role="img" aria-label="leaf">🌿</div>
        <div className="co2-details">
          <p className="co2-amount">{Math.floor(userCO2Saved)} kg</p>
          <p className="co2-goal">{contributionPercentage}%</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${contributionPercentage}%` }}></div>
      </div>
      <p className="co2-message">{encouragementMessage}</p>
    </div>
  );
};

export default CO2Saved;
