import React, { useState } from "react";
import "./UpdatePass.css";
const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");



  const changepass = async (oldPassword,newPassword) => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/changepassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: newPassword
        }),
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error(`User Not found: ${response.status}`);
      }

      const data = await response.json();
      console.log("User ID:", data._id);
      alert(`User Login successfully! ID: ${data._id}`);


    } catch (error) {
      console.error("Error:", error.message);
      alert("User Not Exist");
    }
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Send API request to update password
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    changepass(oldPassword, newPassword);
    // Clear form after submission
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setMessage("Password updated successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Update Password
        </h2>

        {message && (
          <p className="text-center text-red-400 mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400">Old Password</label>
            <input
              type="password"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-400">New Password</label>
            <input
              type="password"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-400">Confirm New Password</label>
            <input
              type="password"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
