import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
const Navigation = (props) => (
  <div className="flex flex-justify" style={{ margin: "40px 75px 0px" }}>
    <Logo />
    <Menu />
  </div>
);

export default Navigation;
