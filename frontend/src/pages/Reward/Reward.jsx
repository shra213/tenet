import React from "react";
import './reward.css';
const Reward = () => {
    return <>
        <section className="hero1">
            <div className="hero-bg1"></div>
            <div className="hero-gradient1"></div>
            <div className="hero-particles1">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>
            <div className="container" style={{width:"100%"}}>
                <div className="hero-content1">
                    <div className="hero-text1">
                        <h1 className="hero-title1">Earn & Redeem <span style ={{
                            background: "linear-gradient(to right, #00ff88, #00cc66)",
                            webkitbackgroundclip: "text",
                            backgroundClip: "text",
                            color: "transparent"
                        }
                        }>Gopoints</span><br/>Rewards System</h1>
                        <p className="hero-subtitle1">Our innovative rewards program lets you earn points through sustainable public transport choices. Progress through tiers and unlock premium benefits while contributing to a greener planet.</p>

                        <div className="hero-badges1">
                            <div className="hero-badge1">
                                <div className="hero-badge-icon1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                    </svg>
                                </div>
                                <div className="hero-badge-text1">
                                    Real-Time Tracking
                                    <span>Earn points automatically</span>
                                </div>
                            </div>
                            <div className="hero-badge1">
                                <div className="hero-badge-icon1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="8" r="7"></circle>
                                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                    </svg>
                                </div>
                                <div className="hero-badge-text1">
                                    5 Premium Tiers
                                    <span>Unlock exclusive benefits</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="section calculator-section1">
            <div className="container1" style={{width:"100%"}}>
                <div className="section-header1">
                    <h2 className="section-title1">How Rewards Are Calculated</h2>
                    <p className="section-subtitle1">Our transparent points system ensures you know exactly what you're earning with every journey</p>
                </div>

                <div className="calculator-cards1">
                    <div className="calculator-card1">
                        <div className="calculator-icon1">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 7L6.44183 7L10.4418 3L9.00004 1.55817L2.55821 8L9.00004 14.4418L10.4418 13L6.44183 9L23 9V7Z"></path>
                                <path d="M1 12V16C1 19.866 4.13401 23 8 23H16C19.866 23 23 19.866 23 16V13H21V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V12H1Z"></path>
                            </svg>
                        </div>
                        <div className="calculator-content1">
                            <h3 className="calculator-title1">Distance-Based Points</h3>
                            <p className="calculator-description1">Every mile traveled on public transport earns you base points. The farther you go, the more you earn. Our app automatically calculates the distance traveled.</p>
                        </div>
                    </div>

                    <div className="calculator-card1">
                        <div className="calculator-icon1">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="calculator-content1">
                            <h3 className="calculator-title1">Tier Multipliers</h3>
                            <p className="calculator-description1">Your current tier level applies a multiplier to your base points. Higher tiers earn more points per mile, rewarding your loyalty and consistent usage.</p>
                        </div>
                    </div>

                    <div className="calculator-card1">
                        <div className="calculator-icon1">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                        </div>
                        <div className="calculator-content1">
                            <h3 className="calculator-title1">Bonus Factors</h3>
                            <p className="calculator-description1">Earn additional bonus points through consecutive day streaks, off-peak travel, special promotions, and seasonal campaigns. These can significantly boost your point total.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section formula-section1">
            <div className="formula-bg1"></div>
            <div className="container1" style={{width:"100%"}}>
                <div className="formula-container1">

                    <div className="formula-content1">
                        <h3 className="formula-title1">The Reward Formula</h3>
                        <p className="formula-description1">
                            Our transparent calculation method ensures you always know exactly how many points you're earning. The formula takes into account multiple factors to maximize your rewards.
                        </p>

                        <div className="formula-equation1">
                            Points=(Distance in km×Transport Multiplier)+Bonus Modifiers

                        </div>

                        <p className="formula-note1">
                            <strong>Example:</strong> A 10 km bus ride during off-peak hours:
                            (10 × 5) + 2 = 50 + 2 = 52 points

                            A 15 km auto-rickshaw ride (shared ride):
                            (15 × 4) + 3 = 60 + 3 = 63 points
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section transport-modes1">
            <div className="container1" style={{width:"100%"}}>
                <div className="section-header1">
                    <h2 className="section-title1">Points By Transport Type</h2>
                    <p className="section-subtitle1">Different modes of public transport earn different point values based on environmental impact</p>
                </div>

                <div className="modes-grid1">
                    <div className="mode-card1">
                        <div className="mode-image1">
                            <img src="https://th.bing.com/th/id/OIP.qwbWB9NaRTlnl1L1cFNngQHaEK?rs=1&pid=ImgDetMain" alt="AutoRicksahw" />
                        </div>
                        <div className="mode-content1">
                            <h3 className="mode-title1">
                                <div className="mode-title-icon1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="13" width="16" height="6" rx="2"></rect>
                                        <rect x="2" y="5" width="20" height="8" rx="2"></rect>
                                        <line x1="12" y1="5" x2="12" y2="13"></line>
                                        <line x1="6" y1="9" x2="6" y2="9.01"></line>
                                        <line x1="10" y1="9" x2="10" y2="9.01"></line>
                                        <line x1="14" y1="9" x2="14" y2="9.01"></line>
                                        <line x1="18" y1="9" x2="18" y2="9.01"></line>
                                    </svg>
                                </div>
                                Auto Rickshaw
                            </h3>
                            <p className="mode-description">A popular mode of short-distance travel, especially in cities and towns.Many auto-rickshaws now use CNG or electric power for eco-friendliness.Offers quick transport with negotiable fares and shared ride options.</p>
                            <div className="mode-points">
                                <div className="mode-points-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                </div>
                                <div className="mode-points-text">4 points per km</div>
                            </div>
                        </div>
                    </div>

                    <div className="mode-card1">
                        <div className="mode-image1">
                            <img src="https://www.loksatta.com/wp-content/uploads/2023/07/nashik-bus.jpg" alt="City bus" />
                        </div>
                        <div className="mode-content1">
                            <h3 className="mode-title1">
                                <div className="mode-title-icon1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 12V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8"></path>
                                        <circle cx="6.5" cy="17.5" r="2.5"></circle>
                                        <circle cx="17.5" cy="17.5" r="2.5"></circle>
                                        <path d="M20 12H4"></path>
                                        <path d="M15 4v4"></path>
                                        <path d="M9 4v4"></path>
                                    </svg>
                                </div>
                                City Buses
                            </h3>
                            <p className="mode-description">Serves millions daily in metropolitan and small cities.Offers the cheapest mode of transport for daily commuters. Many cities now have QR codes, smart cards, and online bookings.AC, non-AC, electric, and low-floor buses</p>
                            <div className="mode-points">
                                <div className="mode-points-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                </div>
                                <div className="mode-points-text">5 points per km</div>
                            </div>
                        </div>
                    </div>



                    <div className="mode-card1">
                        <div className="mode-image1">
                            <img src="https://th.bing.com/th/id/R.1a4a0b41a0cac76ab283a37e98c9dcf8?rik=RruPei2GSeZhtA&riu=http%3a%2f%2fs3.india.com%2ftravel%2fwp-content%2fuploads%2f2016%2f06%2fWDM-3D_class_Locomotive_of_Indian_Railway.jpg&ehk=FUTEV1PBqfJOvfna66QWn41HfgwH%2bXxjWVAuDG%2fsSaA%3d&risl=&pid=ImgRaw&r=0" alt="Indian Railway" />
                        </div>
                        <div className="mode-content1">
                            <h3 className="mode-title1">
                                <div className="mode-title-icon1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 4v16"></path>
                                        <path d="M18 4v16"></path>
                                        <path d="M12 4v4"></path>
                                        <path d="M12 12v4"></path>
                                        <rect x="4" y="8" width="16" height="4" rx="1"></rect>
                                        <rect x="4" y="16" width="16" height="4" rx="1"></rect>
                                    </svg>
                                </div>
                                Train
                            </h3>
                            <p className="mode-description">The largest rail network in Asia, serving over 8 billion passengers annually. General coaches, sleeper, AC, metro, and bullet trains.Provides cost-effective connectivity across states.Vande Bharat, bullet trains, and electrified routes </p>
                            <div className="mode-points">
                                <div className="mode-points-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                </div>
                                <div className="mode-points-text">3.5 points per km</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section tier-system" >
            <div className="container1" style={{width:"100%"}}>
                <div className="section-header1">
                    <h2 className="section-title1">Reward Tier System</h2>
                    <p className="section-subtitle1">Progress through tiers as you earn points, unlocking increasingly valuable benefits and higher earning rates</p>
                </div>

                <div className="retiers-container">
                    <div className="retier-progress">
                        <div className="progress-line"></div>

                        <div className="tier-marker bronze">
                            <span>B</span>
                            <div className="tier-label">Bronze</div>
                            <div className="tier-points">0 pts</div>
                        </div>

                        <div className="tier-marker copper">
                            <span>C</span>
                            <div className="tier-label">Copper</div>
                            <div className="tier-points">1,000 pts</div>
                        </div>

                        <div className="tier-marker silver">
                            <span>S</span>
                            <div className="tier-label">Silver</div>
                            <div className="tier-points">5,000 pts</div>
                        </div>

                        <div className="tier-marker gold">
                            <span>G</span>
                            <div className="tier-label">Gold</div>
                            <div className="tier-points">15,000 pts</div>
                        </div>

                        <div className="tier-marker platinum">
                            <span>P</span>
                            <div className="tier-label">Platinum</div>
                            <div className="tier-points">50,000 pts</div>
                        </div>
                    </div>

                    <div className="tier-cards">
                        <div className="tier-card bronze">
                            <div className="tier-card-header">
                                <div className="tier-coin">
                                    <div className="tier-coin-inner">
                                        <div className="tier-coin-front">B</div>
                                        <div className="tier-coin-back">1x</div>
                                    </div>
                                </div>
                                <h3 className="tier-name">Bronze</h3>
                                <p className="tier-requirement">Entry level: <strong>0 points</strong></p>
                                <span className="tier-multiplier">1x points multiplier</span>
                            </div>
                            <div className="tier-card-body">
                                <ul className="tier-benefits">
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Earn points on every ride</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Basic fare discounts</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Welcome bonus: 100 points</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tier-card copper">
                            <div className="tier-card-header">
                                <div className="tier-coin">
                                    <div className="tier-coin-inner">
                                        <div className="tier-coin-front">C</div>
                                        <div className="tier-coin-back">1.25x</div>
                                    </div>
                                </div>
                                <h3 className="tier-name">Copper</h3>
                                <p className="tier-requirement">Unlock at: <strong>5,000 points</strong></p>
                                <span className="tier-multiplier">1.2x points multiplier</span>
                            </div>
                            <div className="tier-card-body">
                                <ul className="tier-benefits">
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>5% off transit fares</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Bonus points for weekly streaks</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>One free ride on level-up</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tier-card silver">
                            <div className="tier-card-header">
                                <div className="tier-coin">
                                    <div className="tier-coin-inner">
                                        <div className="tier-coin-front">S</div>
                                        <div className="tier-coin-back">1.5x</div>
                                    </div>
                                </div>
                                <h3 className="tier-name">Silver</h3>
                                <p className="tier-requirement">Unlock at: <strong>10,000 points</strong></p>
                                <span className="tier-multiplier">1.5x points multiplier</span>
                            </div>
                            <div className="tier-card-body">
                                <ul className="tier-benefits">
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>10% off monthly passes</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Priority customer support</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Exclusive partner discounts</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tier-card gold">
                            <div className="tier-card-header">
                                <div className="tier-coin">
                                    <div className="tier-coin-inner">
                                        <div className="tier-coin-front">G</div>
                                        <div className="tier-coin-back">2x</div>
                                    </div>
                                </div>
                                <h3 className="tier-name">Gold</h3>
                                <p className="tier-requirement">Unlock at: <strong>15000 points</strong></p>
                                <span className="tier-multiplier">2x points multiplier</span>
                            </div>
                            <div className="tier-card-body">
                                <ul className="tier-benefits">
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>15% off transit fares</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Exclusive access to premium perks</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>50% off bike-sharing services</div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="tier-card platinum">
                            <div className="tier-card-header">
                                <div className="tier-coin">
                                    <div className="tier-coin-inner">
                                        <div className="tier-coin-front">P</div>
                                        <div className="tier-coin-back">3x</div>
                                    </div>
                                </div>
                                <h3 className="tier-name">Platinum</h3>
                                <p className="tier-requirement">Unlock at: <strong>30000 points</strong></p>
                                <span className="tier-multiplier">3x points multiplier</span>
                            </div>
                            <div className="tier-card-body">
                                <ul className="tier-benefits">
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Free transit during birthday month</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Concierge transit service</div>
                                    </li>
                                    <li className="tier-benefit">
                                        <div className="tier-benefit-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>Exclusive access to VIP travel events</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section rewards-usage1">
            <div className="rewards-bg1"></div>
            <div className="rewards-gradient1"></div>
            <div className="container1" style={{width:"100%"}}>
                <div className="section-header1">
                    <h2 className="section-title1">How To Use Your Rewards</h2>
                    <p className="section-subtitle1">Convert your public transport journeys into exclusive benefits</p>
                </div>

                <div className="usage-cards">

                    <div className="usage-card">
                        <div className="usage-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </div>
                        <div className="usage-content">
                            <h3 className="usage-title">Fare Discounts</h3>
                            <p className="usage-description">Redeem points to get discounts on city buses, auto-rickshaws, and metro rides, reducing your daily travel expenses.</p>
                            <div className="usage-value">1,500 points = ₹50 fare discount</div>
                        </div>
                    </div>

                    <div className="usage-card">
                        <div className="usage-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="22" y1="12" x2="18" y2="12"></line>
                                <line x1="6" y1="12" x2="2" y2="12"></line>
                                <line x1="12" y1="6" x2="12" y2="2"></line>
                                <line x1="12" y1="22" x2="12" y2="18"></line>
                            </svg>
                        </div>
                        <div className="usage-content">
                            <h3 className="usage-title">Shopping & Dining</h3>
                            <p className="usage-description">Use your points for discounts at partner cafes, restaurants, online stores, and local retail outlets.</p>
                            <div className="usage-value">3,000 points = ₹100 shopping voucher</div>
                        </div>
                    </div>

                    <div className="usage-card">
                        <div className="usage-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3z"></path>
                                <line x1="8" y1="6" x2="8" y2="18"></line>
                                <line x1="16" y1="6" x2="16" y2="18"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </div>
                        <div className="usage-content">
                            <h3 className="usage-title">Carbon Credits & Donations</h3>
                            <p className="usage-description">Convert your points into carbon credits or donate them to organizations working on environmental sustainability.</p>
                            <div className="usage-value">5,000 points = Carbon offset for 10kg CO₂</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section cta">
            <div className="cta-bg"></div>
            <div className="cta-gradient"></div>

            <div className="container1" style={{width:"100%"}}>
                <div className="cta-content">
                    <h2 className="cta-title">Start Earning Rewards Today</h2>
                    <p className="cta-text">Sign up now and start earning points for every bus, auto, and metro ride. Redeem them for discounts, shopping, and sustainability rewards.</p>

                    <div className="cta-buttons">
                        <a href="link the homepage here" className="cta-btn cta-btn-secondary">Back To Homepage</a>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer1">
            <div>
                <p className="copyright">© 2025 Gopoints. All rights reserved.</p>
            </div>
        </footer>
    </>
}
export default Reward;