import axios from "axios";
import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./ExampleQuizes.module.scss";
import cx from "classnames";
import { ShortArrowLeft, ShortArrowRight } from "../../assets/images/svgs";
import { fetchAndSetQuizes } from "../Votings/Votings";
const ExampleQuizes = () => {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    fetchAndSetQuizes({ setQuizes });
  }, []);

  return (
    <div
      className="flex"
      style={{ justifyContent: "center", position: "relative" }}
    >
      <ShortArrowLeft
        style={{
          position: "absolute",
          left: "-46px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      {quizes
        .filter((value, index) => index < 3)
        .map((quiz, index) => (
          <div className={cx(styles.card, { ml2: index !== 0 })} key={quiz.id}>
            <h3>{quiz.title}</h3>
            <ProgressBar value={quiz.indicator_value} />
            <h4>{quiz.goal * quiz.indicator_value} votes</h4>
            <h5>View all details</h5>
          </div>
        ))}
      <ShortArrowRight
        style={{
          position: "absolute",
          right: "-46px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

export default ExampleQuizes;
