import React from "react";

const ReportedItems = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reported Items</h2>
      <p className="text-lg mb-4">
        Here you can view items that have been reported by users. Take necessary
        actions to manage reported items accordingly.
      </p>


      <p className="text-red-500 text-sm">No reported items found.</p>
    </div>
  );
};

export default ReportedItems;
