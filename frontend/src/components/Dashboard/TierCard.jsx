import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles/TierCard.css";

const TierCard = ({ currentTier, nextTier, progressToNextTier }) => {
  const tierColors = {
    Bronze: "#cd7f32",
    Silver: "#c0c0c0",
    Gold: "#ffd700",
    Platinum: "#e5e4e2",
    Diamond: "#b9f2ff",
  };

  // Added benefits data to match your original structure
  const benefits = [
    "Exclusive rewards",
    "Discounts on vouchers",
    "Bonus points on trips"
  ];

  return (
    <div className="tier-card">
      <h3 className="tier-title">Your Tier Progress</h3>
      <div className="tier-content">
        {/* Circular Progress Bar - Kept your original implementation */}
        <div className="tier-progress">
          <CircularProgressbar
            value={progressToNextTier}
            text={`${progressToNextTier}%`}
            styles={buildStyles({
              textSize: "16px",
              textColor: "#fff",
              pathColor: tierColors[currentTier],
              trailColor: "#333",
            })}
          />
        </div>

        {/* Tier Information - Enhanced with more details */}
        <div className="tier-info">
          <p className="tier-name" style={{ color: tierColors[currentTier] }}>
            {currentTier}
          </p>
          <p className="next-tier-text">Next: {nextTier}</p>
        </div>
      </div>

      {/* Tier Benefits - Enhanced version of your original list */}
      <div className="tier-benefits-container">
        <h4 className="benefits-header">Your {currentTier} Benefits</h4>
        <ul className="tier-benefits">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <span className="benefit-icon">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TierCard;