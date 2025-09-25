import React from "react";
import "./faq.css";

export default function Faq() {
    return <>
        <div className="container4">
            <header className="header">
                <div className="logo">
                    <img src="logologofinal - Copy.png" alt="Gopointslogo"/>
                </div>
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to the most common questions about GoPoints services and features.</p>
            </header>
            <div className="faq-wrapper">
                <div className="faq-category">
                    <h2 className="category-title">
                        <div className="icon-box">
                            <svg className="svg-icon" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        Account & Registration
                    </h2>
                    <div className="faq-items">
                        <div className="faq-item">
                            <div className="faq-question">
                                How do I create a GoPoints account?
                            </div>
                            <div className="faq-answer">
                                Creating a GoPoints account is easy! Simply visit our website , click on "Sign Up," and
                                follow the instructions. You'll need to provide your email address, create a password, and
                                fill in some basic information. Once you've verified your email, your account will be active
                                and ready to use.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                Is my personal information secure with GoPoints?
                            </div>
                            <div className="faq-answer">
                                Yes, we take your privacy and security seriously at GoPoints. .Our privacy policy outlines
                                in detail how we collect, use, and protect your data. We never sell your personal
                                information to third parties.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                How do I reset my password if I forget it?
                            </div>
                            <div className="faq-answer">
                                If you forget your password, click on the "Forgot Password" link on the login page. Enter
                                the email address associated with your account, and we'll send you a password reset link.
                                Follow the instructions in the email to create a new password. For security reasons,
                                password reset links expire after 24 hours.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-category">
                    <h2 className="category-title">
                        <div className="icon-box4">
                            <svg className="svg-icon4" viewBox="0 0 24 24">
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                        </div>
                        Points & Rewards
                    </h2>
                    <div className="faq-items">
                        <div className="faq-item">
                            <div className="faq-question">
                                How do I earn GoPoints?
                            </div>
                            <div className="faq-answer">
                                You earn points based on your travel fare, distance, and transport mode. Scanning the QR
                                code in the vehicle confirms your ride and automatically credits points to your account.


                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                How many points do I need for rewards?
                            </div>
                            <div className="faq-answer">
                                The number of points required varies by reward. Browse our Rewards Catalog to see all
                                available options and their point requirements. We regularly update our rewards catalog to
                                provide you with the best redemption options.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                Do my GoPoints expire?
                            </div>
                            <div className="faq-answer">
                                Yes, GoPoints expire 24 months after they are earned if there is no account activity.
                                However, any point-earning or redemption activity extends the expiration date of all your
                                points. Premium members enjoy extended expiration periods. We'll notify you via email before
                                your points are about to expire.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="faq-category">
                    <h2 className="category-title">
                        <div className="icon-box4">
                            <svg className="svg-icon4" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        Technical Issues
                    </h2>
                    <div className="faq-items">
                        <div className="faq-item">
                            <div className="faq-question">
                                The web app is not working. What should I do?
                            </div>
                            <div className="faq-answer">
                                If you're experiencing issues with the GoPoints web app, try these troubleshooting steps:
                                Try restarting the web app or your device. Check your internet connection. Clear the app
                                cache in your device settings. If problems persist, contact our support team with details
                                about the issue and your device information.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                My points aren't showing up after a purchase. What's wrong?
                            </div>
                            <div className="faq-answer">
                                Points typically take 24-48 hours to appear in your account after a purchase. If points are
                                still missing after 72 hours, submit a missing points claim through the app with your
                                receipt.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                How do I update my contact information?
                            </div>
                            <div className="faq-answer">
                                To update your contact information, log in to your GoPoints account, go to "Profile
                                Settings," and select "Edit Profile." You can update your email, phone number, and address
                                there. Remember to save changes when you're done. If you're changing your primary email
                                address, we'll send a verification link to the new email before the change takes effect.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-cta">
                <h2>Couldn't Find Your Answer?</h2>
                <p>We are always here to help you. Reach out to us with your questions and we'll get back to you as soon as
                    possible.</p>
                <a href="link conect with us page here" className="cta-button">
                    <svg className="svg-icon4" width="20" height="20" viewBox="0 0 24 24">
                        <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                        </path>
                    </svg>
                    Contact Support
                </a>
            </div>
            <footer className="footer4">
                <p>© 2025 GoPoints. All rights reserved.</p>
            </footer>
        </div>

    </>
}