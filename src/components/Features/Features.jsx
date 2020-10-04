import React from "react";

import styles from "./Features.module.scss";
import cx from "classnames";
import Motorcycle from "../../assets/images/Motorcycle.png";
import WomenWithDog from "../../assets/images/WomenWithDog.png";
import WomenWithPhone from "../../assets/images/WomenWithPhone.png";

const Features = (props) => {
  const featuresList = [
    {
      iconSrc: Motorcycle,
      label: "Create own votings",
    },
    {
      iconSrc: WomenWithDog,
      label: "Manage work space",
    },
    {
      iconSrc: WomenWithPhone,
      label: "Maintain statistics",
    },
  ];
  return (
    <div className={styles.features}>
      <h2 id="features">Features. What can you do with us</h2>
      <div className="flex flex-center">
        {featuresList.map((feature, index) => (
          <div
            className={cx(styles.featuresCard, {
              ml2: index !== 0,
              [styles["featuresCard--highlight"]]: index === 1,
            })}
            key={feature.label}
          >
            <img src={feature.iconSrc} alt="icon" height="64" width="64" />
            <h3>{feature.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
