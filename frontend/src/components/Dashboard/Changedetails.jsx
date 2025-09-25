import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import "./Styles/Changedetails.css";

const ChangeUserDetails = () => {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const changeUserDetails = async (firstname, lastname, email) => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/changedetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstname, lastname, email }),
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error(`Failed to update details: ${response.status}`);
      }

      const res = await response.json();
      setSuccessMessage(`✅ Details Updated Successfully! Name: ${res.data.firstname} ${res.data.lastname}`);

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error:", error.message);
      setSuccessMessage("❌ Failed to update details");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeUserDetails(userDetails.firstname, userDetails.lastname, userDetails.email);
  };

  return (
    <div className="change-user-container">
      <motion.div
        className="change-user-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="change-user-title">Update Profile</h2>

        {successMessage && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle className="success-icon" /> {successMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="change-user-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={userDetails.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={userDetails.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="save-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save Changes
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ChangeUserDetails;
