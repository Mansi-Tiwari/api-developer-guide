import React from "react";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div className="text-white p-7">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-textColor font-bold p-2">
          WELCOME TO THE CRYPTO API DOCUMENTATION
        </p>
        <h1 className="md:text-6xl sm:text-2xl text-3xl font-bold md:py-6">
          Explore the World of Cryptocurrencies.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-4xl text-lg font-bold py-4">
            Fast and Reliable Data for
            <TypeAnimation
              className="md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              sequence={["Bitcoin", 3000, "Ethereum", 3000, "Dogecoin", 3000]}
              wrapper="span"
              speed={2}
              cursor={true}
              repeat={Infinity}
            />
          </p>
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
