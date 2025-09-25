import React from "react";
import "./Admin.css";
import {useState, useEffect} from "react";
import AddRewardForm from "./AddRewardForm";

export default function Admin(){
    const [forms, setForms] = useState([]);
    const [totalusers, setTotalusers] = useState(0);
    const [totalcollab, setTotalcollab] = useState(0);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        ShopName: "",
        rewardName: "",
        rewardDescription: "",
        rewardValue: "",
        leagueRequirement: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        try {
            const response = await fetch("http://localhost:4000/api/v1//add", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to add reward");
            }

            setMessage("Reward added successfully!");
            setFormData({
                ShopName: "",
                rewardName: "",
                rewardDescription: "",
                rewardValue: "",
                leagueRequirement: "",
            });
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        const getUsersAndCollabs = async () => {
            try {
                const [usersResponse, collabsResponse] = await Promise.all([
                    fetch("http://localhost:4000/api/v1/users/getusers", {
                        method: "GET",
                        credentials: "include",
                        headers: {"Content-Type": "application/json"},
                    }),
                    fetch("http://localhost:4000/api/v1/users/getcollabs", {
                        method: "GET",
                        credentials: "include",
                        headers: {"Content-Type": "application/json"},
                    })
                ]);

                if (!usersResponse.ok) throw new Error(`Error: ${usersResponse.status}`);
                if (!collabsResponse.ok) throw new Error(`Error: ${collabsResponse.status}`);

                const usersData = await usersResponse.json();
                const collabsData = await collabsResponse.json();

                setTotalusers(usersData.data.length);
                setTotalcollab(collabsData.data.length);
            } catch (error) {
                console.error("Fetching data failed:", error);
            }
        };
    
        getUsersAndCollabs();
    }, []);
    
    useEffect(() => {
        const getForms = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/v1/users/getform", {
                    method: "GET",
                    credentials: "include",
                    headers: {"Content-Type": "application/json"},
                });

                if (!response.ok) throw new Error(`Error: ${response.status}`);

                const data = await response.json();
                console.log(data.data);
                setForms(data.data || []);
            } catch (error) {
                console.error("Fetching forms failed:", error);
            }
        };

        getForms();
    }, []);

    const handleApprove = async (formId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/users/approve/${formsId}`, {
                method: "PUT",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
            });

            if (!response.ok) throw new Error("Failed to approve offer");

            // Update the forms list by removing the approved form
            setForms(forms.filter(form => form._id !== formId));
            setMessage("Offer approved successfully!");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleReject = async (formId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/users/reject-form/${formId}`, {
                method: "DELETE",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
            });

            if (!response.ok) throw new Error("Failed to reject offer");

            // Update the forms list by removing the rejected form
            setForms(forms.filter(form => form._id !== formId));
            setMessage("Offer rejected successfully!");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="dashboard-container" style={{minHeight: "100vh", width: "100%", padding: "2rem", display:"flex", flexDirection:"column"}}>
            <div className="logo-area" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src="logologofinal - Copy.png" style={{width: "166px"}} alt="Logo"/>
            </div>
            
            <div className="container">
                <header className="dashboard-header">
                    <h1 className="dashboard-title">Admin Dashboard</h1>
                    <p className="dashboard-subtitle">Manage users, collaborators, and system operations</p>
                </header>
            
                <section className="stats-section">
                    <div className="section-header">
                        <h2 className="section-title">Dashboard Overview</h2>
                    </div>
                    
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">{totalusers}</div>
                                <div className="stat-label">Total Users</div>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">{totalcollab}</div>
                                <div className="stat-label">Collaborators</div>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">0</div>
                                <div className="stat-label">Active Offers</div>
                            </div>
                        </div>
                    </div>    
                </section>

                <section className="offers-section">
                    <div className="section-header">
                        <h2 className="section-title">Pending Offers</h2>
                        <p className="section-subtitle">Offers submitted by collaborators awaiting approval</p>
                    </div>

                    {forms.length === 0 ? (
                        <div className="no-offers">
                            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <p>No pending offers found.</p>
                        </div>
                    ) : (
                        <div className="offers-grid">
                            {forms.map((form) => (
                                <div className="offer-card" key={form._id}>
                                    <div className="offer-header">
                                        <div className="offer-business">{form.ShopName || "Unknown Business"}</div>
                                        <span className="offer-badge offer-pending">pending</span>
                                    </div>
                                    <h3 className="offer-title">{form.name || "Unnamed Offer"}</h3>
                                    <p className="offer-description">{form.description || "No description provided."}</p>
                                    <div className="offer-details">
                                        <div className="detail-item">
                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
                                            </svg>
                                            <span>Value: {form.RewardValue || "N/A"}</span>
                                        </div>
                                        <div className="detail-item">
                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 3h18v18H3z"></path>
                                                <path d="M7 16h10M7 12h10M7 8h10"></path>
                                            </svg>
                                            <span>Address: {form.Address || "Any"}</span>
                                        </div>
                                    </div>
                                    <div className="offer-actions">
                                        <button 
                                            className="btn btn-approve"
                                            onClick={() => handleApprove(form._id)}
                                        >
                                            Approve
                                        </button>
                                        <button 
                                            className="btn btn-reject"
                                            onClick={() => handleReject(form._id)}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                
                <AddRewardForm/>
            </div>
        </div>
    );
}