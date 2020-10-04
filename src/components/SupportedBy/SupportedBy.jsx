import React from "react";
import Button from "../Button/Button";
import Programmer from "../../assets/images/Programmer.png";
import styles from "./SupportedBy.module.scss";
import Human1 from "../../assets/images/Human1.png";
import Human2 from "../../assets/images/Human2.png";
import Human3 from "../../assets/images/Human3.png";
import Human4 from "../../assets/images/Human4.png";

const SupportedBy = (props) => {
  return (
    <div className={styles.supportedBy}>
      <div className="flex">
        <div>
          <h2 id="#smthmore">
            Supported by <br /> real people
          </h2>
          <img
            src={Programmer}
            height="108"
            width="108"
            style={{ position: "relative", left: "235px", top: "5px" }}
            alt="Programmer"
          />
          <Button variant="secondary" style={{ padding: "15px 93px" }}>
            JOIN THE TEAM
          </Button>
        </div>
        <div style={{ position: "absolute", right: "0px" }}>
          <img src={Human1} alt="human1" />
          <img src={Human2} className="ml3" alt="human2" />
          <img src={Human4} className="ml3" alt="human3" />
          <img src={Human3} className="ml3" alt="human4" />
        </div>
      </div>
      <h2 style={{ color: "#001a49", textAlign: "center" }}>
        Ready to become
        <br /> a voting expert?
      </h2>
      <Button
        className="mx-auto"
        variant="primary"
        style={{ padding: "20px 48px" }}
      >
        Get started
      </Button>
    </div>
  );
};
export default SupportedBy;
