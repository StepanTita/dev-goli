import React from "react";
import Rocket from "../../assets/images/Rocket.png";
import { ArrowRight } from "../../assets/images/svgs";
import Button from "../Button/Button";
import ExampleQuizes from "../ExampleQuizes/ExampleQuizes";
import WhoUseOurApp from "../WhoUseOurApp/WhoUseOurApp";
import styles from "./Welcome.module.scss";
const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div>
        <div className="flex">
          <div>
            <h1>
              Now you can <br /> create awesome <br /> votings
            </h1>
            <h2>
              Text about what it is. Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. commodo ac m
            </h2>
            <div className="flex mt3">
              <Button className={`${styles.button} mr2`} variant="primary">
                GET STARTED <ArrowRight className="ml2" />
              </Button>
              <Button className={`${styles.button}`} variant="secondary">
                VOTINGS
              </Button>
            </div>
          </div>
          <img
            src={Rocket}
            width="726"
            height="636.9"
            style={{
              //   position: "relative",
              //   left: "0px",
              //   height: "-80px",
              //   top: "-200px",
              marginTop: "-100px",
            }}
            alt="rocket"
          />
        </div>

        <ExampleQuizes />

        <WhoUseOurApp />
      </div>
    </div>
  );
};
export default Welcome;
