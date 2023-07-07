import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex font-normal items-center justify-center ">
      Made with ❤️ by &nbsp;
      <Link to={"https://github.com/Mansi-Tiwari"} target="_blank">
        Mansi Tiwari
      </Link>
      😊
    </div>
  );
};

export default Footer;
