import React from "react";
import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.png";
import shoppingBag from "../assets/shopping-bag.png";
import menu from "../assets/list.png";
import logo from "../assets/WhatsApp Image 2024-12-26 at 5.56.10 PM.jpeg";
import dropdown from "../assets/down-arrow.png";

function Navbar() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex flex-row justify-between items-center px-6 py-4 bg-[#303841] text-white relative rounded mb-1">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-[50%]" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex flex-row gap-6">
          <NavLink
            to="/"
            className="flex flex-col items-center font-medium px-2 hover:text-gray-300 transition duration-200"
          >
            <p className="bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
              Home
            </p>
            <hr className="w-12 h-1 bg-white mt-1" />
          </NavLink>
          <NavLink
            to="/items"
            className="flex flex-col items-center font-medium px-2 hover:text-gray-300 transition duration-200"
          >
            <p className="bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
              Items
            </p>
            <hr className="w-12 h-1 bg-white mt-1" />
          </NavLink>
          <NavLink
            to="/about"
            className="flex flex-col items-center font-medium px-2 hover:text-gray-300 transition duration-200"
          >
            <p className="bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
              About
            </p>
            <hr className="w-12 h-1 bg-white mt-1" />
          </NavLink>
        </ul>

        {/* User and Cart */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={user}
              alt="user_profile"
              className="w-8 h-8 rounded-full border-2 border-gray-200"
            />
          </Link>
          <Link
            to="/cart"
            className="font-medium hover:text-gray-300 transition duration-200"
          >
            <img src={shoppingBag} alt="cart" className="w-8 h-8" />
          </Link>
          {/* Hamburger Menu for Small Screens */}
          <img
            onClick={() => {
              setVisible(!visible);
            }}
            src={menu}
            alt="menu_img"
            className="w-8 h-8 sm:hidden cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar */}
      {visible && (
        <div
        className={`fixed top-[4.5rem] right-0 h-[calc(100vh-4.5rem)] w-[60%] bg-white shadow-md transition-transform transform ${
            visible ? "translate-x-0" : "translate-x-full"
          } z-50 duration-300 ease-in-out`}
  
        >
          <div className="flex flex-col text-gray-800 cursor-pointer">
            <div
              className="flex items-center gap-4 p-3 border-b"
              onClick={() => setVisible(false)}
            >
              <img
                src={dropdown}
                alt="dropdown_icon"
                className="h-4 rotate-180"
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b uppercase"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b uppercase"
              to="/about"
            >
              About
            </NavLink>
            
            
              
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b uppercase"
              to="/items"
            >
              Collection
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
