import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const dropDownMenuRef = useRef();
  const { user, logOut } = useAuth();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const changeBg = () => {
    if (window.scrollY >= 400) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div>
      <nav
        className={`flex fixed z-10 w-full text-gray-200 items-center justify-between  px-4 py-2 shadow-lg ${
          scrollNav ? "bg-neutral" : "bg-opacity-5 text-sky-500 font-extrabold"
        }`}
      >
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
          <h2>VehiQuest</h2>
        </div>
        <ul className="hidden items-center justify-between gap-2 md:flex">
          <li className="group flex mr-10 cursor-pointer flex-col">
            <Link to="/">Home</Link>
            <span className="mt-1 h-1 w-0 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          {/* <li className="group flex mr-10  cursor-pointer flex-col">
            <Link to="/category">Services</Link>
            <span className="mt-1 h-1 w-0  rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li> */}
          <li className="group flex mr-10 cursor-pointer flex-col">
            <Link to="/blog">Blog</Link>
            <span className="mt-1 h-1 w-0  rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex mr-10  cursor-pointer flex-col">
            <Link to="/contact">Contact</Link>
            <span className="mt-1 h-1 w-0  rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          {user && (
            <li className="group flex mr-10  cursor-pointer flex-col">
              <Link to="/dashboard">Dashboard</Link>
              <span className="mt-1 h-1 w-0  rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          )}
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="rounded-full bg-red-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <li className="group flex cursor-pointer flex-col">
                <Link to="/login">
                  <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                    Log In
                  </button>
                </Link>
              </li>
              <li className="group flex cursor-pointer flex-col">
                <Link to="/register">
                  <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                    Register
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                Home
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Services
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                About
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Contact
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
