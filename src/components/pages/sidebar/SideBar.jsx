import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Emoji from "../Emoji";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [openList, setOpenList] = useState(true);

  const handleChange = () => {
    setOpen(!open);
    setOpenList(!openList);
  };

  return (
    <div>
      <button
        onClick={handleChange}
        type="button"
        className="   pt-7 px-2 ml-3 text-2xl rounded-lg md:hidden "
      >
        <svg
          fill="#fff7"
          className=" hover:fill-gray-100 focus:outline-none hover:text-hoverColor"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 16v-2.625s-5.619.005-9 3.625c1.588-6.916 9-8.292 9-8.292v-2.708l5 5.021-5 4.979z" />
        </svg>
      </button>
      <aside
        className={
          open ? "sidebarNav absolute  " : "sidebarNav absolute  translate-x-0"
        }
        aria-label="Sidebar"
      >
        <div className="h-full px-3  text-gray-300">
          <div className="font-titleFont  pl-2 py-6 mb-3 border-b-2 border-gray-300 font-bold text-2xl">
            <Emoji symbol="📘" label="docs" />
            Docs
          </div>
          <ul className="space-y-1 font-medium text-md">
            <li onClick={handleChange} className=" sidebarList text-xl">
              <NavLink to="/docs">Crypto</NavLink>
            </li>
            <li className="py-1 space-y-1 sidebarList ml-2 ">
              <NavLink to="/getall" onClick={handleChange}>
                Get all crypto
              </NavLink>
            </li>
            <li onClick={handleChange} className=" sidebarList text-xl">
              Name
            </li>
            <li
              onClick={handleChange}
              className=" sidebarList ml-2 py-1  space-y-1"
            >
              <NavLink to="/name">Get by name</NavLink>
            </li>
            <li onClick={handleChange} className=" sidebarList text-xl">
              Id
            </li>
            <li
              onClick={handleChange}
              className="sidebarList ml-2 py-1  space-y-1"
            >
              <NavLink to="/id">Get by id</NavLink>
            </li>
            <li onClick={handleChange} className="sidebarList text-xl">
              Symbol
            </li>
            <li
              onClick={handleChange}
              className=" sidebarList ml-2 py-1  space-y-1"
            >
              <NavLink to="/symbol">Get by Symbol</NavLink>
            </li>
            <li onClick={handleChange} className=" sidebarList text-xl">
              Pagination
            </li>
            <li
              onClick={handleChange}
              className=" sidebarList ml-2 py-1  space-y-1"
            >
              <NavLink to="/pagination">Add Pagination</NavLink>
            </li>

            <li onClick={handleChange} className=" sidebarList text-xl">
              Limit
            </li>
            <li
              onClick={handleChange}
              className=" sidebarList ml-2 py-1  space-y-1"
            >
              <NavLink to="/limit">Limit results</NavLink>
            </li>
            <li
              onClick={handleChange}
              className=" sidebarList  py-1  space-y-1"
            >
              <NavLink to="/error">
                <Emoji symbol="⚠️" label="error" /> Errors & Rate Limit
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
