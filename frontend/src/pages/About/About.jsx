import React from "react";
import "./about.css";
export default function About() {
    const textStyle = {
        background: "linear-gradient(to right, #00ff88, #00cc66)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        fontSize: "3.5rem",
        fontWeight: "bold",
    };
    return (
        <>
            <div className="logo-area">
                <div className="logo">
                    Gopoints
                </div>
            </div>

            <section className="hero">
                <div className="hero-bg"></div>
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">About <span style={textStyle}>Gopoints</span><br />Rewarding Sustainable Transit</h1>
                            <p className="hero-subtitle">Founded in 2019, Gopoints is revolutionizing how people think about and use public transportation through our innovative rewards system. We're dedicated to creating greener cities and more connected communities.</p>
                        </div>

                        <div className="hero-image-container">
                            <div className="hero-image animate-float">
                                <img src="https://static.theceomagazine.net/wp-content/uploads/2022/07/15152258/meeting-vs-collaboration.jpg" alt="Gopoints team collaboration meeting" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mission-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Mission</h2>
                        <p className="section-subtitle">Transforming public transit experiences while making our planet greener</p>
                    </div>

                    <div className="mission-content">
                        <div className="mission-text">
                            <h3 className="mission-title">Making Sustainable Transit Rewarding</h3>
                            <p className="mission-description">At Gopoints, we believe that sustainable transportation should be not just accessible and convenient, but also rewarding. Our mission is to incentivize the use of public transportation, reducing carbon emissions while creating a community of environmentally conscious travelers.</p>

                            <ul className="mission-points">
                                <li className="mission-point">
                                    <div className="mission-point-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <div className="mission-point-content">
                                        <h4 className="mission-point-title">Environmental Impact</h4>
                                        <p className="mission-point-description">We're committed to reducing carbon emissions by encouraging the use of public transportation over individual vehicles, helping to create cleaner air and more sustainable cities.</p>
                                    </div>
                                </li>
                                <li className="mission-point">
                                    <div className="mission-point-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div className="mission-point-content">
                                        <h4 className="mission-point-title">Community Building</h4>
                                        <p className="mission-point-description">We're creating a community of like-minded individuals who value sustainability and smart urban mobility solutions.</p>
                                    </div>
                                </li>
                                <li className="mission-point">
                                    <div className="mission-point-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="mission-point-content">
                                        <h4 className="mission-point-title">Reward Innovation</h4>
                                        <p className="mission-point-description">We're pioneering new ways to reward sustainable choices, making public transit not just a necessity, but a rewarding lifestyle choice.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mission-image">
                            <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589" alt="Sustainable city transportation" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">The principles that guide our mission and vision</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">Sustainability</h3>
                                <p className="value-description">We believe in creating lasting environmental impact by promoting eco-friendly transportation options and reducing carbon emissions in urban areas.</p>
                            </div>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                </svg>
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">Innovation</h3>
                                <p className="value-description">We continuously strive to develop new and creative ways to make sustainable transportation more attractive, convenient, and rewarding.</p>
                            </div>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">Community</h3>
                                <p className="value-description">We foster a sense of belonging among our users, creating a community of environmentally conscious individuals working toward a common goal.</p>
                            </div>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                </svg>
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">Transparency</h3>
                                <p className="value-description">We operate with full transparency in our reward calculations, partnerships, and environmental impact measurements, building trust with our users.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="cta-bg"></div>
                <div className="cta-gradient"></div>

                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Join Our Movement</h2>
                        <p className="cta-text">Download the Gopoints app today and start earning rewards for your sustainable transportation choices. Together, we can create greener cities and a healthier planet.</p>

                        <div className="cta-buttons">
                            <a href="#" className="cta-btn cta-btn-primary">Download App</a>
                            <a href="#" className="cta-btn cta-btn-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <p className="footer-text">Connect with us on social media</p>

                    <div className="footer-social">
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>

                    <p className="copyright">© 2023 Gopoints. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}; 