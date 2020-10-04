import React from "react";
import { UserIcon } from "../../assets/images/svgs";
import Button from "../Button/Button";
import styles from "./Menu.module.scss";
import cx from "classnames";
import { useHistory } from "react-router";
const Menu = () => {
  const history = useHistory();
  const items = [
    { title: "Features", anchor: "#features" },
    { title: "About us", anchor: "#aboutus" },
    { title: "Votings", anchor: "#votings" },
    { title: "Smth more", anchor: "#smthmore" },
  ];
  return (
    <ul
      className={cx(styles.ul, "flex flex-justify")}
      style={{ alignItems: "center" }}
    >
      {items.map((item) => (
        <li key={item.title}>
          <a href={item.anchor}>{item.title}</a>
        </li>
      ))}
      <li>
        <Button
          variant="primary"
          style={{ padding: "15px 26px" }}
          onClick={() => {
            history.push("/signup");
          }}
        >
          GET STARTED
        </Button>
      </li>
      <li>
        <UserIcon />
      </li>
    </ul>
  );
};

export default Menu;
