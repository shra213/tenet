import React, { useState } from "react";

const MyAccount = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "", // Store avatar URL
    noCO2Saved: "250 kg", // Placeholder for CO₂ saved
    dob: "2000-01-01",
    totalPoints: 1200,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, avatar: imageUrl });
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">My Account</h2>
      <div className="flex flex-col items-center mb-4">
        <label htmlFor="avatar-upload" className="cursor-pointer">
          <img
            src={user.avatar || "https://via.placeholder.com/100"}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
        </label>
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={handleAvatarUpload}
          className="hidden"
        />
        <p className="text-sm text-gray-500 mt-2">Click to change avatar</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">No CO₂ Saved</label>
          <input
            type="text"
            value={user.noCO2Saved}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Total Points Earned</label>
          <input
            type="number"
            value={user.totalPoints}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
