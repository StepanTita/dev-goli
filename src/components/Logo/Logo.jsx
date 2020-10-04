import React from "react";
import { useHistory } from "react-router";
import logo from "../../assets/images/Logo.png";
import styles from "./Logo.module.scss";
const Logo = (props) => {
  const history = useHistory();
  return (
    <div
      className={`${styles.logo} flex`}
      {...props}
      onClick={() => history.push("/")}
    >
      <img src={logo} height="50px" alt="logo" />
    </div>
  );
};

export default Logo;
