import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Home/styles.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/users/me", {
          method: "GET",
          credentials: "include",
        });

        setIsLoggedIn(response.ok);
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <nav className="navbar" >
      <div>
        <img src="assets/images/logologofinal.png" alt="logo" className="logo" style={{width:"auto"}} />
      </div>

      <div className="homenavlink">
        <Link to={"/about"}><button className="btton">About Us</button></Link>
        <Link to={"/reward"}><button className="btton">Rewards</button></Link>
        <Link to={"/contactUs"}><button className="btton">Contact</button></Link>
      </div>

      <Link to={isLoggedIn ? "/userDashboard" : "/Register"}>
        {isLoggedIn ? (
          <img
            src="assets/images/logologofinal.png"
            alt="Profile"
            className="profile-container profile-icon"
          />
        ) : (
          <button className="auth-button">Login / Signup</button>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
