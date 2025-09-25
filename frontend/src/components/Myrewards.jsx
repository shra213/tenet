import React, { useState, useEffect } from "react";

export default function Myrewards() {
    const [reward, setReward] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const getmy = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/v1/users/dashboard", {
                    method: "GET",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" }
                });

                if (!res.ok) {
                    throw new Error("Error fetching rewards");
                }

                const data = await res.json();
                setReward(data.rewards);
                console.log("Fetched rewards:", data.rewards); // ✅ Correct logging
            } catch (error) {
                console.error("Error:", error);
                setMessage("Failed to fetch rewards");
            }
        };

        getmy();
    }, []); // ✅ Added dependency array to prevent infinite re-renders

    return (
        <section className="rewards-section max-w-6xl mx-auto px-6 py-10">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-400 border-b-2 border-green-400 inline-block pb-2">
                    🎁 My Rewards
                </h2>
            </div>

            {/* Error Message */}
            {message && <p className="text-center text-red-500">{message}</p>}

            {/* Rewards List */}
            {reward.length === 0 ? (
                <p className="text-center text-gray-400 text-lg">No rewards available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reward.map((rewardItem) => (
                        <div 
                            key={rewardItem._id} 
                            className="relative bg-black bg-opacity-60 border border-green-400 rounded-2xl p-6 shadow-lg backdrop-blur-lg transition-all hover:scale-105 hover:shadow-green-500/50"
                        >
                            {/* Reward Header */}
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-green-400">
                                    {rewardItem.ShopName}
                                </span>
                            </div>

                            {/* Reward Name */}
                            <h3 className="text-xl font-bold text-white mb-2">
                                {rewardItem.rewardName}
                            </h3>

                            {/* Reward Description */}
                            <p className="text-gray-300 text-sm mb-4">
                                {rewardItem.rewardDescription}
                            </p>

                            {/* Reward Details */}
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
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
