import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <nav className="w-full  bg-white z-100 sticky ">
      <div className="flex navbar justify-between items-center h-20 max-w-[1240px]  mx-auto px-4 text-white">
        <a href="/">
          <h1 className="font-extrabold w-full text-3xl  text-[#3b3d3d]">
            Crypto<span className="text-textColor">Api</span>
          </h1>
        </a>

        <ul className="hidden  md:flex">
          <li>
            <NavLink to={"/"} className="headerList" aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/docs"} className="headerList">
              docs
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="headerList">
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"https://github.com/Mansi-Tiwari/cryptoapi"}
              target="_blank"
              className="headerList"
            >
              github
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"https://github.com/Mansi-Tiwari"}
              target="_blank"
              className="headerList"
            >
              hire me
            </NavLink>
          </li>
        </ul>
        <div onClick={handleChange} className="block md:hidden text-textColor">
          {open ? (
            <span className="text-4xl">&times;</span>
          ) : (
            <span className="text-4xl">🏳️‍⚧️</span>
          )}
        </div>
        <ul
          className={
            open
              ? "fixed  left-0 z-1000 md:hidden top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-textColor m-4 ">
            <a href="/" className="flex items-center ">
              <h1 className="font-extrabold md:text-xl text-md text-gray-200">
                Crypto<span className="text-textColor">Api</span>
              </h1>
            </a>
          </h1>
          <li className="p-4 border-y border-gray-600" onClick={handleChange}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="p-4 border-b border-gray-600" onClick={handleChange}>
            <NavLink to={"/docs"}>Docs</NavLink>
          </li>
          <li className="p-4 border-b border-gray-600" onClick={handleChange}>
            <NavLink
              to={"https://github.com/Mansi-Tiwari/cryptoapi"}
              target="_blank"
            >
              Github
            </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600" onClick={handleChange}>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink to={"https://github.com/Mansi-Tiwari"} target="_blank">
              Hire Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
