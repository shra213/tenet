import React, { useState, useEffect } from "react";
import "./userReward.css";

export default function RewardsList() {
    const [reward, setReward] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/v1/users/all", {
                    method: "GET",
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch rewards");
                }

                const data = await response.json();
                setReward(data.rewards);
            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRewards();
    }, []);

    const handleClaimReward = async () => {
        setMessage(null);
        setError(null);

        try {
            const res = await fetch("http://localhost:4000/api/v1/users/claim", {
                method: "POST",
                credentials: "include",
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Error claiming reward");
            }

            const data = await res.json();
            setMessage(`🎉 ${data.message} - OTP: ${data.reward.OTP}`);

            // Remove claimed reward from UI
            setReward((prev) => prev.filter((r) => r._id !== data.reward.rewardId));

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="rewards-section max-w-6xl mx-auto px-6 py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-400 border-b-2 border-green-400 inline-block pb-2">
                    🎁 Rewards
                </h2>
            </div>

            {loading && <p className="text-center text-gray-400">Loading rewards...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {message && <p className="text-center text-green-500">{message}</p>}

            {reward.length === 0 && !loading ? (
                <p className="text-center text-gray-400 text-lg">No rewards available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reward.map((rewardItem) => (
                        <div
                            key={rewardItem._id}
                            className="relative bg-black bg-opacity-60 border border-green-400 rounded-2xl p-6 shadow-lg backdrop-blur-lg transition-all hover:scale-105 hover:shadow-green-500/50"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-green-400">
                                    {rewardItem.ShopName}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                {rewardItem.rewardName}
                            </h3>

                            <p className="text-gray-300 text-sm mb-4">
                                {rewardItem.rewardDescription}
                            </p>

                            <div className="flex justify-between text-sm text-gray-400 mb-4">
                                <span>🎯 Points:
                                    <span className="text-green-300 font-medium">
                                        {rewardItem.rewardValue || "N/A"}
                                    </span>
                                </span>
                                <span>🏆 League:
                                    <span className="text-yellow-300 font-medium">
                                        {rewardItem.leagueRequirement || "N/A"}
                                    </span>
                                </span>
                            </div>

                            <button
                                onClick={handleClaimReward}
                                className="w-full mt-4 bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold py-2 rounded-lg shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-transform duration-300"
                            >
                                Redeem Reward 🎟️
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
