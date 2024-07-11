import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    // console.log("user", user);
    Swal.fire({
      title: `Do you want <br/> to make a user to admin?`,
      showDenyButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire("Admin!", "", "success");
          }
          refetch();
        });
      }
    });
  };

  const handleDelete = (user) => {
    console.log("deleted user",user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been deleted.`,
              icon: "success",
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">All users</h1>
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
                Make Admin
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-600 uppercase text-sm font-medium border-b border-gray-300 block md:table-cell">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {users.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 border-b border-gray-300 md:border-none block md:table-row"
              >
                <td className="py-4 px-6 border-b border-gray-300 block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  {user.name}
                </td>
                <td className="py-4 px-6 border-b border-gray-300 block md:table-cell ">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email
                  </span>
                  {user.email}
                </td>
                <td className="py-2 px-6 border-b border-gray-300 block md:table-cell ">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <>
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Make Admin
                      </span>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-neutral text-white hover:bg-gray-200 hover:text-black transition duration-300"
                      >
                        <FaUser className="h-8"></FaUser>
                      </button>
                    </>
                  )}
                </td>
                <td className="py-2 px-6 border-b border-gray-300 block md:table-cell ">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Delete
                  </span>
                  <button
                    className="btn bg-red-500 text-white  hover:text-black rounded transition duration-300"
                    onClick={() => handleDelete(user)}
                  >
                    <FaTrash className="h-8"></FaTrash>
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

export default ManageUsers;
