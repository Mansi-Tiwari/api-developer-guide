import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex font-normal items-center justify-center p-3">
      <Link to={"https://github.com/Mansi-Tiwari"} target="_blank">
        Made with ❤️ by Mansi Tiwari 😊
      </Link>
    </div>
  );
};

export default Footer;
