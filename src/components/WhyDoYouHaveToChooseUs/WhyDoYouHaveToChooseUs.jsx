import React from "react";
import WhyChooseUs from "../../assets/images/WhyChooseUs.png";
import styles from "./WhyDoYouHaveToChooseUs.module.scss";
import cx from "classnames";
const WhyDoYouHaveToChooseUs = (props) => {
  const chooseSections = [
    {
      title: "Security",
      description:
        "Your data will be stored, consectetur adipiscing elit. In eu sapien tristique nunc. ",
    },
    {
      title: "Simplicity",
      description:
        "Your data will be stored, consectetur adipiscing elit. In eu sapien tristique nunc. ",
    },
    {
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscingelit.Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];
  return (
    <div className={styles.whyChooseUs}>
      <h2 id="aboutus">
        Why do you have to
        <br /> choose us?
      </h2>
      <div
        className="flex"
        style={{
          position: "relative",
          top: "-75px",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src={WhyChooseUs}
          height="438.70965576171875"
          width="507.2580871582031"
          alt="whychooseus"
        />
        <div>
          {chooseSections.map((section, index) => (
            <div
              className={cx(styles.section, {
                [styles["section--highlight"]]: index === 1,
              })}
              key={section.title}
            >
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDoYouHaveToChooseUs;
