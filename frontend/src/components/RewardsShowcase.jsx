import React from 'react';

const RewardsShowcase = () => {
  return (
    <section className="rewards-showcase0">
      <div className="container0">
        <h2 id="red" className="section-title">🎁 Unlock Exclusive Rewards</h2>
        <p className="section-subtitle">Every trip earns you points! Redeem them for exciting benefits.</p>
        <div className="rewards-container0">
          <div className="reward-card0">
            <img src="assets/images/discount.png" alt="Fare Discounts" />
            <div className="reward-info0">
              <h3>Fare Discounts</h3>
              <p>Use points to get instant discounts on bus, metro & train fares.</p>
            </div>
          </div>
          <div className="reward-card0">
            <img src="assets/images/specialoffer.jpg" alt="Partner Offers" />
            <div className="reward-info0">
              <h3>Partner Store Offers</h3>
              <p>Exclusive deals at cafes, malls, and retail stores.</p>
            </div>
          </div>
          <div className="reward-card0">
            <img src="assets/images/leaf.jpg" alt="Carbon Credit" />
            <div className="reward-info0">
              <h3>Carbon Credit Exchange</h3>
              <p>Convert points into carbon credits & support green initiatives.</p>
            </div>
          </div>
          <div className="reward-card0">
            <img src="assets/images/trophy.jpg" alt="Level Up" />
            <div className="reward-info0">
              <h3>Level Up & Win</h3>
              <p>Unlock premium perks by reaching milestones & challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsShowcase;