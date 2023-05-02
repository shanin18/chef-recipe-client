import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  return (
    <div>
      <nav className="bg-blue-500 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl flex items-center font-semibold font-montserrat">
            <img className="w-20" src={logo} alt="logo" />
            Savory Selections
          </span>

          <span
            onClick={() => setToggle(!toggle)}
            className="mx-2 md:hidden block"
          >
            {!toggle ? (
              <HiMenuAlt3 className="text-3xl"></HiMenuAlt3>
            ) : (
              <HiX className="text-3xl"></HiX>
            )}
          </span>
        </div>

        <ul
          className={`bg-blue-500 md:flex gap-8 md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 md:top-[-400px] transition-all ${
            toggle ? "top-[78px] opacity-100" : ""
          }`}
        >
          <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
            <NavLink to="/"
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
            <NavLink to="/about"
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
            <NavLink to="/blog"
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
            <NavLink to="/blog"
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              <button className="">Login</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
