import cx from "classnames";
import React from "react";
import styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <button
      {...props}
      className={cx("flex flex-center", styles.button, {
        [`${styles[`button--${props.variant}`]}`]: props.variant,
        [props.className]: props.className,
      })}
      style={props.style}
    >
      {props.children}
    </button>
  );
};
export default Button;
