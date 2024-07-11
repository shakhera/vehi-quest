import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(bookings);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">My Orders</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-sky-500 text-white font-semibold uppercase tracking-wider">
                  Title
                </th>
                <th className="py-3 px-6 bg-sky-500 text-white font-semibold uppercase tracking-wider">
                  Price
                </th>
                <th className="py-3 px-6 bg-sky-500 text-white font-semibold uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((order, index) => (
                <tr
                  key={order._id}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100 hover:bg-gray-200 text-center"
                      : "bg-white hover:bg-gray-200 text-center"
                  }
                >
                  <td className="py-4 px-6 border-t border-gray-200">
                    {order.itemName}
                  </td>
                  <td className="py-4 px-6 border-t border-gray-200">
                    {order.price}
                  </td>
                  <td className="py-4 px-6 border-t border-gray-200">
                    {order.status === "paid" ? (
                      <button
                        className="bg-green-500 text-white py-2 px-4 rounded-lg cursor-not-allowed"
                        disabled
                      >
                        Paid
                      </button>
                    ) : (
                      <Link
                        to={`/dashboard/payment/${order._id}`}
                        className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-lg transition duration-200"
                      >
                        Pay
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
