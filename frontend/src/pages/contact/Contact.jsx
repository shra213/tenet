import React from "react";
import "./contact.css";;
export default function Contact() {
    return <>
        <div class="container">
            <header class="header" style={{marginTop:"30px"}}>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Feel free to reach out using any of the methods below.</p>
            </header>
            <div class="contact-wrapper">

                <div class="contact-info">
                    <h2>Get in touch with us !</h2>

                    <div class="info-item">
                        <div class="icon-box">
                            <svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                </path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Email </h3>
                            <a href="ritikyawalkar2021@gmail.com">Gopoints.com</a>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="icon-box">
                            <svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                </path>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Contact </h3>
                            <a href="8080430765">8080430765</a>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="icon-box">
                            <svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Address</h3>
                            <p>K. K. Wagh <br />College of Engineering<br />Education and Research, Nashik. </p>
                        </div>
                    </div>


                    <div class="socials">
                        <h3>Connect With Us</h3>
                        <div class="social-icons">

                            <a href="https://github.com/yourprofile" class="social-icon" target="_blank">
                                <svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.26c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.63-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.51 11.51 0 013-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z">
                                    </path>
                                </svg>
                            </a>


                            <a href="https://twitter.com/yourprofile" class="social-icon" target="_blank">
                                <svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24">
                                    <path
                                        d="M18.146 0h3.78l-8.27 9.543L24 24h-7.826l-4.967-6.94L5.38 24H1.6l8.792-10.147L0 0h8.176l4.49 6.662L18.146 0zm-1.294 21.882h2.022L5.59 2.003H3.446l13.406 19.88z">
                                    </path>
                                </svg>
                            </a>


                            <a href="https://instagram.com/yourprofile" class="social-icon" target="_blank">
                                <svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" class="social-icon" target="_blank">
                                <svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7h5v17H0zm8-17h5v2.5h.07c.71-1.25 2.43-2.56 5.01-2.56C22.16 6.94 24 9.09 24 13v11h-5V14c0-1.72-.7-3.12-2.22-3.12-1.2 0-2.1.8-2.44 1.57-.12.3-.15.71-.15 1.12v10.43H8V7z">
                                    </path>
                                </svg>
                            </a>

                        </div>
                    </div>
                    <div class="map-preview">
                        <h3> Location</h3>
                        <div class="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29993.8365206693!2d73.7977165!3d19.9988776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebab15555555%3A0xdb01367e9d5cf969!2sK.K%20Wagh%20Institute%20Of%20Engineering%20Education%20and%20Research!5e0!3m2!1sen!2sin!4v1742662378744!5m2!1sen!2sin"
                                allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                title="Our Location">
                            </iframe>
                        </div>
                    </div>
                </div>


                <div class="contact-form">
                    <h2>Reach Out to Us</h2>

                    <form action="#" method="POST">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Name" required />
                        </div>

                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email Address" required />
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Subject" required />
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" placeholder="Write your message here " required></textarea>
                        </div>

                        <button type="submit " class="btn">
                            <svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            Send your message
                        </button>

                        <div class="privacy-note">
                            We typically respond to all inquiries within 24 hours . Your information is protected and will
                            never be shared with third parties.
                        </div>
                    </form>
                </div>
            </div>
            <footer class="footer">
                <p>© 2025 Gopoints. All rights reserved.</p>
            </footer>
        </div>
    </>
}