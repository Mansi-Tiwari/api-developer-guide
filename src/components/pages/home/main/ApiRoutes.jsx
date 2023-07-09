import React from "react";
import { NavLink } from "react-router-dom";

const ApiRoutes = () => {
  return (
    <div className=" py-16 bg-white  px-4">
      <div className="max-w-[1040px] mx-auto px-2 ">
        <h1 className="text-2xl font-bold "> Routes</h1>
        <p className="py-4 text-gray-500">All HTTP methods are supported</p>
        <table className="table-auto text-lg overflow-y-auto">
          <tbody>
            <tr>
              <td className="pr-[4rem] md:pr-[20rem]">Get</td>
              <td className="hover:text-textColor text-blue-500">
                <NavLink to={"/getall"}>/crypto/all</NavLink>
              </td>
            </tr>
            <tr>
              <td>Get</td>
              <td className="hover:text-textColor text-blue-500">
                <NavLink to={"/id"}>/crypto/api/id/1</NavLink>
              </td>
            </tr>
            <tr>
              <td>Get</td>
              <td className="hover:text-textColor text-blue-500 ">
                <NavLink to={"/name"}>/crypto/api/name/Aur</NavLink>
              </td>
            </tr>
            <tr>
              <td>Get</td>
              <td className="hover:text-textColor text-blue-500">
                <NavLink to={"/symbol"}>/crypto/api/symbol/btc</NavLink>
              </td>
            </tr>
            <tr>
              <td>Get</td>
              <td className="hover:text-textColor text-blue-500">
                <NavLink to={"/limit"}>/crypto/api?limit=6</NavLink>
              </td>
            </tr>
            <tr>
              <td>Get</td>
              <td className="hover:text-textColor text-blue-500">
                <NavLink to={"/pagination"}>/crypto/api?limit=4&page=2</NavLink>
              </td>
            </tr>
          </tbody>
        </table>
        <NavLink to={"/docs"}>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            View Details on Docs
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ApiRoutes;
