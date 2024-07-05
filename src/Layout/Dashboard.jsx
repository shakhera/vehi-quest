import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaBars, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  // const isAdmin = user?.role === "admin";
  const isAdmin = true;
  // const isSeller = user?.role === "seller";
  const isSeller = true;
  // const isBuyer = user?.role === "buyer";
  const isBuyer = true;
  return (
    <div className="flex ">
      {/* Drawer for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        } `}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 transform bg-white w-64 transition-transform duration-300 z-50  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        <button
          className="block md:hidden mb-4 text-gray-600"
          onClick={toggleDrawer}
        >
          <FaTimes className="text-red-600 text-2xl"></FaTimes>
        </button>
        <nav className="">
          <ul className="min-h-screen list-none p-0  md:pt-20 m-0 space-y-2 shadow-2xl">
            {isBuyer && (
              <>
                <li className="p-2 pr-10 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/my-orders"
                    className="block pl-2 text-gray-800"
                  >
                    My Orders
                  </Link>
                </li>
                <div className="divider w-2/3"></div>
              </>
            )}
            {isSeller && (
              <>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/add-product"
                    className="block pl-2 text-gray-800"
                  >
                    Add A Product
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/my-products"
                    className="block pl-2 text-gray-800"
                  >
                    My Products
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/my-buyers"
                    className="block pl-2 text-gray-800"
                  >
                    My Buyers
                  </Link>
                </li>
                <div className="divider w-2/3"></div>
              </>
            )}
            {isAdmin && (
              <>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/all-users"
                    className="block pl-2 text-gray-800"
                  >
                    Manage Users
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/all-sellers"
                    className="block pl-2 text-gray-800"
                  >
                    All Sellers
                  </Link>
                </li>

                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/all-buyers"
                    className="block pl-2 text-gray-800"
                  >
                    All Buyers
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link
                    to="/dashboard/reported-items"
                    className="block pl-2 text-gray-800"
                  >
                    Reported Items
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-4 ">
        <button
          className="block md:hidden mb-4 text-gray-600"
          onClick={toggleDrawer}
        >
          <FaBars></FaBars>
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
