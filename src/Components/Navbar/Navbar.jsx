import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { getSelectedItems, getWhishList } from "../Utility/addToDB";

const Navbar = () => {
  const [cartNo, setCartNo] = useState(0);
  const [wishNo, setWishNo] = useState(0);

  useEffect(() => {
    const noOfItems = getSelectedItems();
    const len = noOfItems.length;
    setCartNo(len);
  }, []);

  useEffect(() => {
    const noOfItems = getWhishList();
    setWishNo(noOfItems.length);
  }, []);

  const location = useLocation();
  const backgroundColor =
    location.pathname === "/" ? "bg-[#9538E2]" : "bg-white";
  const textColor = location.pathname === "/" ? "text-white" : "text-gray-600";
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>
  );
  return (
    <div className={`navbar ${backgroundColor} ${textColor} py-3 px-5`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/dashboard">
          <button className="btn btn-ghost btn-circle bg-white text-[#9538E2] mr-3 ">
            <FaCartArrowDown />
            <p>{cartNo}</p>
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="btn btn-ghost btn-circle bg-white text-[#9538E2]">
            <div className="indicator">
              <FaRegHeart />
              <p>{wishNo}</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
