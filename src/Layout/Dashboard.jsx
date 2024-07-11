import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaBars, FaTimes } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import useBuyer from "../hooks/useBuyer";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isSeller, isSellerLoading] = useSeller();
  const [isBuyer, isBuyerLoading] = useBuyer();
  // const isAdmin = true;
  // const isSeller = true;
  // const isBuyer = true;

  // if (isAdminLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
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
              {isAdmin ? (
                <>
                  <li className="p-2 hover:bg-gray-200 rounded">
                    <Link to="/" className="block pl-2 text-gray-800">
                      Home
                    </Link>
                  </li>
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
                  <div>
                    <button
                      onClick={handleLogout}
                      className="rounded-full bg-red-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
                    >
                      Log Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {isBuyer && (
                    <>
                      <li className="p-2 hover:bg-gray-200 rounded">
                        <Link to="/" className="block pl-2 text-gray-800">
                          Home
                        </Link>
                      </li>
                      <li className="p-2 pr-10 hover:bg-gray-200 rounded">
                        <Link
                          to="/dashboard/my-orders"
                          className="block pl-2 text-gray-800"
                        >
                          My Orders
                        </Link>
                      </li>
                      <div>
                        <button
                          onClick={handleLogout}
                          className="rounded-full bg-red-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
                        >
                          Log Out
                        </button>
                      </div>
                      {/* <div className="divider w-2/3"></div> */}
                    </>
                  )}
                  {isSeller && (
                    <>
                      <li className="p-2 hover:bg-gray-200 rounded">
                        <Link to="/" className="block pl-2 text-gray-800">
                          Home
                        </Link>
                      </li>
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
                      <div>
                        <button
                          onClick={handleLogout}
                          className="rounded-full bg-red-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
                        >
                          Log Out
                        </button>
                      </div>
                    </>
                  )}
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
    </div>
  );
};

export default Dashboard;
