import React, { useState, useEffect } from "react";
import "./Styles/Sidebar.css";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/users/me", {
          method: "GET",
          credentials: "include", // Include cookies if authentication is required
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data); // Set the profile data to state
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        setError(error.message); // Set error if any
      } finally {
        setLoading(false); // Set loading to false when request is done
      }
    };

    fetchProfile();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or animation
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }


  const toggleSidebar = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpen((prev) => !prev);
  };


  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/logout", {
        method: "POST",
        credentials: "include", // Ensures cookies are cleared
      });

      if (response.ok) {
        navigate("/") // Redirect to home after logout
        sessionStorage.removeItem("tripPopupShown");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };


  return (
    <>
      {/* dashprofile Icon completely outside the sidebar */}
      <div className="dashprofile-icon" onClick={toggleSidebar}>
        <img src="/logo.png" alt="dashprofile" />
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <div className="dashprofile-wrapper">
          <div className="dashprofile-details">
            <div className="dashprofile-name">{profile.firstname}</div>
            <div className="dashprofile-name">{profile.lastname}</div>
          </div>
        </div>

        <nav style={{ marginTop: "10rem" }}>
          <ul className="sidenav-links">
            <li className="sidenav-item">🏠 Dashboard</li>
            <li className="sidenav-item"onClick={()=>{
              navigate("/myrewards")
            }}>🎁 My Rewards</li>
            <li className="sidenav-item" onClick={()=>{
              navigate("/showrewards");
            }}>🎫 ShowRewards</li>
            <li className="sidenav-item" onClick={()=>{
              navigate("/ChangeUserDetails");
            }}>👤 Change User Details</li>
            <li className="sidenav-item" onClick={()=>{
              navigate("/UpdatePassword");
            }}>🔒 Update Password</li>
            <li className="sidenav-item" onClick={handleLogout}>🔒 Logout</li>
          </ul>
        </nav>
      </aside>
    </>
  );



};

export default Sidebar;


