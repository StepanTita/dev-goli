import React from "react";
import styles from "./ProgressBar.module.scss";
import cx from "classnames";
const ProgressBar = ({ height = "5px", value }) => {
  return (
    <div
      className={cx(styles.progressBar, "flex")}
      style={{ alignItems: "flex-start", minHeight: height }}
    >
      <div
        className={styles["progressBar--active"]}
        style={{ width: `${value * 100}%`, minHeight: height }}
      ></div>
    </div>
  );
};

export default ProgressBar;
