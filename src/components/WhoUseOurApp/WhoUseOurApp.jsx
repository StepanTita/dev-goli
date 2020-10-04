import React from "react";
import {
  AmazonLogo,
  VisaLogo,
  SkrillLogo,
  AmexLogo,
  ApplePayLogo,
} from "../../assets/images/svgs";
import styles from "./WhoUseOurApp.module.scss";

const WhoUseOurApp = (props) => {
  return (
    <div className={styles.whoUseOurApp}>
      <h2 className={styles.h2}>Who uses our app</h2>
      <div className="flex flex-justify">
        <VisaLogo />
        <AmazonLogo />
        <SkrillLogo />
        <AmexLogo />
        <ApplePayLogo />
      </div>
    </div>
  );
};

export default WhoUseOurApp;
