// src/pages/DashboardHome.js
import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {user?.displayName || "User"}!
        </h1>
        <p className="text-lg mb-6">
          Manage your products, orders, and account settings here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-2">
            <li className="text-gray-700">- Added a new product</li>
            <li className="text-gray-700">- Received a new order</li>
            <li className="text-gray-700">- Updated account settings</li>
            <li className="text-gray-700">- Reviewed customer feedback</li>
            <li className="text-gray-700">- Issued a refund</li>
          </ul>
        </div>
        {/* Account Summary */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
          <p className="text-gray-700">Name: {user?.displayName}</p>
          <p className="text-gray-700">Email: {user?.email}</p>
          <p className="text-gray-700">
            <span className="font-semibold">Member since: </span>
            {user?.memberSince || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
