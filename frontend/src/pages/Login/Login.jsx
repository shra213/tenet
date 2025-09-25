import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {authState} from '../../components/atoms/authAtom'
const Login = () => {
  const [iscollab, setcollab] = useRecoilState(authState);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '', // Password will be used only for user login
    userType: 'user', // Default user type is 'user'
  });

  const [error, setError] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('url("/logn.jpg")'); // Default background image for user

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Change the background image when selecting the collaborator
    if (id === 'userType') {
      setBackgroundImage(value === 'collaborator'
        ? 'url("/collaborator.png")' // Set collaborator background
        : 'url("/logn.jpg")' // Set user background
      );
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data based on user type
    if (formData.userType === 'user' && (!formData.username || !formData.email || !formData.password)) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.userType === 'collaborator' && (!formData.username)) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    try {
      // Select endpoint based on user type
      const endpoint = formData.userType === 'user' ? '/users/login' : '/collab/login';
      console.log(`http://localhost:4000/api/v1${endpoint}`);
      // Login request
      const response = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.userType === 'user' ? formData.email : undefined, // Only send email for 'user' login
          password: formData.password // Only send password for 'user' login
        }),
        credentials: "include"
      });
      if (!response.ok) {
        throw new Error("Invalid credentials or user not found");
      }
      const data = await response.json();
      alert("Login successful!");
      if(formData.userType === 'user'){
        if(data.data.user.isAdmin){
          navigate("/admin");
        }else{
          navigate("/");
        }
         // Redirect to home after successful logi
      }else{
        setcollab(true);
        navigate("/collabDashboard");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("Invalid credentials or user not found");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative" style={{ backgroundImage }}>
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="relative z-10 bg-black bg-opacity-90 backdrop-blur-md p-8 w-96 sm:w-[450px] text-center rounded-lg border-2 border-green-300 border-opacity-30 shadow-lg shadow-green-300/30">
        <div className="mb-3">
          <Link to = "/"><img src="logologofinal - Copy.png" alt="Logo" className="w-40 mx-auto"/></Link>
        </div>

        <h2 className="text-2xl font-semibold text-green-400 mb-2">Welcome Back!</h2>
        <p className="text-sm text-gray-400 mb-6">Sign in to continue your journey.</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
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

          {(
            <div className="mb-4">
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
          )}

          <div className="mb-4 flex justify-start items-center">
            <label className="text-green-400 mr-4">Login as:</label>
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
            Login
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          Don't have an account? <a href="/register" className="text-green-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
