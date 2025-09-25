import React, { useState } from "react";

export default function AddRewardForm() {
    const [formData, setFormData] = useState({
        ShopName: "",
        rewardName: "",
        rewardDescription: "",
        rewardValue: "",
        leagueRequirement: "",
    });

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        try {
            const response = await fetch("http://localhost:4000/api/v1/users/add", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to add reward");
            }
            setMessage("✅ Reward added successfully!");
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

    return (
        <section className="max-w-lg mx-auto bg-black bg-opacity-50 border border-green-400 rounded-lg p-6 shadow-lg backdrop-blur-lg mt-10 animate-fadeIn">
            <h2 className="text-2xl text-green-400 font-semibold text-center mb-4 border-b border-green-400 pb-2">
                Add New Reward 🎁
            </h2>

            {/* Success & Error Messages */}
            {message && (
                <div className="bg-green-500 text-black text-center py-2 px-4 mb-3 rounded-lg font-semibold shadow-md">
                    {message}
                </div>
            )}
            {error && (
                <div className="bg-red-500 text-white text-center py-2 px-4 mb-3 rounded-lg font-semibold shadow-md">
                    ❌ {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Shop Name */}
                <div>
                    <label className="block text-gray-300 font-medium" htmlFor="ShopName">
                        Shop Name
                    </label>
                    <input
                        type="text"
                        id="ShopName"
                        name="ShopName"
                        value={formData.ShopName}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                        placeholder="Enter shop name"
                        required
                    />
                </div>

                {/* Reward Name */}
                <div>
                    <label className="block text-gray-300 font-medium" htmlFor="rewardName">
                        Reward Name
                    </label>
                    <input
                        type="text"
                        id="rewardName"
                        name="rewardName"
                        value={formData.rewardName}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                        placeholder="Enter reward name"
                        required
                    />
                </div>

                {/* Reward Description */}
                <div>
                    <label className="block text-gray-300 font-medium" htmlFor="rewardDescription">
                        Reward Description
                    </label>
                    <textarea
                        id="rewardDescription"
                        name="rewardDescription"
                        value={formData.rewardDescription}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400 min-h-[100px]"
                        placeholder="Enter reward description"
                        required
                    />
                </div>

                {/* Reward Value */}
                <div>
                    <label className="block text-gray-300 font-medium" htmlFor="rewardValue">
                        Reward Value (Points)
                    </label>
                    <input
                        type="number"
                        id="rewardValue"
                        name="rewardValue"
                        value={formData.rewardValue}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                        placeholder="Enter reward value in points"
                        required
                    />
                </div>

                {/* League Requirement */}
                <div>
                    <label className="block text-gray-300 font-medium" htmlFor="leagueRequirement">
                        League Requirement
                    </label>
                    <input
                        type="text"
                        id="leagueRequirement"
                        name="leagueRequirement"
                        value={formData.leagueRequirement}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                        placeholder="Enter required league"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold py-3 rounded-lg shadow-lg hover:shadow-green-500/50 transition duration-300"
                >
                    Add Reward 🎯
                </button>
            </form>
        </section>
    );
}
