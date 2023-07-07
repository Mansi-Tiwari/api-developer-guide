import React from "react";
import SideBar from "../sidebar/SideBar";

const Wrapper = ({ children }) => {
  return (
    <div className="pb-40  ">
      <SideBar />
      <div className="min-h-[100%]  items-center">{children}</div>
    </div>
  );
};

export default Wrapper;
