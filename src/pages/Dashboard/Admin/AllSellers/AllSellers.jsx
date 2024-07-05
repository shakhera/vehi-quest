import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllSellers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/sellers");
      return res.data;
    },
  });
  const handleVerify = () => {};
  const handleDelete = () => {};
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">All Sellers</h1>
        <table className="min-w-full bg-white border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-600 uppercase text-sm font-medium border-b border-gray-300 block md:table-cell">
                Name
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-600 uppercase text-sm font-medium border-b border-gray-300 block md:table-cell">
                Email
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-600 uppercase text-sm font-medium border-b border-gray-300 block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {sellers.map((seller) => (
              <tr
                key={seller._id}
                className="hover:bg-gray-100 border-b border-gray-300 md:border-none block md:table-row"
              >
                <td className="py-2 px-4 border-b border-gray-300 block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  {seller.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email
                  </span>
                  {seller.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 block md:table-cell space-x-2">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded disabled:opacity-50 mb-2 md:mb-0"
                    onClick={() => handleVerify(seller._id)}
                    disabled={seller.verified}
                  >
                    {seller.verified ? "Verified" : "Verify"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleDelete(seller._id)}
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

export default AllSellers;
