import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";

const AllBuyers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/buyers");
      return res.data;
    },
  });
  console.log("buyers", buyers);
  const handleVerify = () => {};
  const handleDelete = () => {};
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">All buyers</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-600 uppercase text-sm font-medium border-b border-gray-300">
                Name
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-600 uppercase text-sm font-medium border-b border-gray-300">
                Email
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-600 uppercase text-sm font-medium border-b border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer) => (
              <tr
                key={buyer._id}
                className="hover:bg-gray-100 border-b border-gray-300 md:border-none block md:table-row"
              >
                <td className="py-2 px-4 border-b border-gray-300 block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  {buyer.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email
                  </span>
                  {buyer.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 block md:table-cell space-x-2">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded disabled:opacity-50 mb-2 md:mb-0"
                    onClick={() => handleVerify(buyer._id)}
                    disabled={buyer.verified}
                  >
                    {buyer.verified ? "Verified" : "Verify"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleDelete(buyer._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
