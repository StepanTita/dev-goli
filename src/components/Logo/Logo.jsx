import React from "react";
import logo from "../../assets/images/Logo.png";
const Logo = (props) => (
  <div className="flex" {...props}>
    <img src={logo} height="50px" alt="logo" />
  </div>
);

export default Logo;
