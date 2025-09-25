import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../pages/Home/styles.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { authState } from "./atoms/authAtom";
import { useRecoilValue } from "recoil";

const Hero = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [showTripPopup, setShowTripPopup] = useState(false);
    const [scanResult, setScanResult] = useState(null);
    const [scanner, setScanner] = useState(null);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const iscollab = useRecoilValue(authState);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/v1/users/me", {
                    method: "GET",
                    credentials: "include",
                });

                if (response.ok) {
                    const userData = await response.json();
                    setIsAuthenticated(true);
                    setUsername(userData.firstname);

                    if (!sessionStorage.getItem("tripPopupShown")) {
                        setShowTripPopup(true);
                        sessionStorage.setItem("tripPopupShown", "true");
                    }
                } else {
                    setIsAuthenticated(false);
                    setUsername(null);
                }
            } catch (error) {
                console.error("Error verifying token:", error);
                setIsAuthenticated(false);
                setUsername(null);
            }
        };

        checkAuth();
    }, []);

    const closePopup = (e) => {
        if (e.target.classList.contains("trip-popup")) {
            setShowTripPopup(false);
            if (scanner) scanner.clear();
        }
    };

    const tripregister = async (decodedText) => {
        try {
            const parsedData = JSON.parse(decodedText);

            const response = await fetch("http://localhost:4000/api/v1/users/trips/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(parsedData),
                credentials: "include"
            });

            if (!response.ok) {
                console.log("Parsed Data:", parsedData);
                throw new Error(`Trip registration failed: ${response.status}`);
            }

            const data = await response.json();
            console.log("Trip Registered:", data);

            setScanResult(data.trip);
            setShowSuccessPopup(true);

            setTimeout(() => {
                setShowSuccessPopup(false);
            }, 4000);
        } catch (error) {
            console.error("Trip Registration Error:", error);
        }
    };

    useEffect(() => {
        if (showTripPopup) {
            const qrScanner = new Html5QrcodeScanner("qr-reader", {
                fps: 10,
                qrbox: { width: 250, height: 250 }
            });

            qrScanner.render(
                (decodedText) => {
                    setShowTripPopup(false);
                    qrScanner.clear();
                    setScanner(null);
                    tripregister(decodedText);
                },
                (error) => console.log("Scanning error:", error)
            );

            setScanner(qrScanner);
            return () => qrScanner.clear();
        }
    }, [showTripPopup]);

    return (
        <div className="main0">
            <Navbar />
            <div className="hero-container0 box0">
                <div className="hero0">
                    <span id="red">
                        {isAuthenticated ? `👋 Welcome ${username}!` : "🚀 Turn Your Rides into Rewards!"}
                    </span>
                    <span>Earn points every time you use public transport. 🚌🚆</span>
                    <span>Redeem exciting rewards and save on future rides.</span>

                    <div>
                        {!isAuthenticated ? (
                            <Link to="/Register">
                                <button className="gbutton0">Sign Up & Start Earning</button>
                            </Link>
                        ) : (
                            <>
                                <Link to="/userDashboard">
                                    <button className="gbutton0" style={{ marginRight: "10px" }}>Go to Dashboard</button>
                                </Link>
                                <button className="gbutton0" onClick={() => setShowTripPopup(true)}>Scan QR</button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {showTripPopup && (
                <div className="trip-popup0" onClick={closePopup}>
                    <div className="trip-content0" onClick={(e) => e.stopPropagation()}>
                        <h2>🛣️ Start Your Trip</h2>
                        <p>Scan the QR code on the vehicle to begin your journey.</p>
                        <div id="qr-reader"></div>
                    </div>
                </div>
            )}

            {showSuccessPopup && scanResult && (
                <div className="success-popup0">
                    <div className="success-content0">
                        <div className="checkmark0"></div>
                        <h2>🎉 Trip Registered Successfully!</h2>
                        <p><strong>Description:</strong> {`${scanResult.startLocation} to ${scanResult.endLocation}`}</p>
                        <p>🎉 You earned {scanResult.tripPoints} points for this trip! 🚌</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
