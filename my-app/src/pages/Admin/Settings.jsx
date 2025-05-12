import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [profile, setProfile] = useState({
    name: "Naru Gangster",
    email: "naru@example.com",
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated! (This is a placeholder)");
  };

  return (
    <div
      className={`flex min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8 space-y-10">
          <h2 className="text-3xl font-bold">Settings</h2>

          {/* Dark Mode Toggle */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Display</h3>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              Enable Dark Mode
            </label>
          </div>

          {/* Notification Settings */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              Enable Notifications
            </label>
          </div>

          {/* Profile Update */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Profile</h3>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full p-2 border rounded text-black"
                placeholder="Your Name"
              />
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="w-full p-2 border rounded text-black"
                placeholder="Email"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
