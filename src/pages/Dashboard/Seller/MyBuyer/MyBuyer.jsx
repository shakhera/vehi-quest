import React from "react";

const MyBuyer = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Buyers</h2>
      <div className="space-y-4">
        <div className="p-4 border border-gray-300  rounded-md bg-white shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Name</h3>
          <p className="text-lg font-semibold text-gray-700">Email</p>
          <p className="text-lg font-semibold text-gray-700">Phone</p>
          <p className="text-lg font-semibold text-gray-700">Location</p>
        </div>
        <p className="text-red-500 text-sm">No buyers found.</p>
      </div>
    </div>
  );
};

export default MyBuyer;
