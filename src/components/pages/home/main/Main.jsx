import React from "react";
import { NavLink } from "react-router-dom";
import Typed from "react-typed";

const Main = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          WELCOME TO THE CRYPTO API DOCUMENTATION
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">
          Explore the World of Cryptocurrencies.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
            Fast and Reliable Data for
          </p>
          <Typed
            className="md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Bitcoin", "Ethereum", "Dogecoin"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Access comprehensive cryptocurrency data with our easy-to-use API.
        </p>
        <NavLink to={"/docs"}>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
