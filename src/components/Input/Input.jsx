import React from "react";
import styles from "./Input.module.scss";
const Input = (props) => {
  return <input type={props.type} {...props} className={styles.input} />;
};

export default Input;
