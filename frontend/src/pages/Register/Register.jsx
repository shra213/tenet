import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    ShopName:'',
    fullname:'',    
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'user',  // Default user type is 'user'
  });

  const [error, setError] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('url("/logn.jpg")');  // Default background image for user

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Change the background image when selecting the collaborator
    if (e.target.id === 'userType') {
      if (value === 'collaborator') {
        setBackgroundImage('url("/collaborator.jpg")'); // Set collaborator background
      } else {
        setBackgroundImage('url("/logn.jpg")'); // Set user background
      }
    }
  };

  const registerUser = async (formData) => {
    try {
      const endpoint = formData.userType === 'user' ? "/users/register" : "/collab/register";
      const response = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`User Already Exist: ${response.status}`);
      }

      const data = await response.json();
      alert(`User registered successfully! ID: ${data._id}`);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.message);
      alert("seUser Already Exist");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    registerUser(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative" style={{ backgroundImage }}>
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="relative z-10 bg-black bg-opacity-90 backdrop-blur-md p-8 w-96 sm:w-[450px] text-center rounded-lg border-2 border-green-300 border-opacity-30 shadow-lg shadow-green-300/30">
        <div className="mb-6">
          <img src="assets/images/logologofinal.png" alt="Logo" className="w-36 mx-auto" />
        </div>

        <h2 className="text-2xl font-semibold text-green-400 mb-2">Create Your Account</h2>
        <p className="text-sm text-gray-400 mb-6">Sign up and start earning rewards for your public transport journeys.</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* First and Last Name Inputs */}
          {formData.userType === 'user' && (
            <div className="mb-4 flex justify-between">
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400 mr-2"
                required
              />
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400 ml-2"
                required
              />
            </div>
          )}


          {formData.userType !== 'user' && (
            <div className="mb-4 flex justify-between">
              <input
                type="text"
                id="ShopName"
                placeholder="Shop Name"
                value={formData.ShopName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400 mr-2"
                required
              />
              <input
                type="text"
                id="fullname"
                placeholder="full Name"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400 ml-2"
                required
              />
            </div>
          )}


          {/* Username */}
          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400"
              required
            />
          </div>

          {/* Email - Only for user type */}
          {(
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400"
                required
              />
            </div>
          )}

          {/* Password and Confirm Password */}
          <div className="mb-4 flex justify-between">
            <div className="mb-4 mr-2">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 text-center focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-400"
                required
              />
            </div>
          </div>

          {/* Select user type */}
          <div className="mb-4 flex justify-start items-center">
            <label className="text-green-400 mr-4">Sign Up as:</label>
            <select
              id="userType"
              value={formData.userType}
              onChange={handleChange}
              className="p-3 border-none rounded-md bg-gray-800 text-white text-lg transition-all focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400"
            >
              <option value="user">User</option>
              <option value="collaborator">Collaborator</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold rounded-lg hover:from-green-600 hover:to-green-800 hover:shadow-green-400/50 hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          Already have an account? <a href="/login" className="text-green-400 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
