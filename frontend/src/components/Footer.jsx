import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container0">
        <div className="footer-brand0" style={{display:"flex",flexDirection:"column", justifyContent :"end", alignItems:"center"}}>
          <Link to ="/dashboard"><img src="logologofinal - Copy.png" alt="Public Transport Rewards Logo" className="footer-logo" style={{width:"10rem"}}/></Link>
          <p className="tagline0">Your Journey, Your Rewards. <br />Travel Smart, Earn More!</p>
        </div>
        <div className="footer-links0">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="how-it-works.html">How It Works</a></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><a href="writetous.html">Write to us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <Link to="/contactUs"><h3>Contact Us</h3></Link>
          <p>Email: <a href="ritikyawalkar2021@gmail.com">ritikyawalkar2021@gmail.com</a></p>
          <p>Phone: +91 8080430765</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Public Transport Rewards. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;