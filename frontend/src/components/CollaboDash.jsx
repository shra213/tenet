import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './collabdash.css';
import { Link } from "react-router-dom";
export default function CollaboDash() {
    const navigate = useNavigate();
    const [collab, setCollab] = useState({});
    const [editedProfile, setEditedProfile] = useState({
        username: "",
        fullname: "",
        email: "",
        Address: ""
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [offer, setOffer] = useState({
        ShopName: "",
        name: "",
        description: "",
        Address: "",
        pointsRequired: "",
        RewardValue:"",
        termsAccepted: false
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // Fetch collaborator profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:4000/api/v1/collab/getprofile", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setCollab(data.data);
                setEditedProfile({
                    username: data.data.username || "",
                    fullname: data.data.fullname || "",
                    email: data.data.email || "",
                    Address: data.data.Address || ""
                });
            } catch (error) {
                console.error("Error fetching profile:", error);
                setError("Failed to load profile. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    // Handle profile input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Update profile
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/api/v1/collab/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(editedProfile)
            });

            if (!response.ok) {
                throw new Error("Failed to update profile");
            }

            const data = await response.json();
            setCollab(prev => ({ ...prev, ...data.data }));
            setSuccessMessage("Profile updated successfully!");
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (error) {
            console.error("Error updating profile:", error);
            setError("Failed to update profile. Please try again.");
            setTimeout(() => setError(null), 3000);
        }
    };

    // Handle password changes
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Change password
    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError("New passwords do not match");
            setTimeout(() => setError(null), 3000);
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/api/v1/collab/changepass", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(passwordData)
            });

            if (!response.ok) {
                throw new Error("Failed to change password");
            }

            setSuccessMessage("Password changed successfully!");
            setPasswordData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: ""
            });
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (error) {
            console.error("Error changing password:", error);
            setError("Failed to change password. Please check your current password.");
            setTimeout(() => setError(null), 3000);
        }
    };

    // Submit new offer
    const handleOfferChange = (e) => {
        const { name, value, type, checked } = e.target;
        setOffer(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleOfferSubmit = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setError(null);
        setSuccessMessage(null);

        // Validate terms acceptance
        if (!offer.termsAccepted) {
            setError("You must accept the terms to submit an offer");
            return;
        }

        // Validate required fields
        if (!offer.ShopName || !offer.name || !offer.description || !offer.Address || !offer.pointsRequired) {
            setError("All fields are required");
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/api/v1/collab/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Accept": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    ShopName: offer.ShopName,
                    name: offer.name,
                    description: offer.description,
                    Address: offer.Address,
                    pointsRequired: offer.pointsRequired,
                    RewardValue:offer.RewardValue,
                    termsAccepted: offer.termsAccepted
                })
            });

            // Check if response is JSON
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const text = await response.text();
                throw new Error(text || "Invalid server response");
            }

            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                throw new Error(data.message || "Failed to submit offer");
            }

            // Success case
            alert("submitted");
            console.log(data);
            setSuccessMessage("Offer submitted successfully!");
            setOffer({
                ShopName: "",
                name: "",
                description: "",
                Address: "",
                pointsRequired: "",
                RewardValue:"",
                termsAccepted: false
            });
        } catch (error) {
            console.error("Error submitting offer:", error);
            setError(error.message || "Failed to submit offer. Please try again.");
        }
    };
    // Logout
    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/v1/collab/logout", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                navigate("/");
            } else {
                throw new Error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
            setError("Failed to logout. Please try again.");
            setTimeout(() => setError(null), 3000);
        }
    };

    if (loading) {
        return (
            <div className="container">
                <div className="loading-spinner"></div>
                <p>Loading your dashboard...</p>
            </div>
        );
    }

    return (
        <div className="container">
            {/* Logo Area */}
            <Link to ={"/"}><div className="logo-area">
                <img
                    src="logologofinal - Copy.png"
                    alt="Gopoints Logo"
                    className="dashboard-logo"
                    style={{width:"10rem"}}
                />
            </div></Link>

            {/* Header */}
            <header className="dashboard-header">
                <h1 className="dashboard-title">{collab.ShopName || "Your Dashboard"}</h1>
                <p className="dashboard-subtitle">Manage your partnership and rewards</p>
            </header>

            {/* Messages */}
            {error && <div className="alert alert-error">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            {/* Profile Overview */}
            <section className="card">
                <h2 className="card-title">Profile Overview</h2>
                <div className="profile-content">
                    <div className="profile-item">
                        <span className="profile-label">Fullname:</span>
                        <span className="profile-value">{collab.fullname || "Not provided"}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Username:</span>
                        <span className="profile-value">{collab.username || "Not provided"}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Shop Name:</span>
                        <span className="profile-value">{collab.ShopName || "Not provided"}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Email:</span>
                        <span className="profile-value">{collab.email || "Not provided"}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Address:</span>
                        <span className="profile-value">{collab.Address || "Not provided"}</span>
                    </div>
                </div>
            </section>

            {/* Update Details Form */}
            <section className="card">
                <h2 className="card-title">Update Details</h2>
                <form onSubmit={handleProfileUpdate}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={editedProfile.username}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Update your username"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="fullname">Fullname</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={editedProfile.fullname}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Update your full name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={editedProfile.email}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Update your email address"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="Address"
                            value={editedProfile.Address}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Update your address"
                        />
                    </div>
                    <button type="submit" className="btn">Save Changes</button>
                </form>
            </section>

            {/* Change Password Form */}
            <section className="card">
                <h2 className="card-title">Change Password</h2>
                <form onSubmit={handleChangePassword}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="currentPassword">Current Password</label>
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            className="form-input"
                            placeholder="Enter your current password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            className="form-input"
                            placeholder="Enter your new password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            className="form-input"
                            placeholder="Confirm password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Update Password</button>
                </form>
            </section>


            <section className="card">
                <h2 className="card-title">Verify Reward</h2>
                <form action="#" method="post">
                    <div className="form-group">
                        <label className="form-label" htmlFor="rewardUsername">Username</label>
                        <input type="text" id="rewardUsername" className="form-input" placeholder="Enter customer username" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="rewardId">Reward ID</label>
                        <input type="text" id="rewardId" className="form-input" placeholder="Enter reward ID" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="otp">OTP</label>
                        <input type="text" id="otp" className="form-input" placeholder="Enter OTP code" />
                    </div>
                    <button type="submit" className="btn">Verify Reward</button>
                </form>
            </section>


            <section className="card">
                <h2 className="card-title">Submit New Offer</h2>

                <form onSubmit={handleOfferSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="ShopName">Shop Name</label>
                        <input
                            type="text"
                            id="ShopName"
                            name="ShopName"
                            value={offer.ShopName}
                            onChange={handleOfferChange}
                            className="form-input"
                            placeholder="Enter your shop name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="RewardValue">Reward Value</label>
                        <input
                            type="text"
                            id="RewardValue"
                            name="RewardValue"
                            value={offer.RewardValue}
                            onChange={handleOfferChange}
                            className="form-input"
                            placeholder="Enter Reward value"
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Offer Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={offer.name}
                            onChange={handleOfferChange}
                            className="form-input"
                            placeholder="Enter the offer name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="description">Offer Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={offer.description}
                            onChange={handleOfferChange}
                            className="form-input form-textarea"
                            placeholder="Describe your offer in detail"
                            required
                            rows="5"
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="Address">Redemption Address</label>
                        <input
                            type="text"
                            id="Address"
                            name="Address"
                            value={offer.Address}
                            onChange={handleOfferChange}
                            className="form-input"
                            placeholder="Where customers can redeem this offer"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="pointsRequired">Points Required</label>
                        <input
                            type="number"
                            id="pointsRequired"
                            name="pointsRequired"
                            value={offer.pointsRequired}
                            onChange={handleOfferChange}
                            className="form-input"
                            placeholder="e.g., 500"
                            required
                            min="1"
                        />
                    </div>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="terms"
                            name="termsAccepted"
                            checked={offer.termsAccepted}
                            onChange={handleOfferChange}
                            className="checkbox"
                            required
                        />
                        <label htmlFor="terms" className="checkbox-label">
                            I agree that this offer follows all Gopoints guidelines and can be revoked if found to violate terms.
                        </label>
                    </div>

                    <button type="submit" className="btn">Submit Offer</button>
                </form>
            </section>

            {/* Logout Button */}
            <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>

            {/* Footer */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} Gopoints. All rights reserved.</p>
            </footer>
        </div>
    );
}