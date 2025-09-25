import React from 'react';
import './styles/TotalPoints.css';

const TotalPoints = ({ totalPoints, nextMilestone, recentTripPoints }) => {
  const pointsNeeded = nextMilestone - totalPoints;
  const canRedeem = totalPoints >= 1000;

  const tierThresholds = [
    { name: "Bronze", points: 0 },
    { name: "Silver", points: 1000 },
    { name: "Gold", points: 2500 },
    { name: "Platinum", points: 5000 },
    { name: "Diamond", points: 10000 }
  ];

  const currentTier = tierThresholds.reduce((acc, tier) => 
    totalPoints >= tier.points ? tier.name : acc, "Bronze");
  const nextTier = tierThresholds.find(tier => tier.points > totalPoints)?.name || "Diamond";

  return (
    <div className="total-points-card">
      <h3>Total Points Earned</h3>
      <div className="points-content">
        <span role="img" aria-label="trophy" className="trophy-icon">🏆</span>
        <p className="points">{totalPoints} pts</p>
      </div>

      {canRedeem && <p className="redeem-message">🎁 You have enough points to redeem a reward!</p>}

      <div className="current-tier-badge">
        Current Tier: <span className={`tier-badge ${currentTier}`}>{currentTier}</span>
      </div>

      <p className="next-milestone">Next milestone: {nextMilestone} pts ({nextTier})</p>
      <p className="points-left">{pointsNeeded} pts to go!</p>

      <p className="recent-points">🚆 Last trip earned: +{recentTripPoints} pts</p>
    </div>
  );
};

export default TotalPoints;