import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import Hand from "../../assets/images/Hand.png";
import styles from "./Votings.module.scss";
import cx from "classnames";
import { useHistory } from "react-router";
import BackgroundShapes from "../BackgroundShapes/BackgroundShapes";

export const categories = [
  { title: "Latest" },
  { title: "Art" },
  { title: "Politics" },
  { title: "Science" },
  { title: "Sport" },
];

export const fetchAndSetQuizes = async (setQuizes) => {
  const quizes = await axios.get("https://dev-goli.herokuapp.com/api/quizes");

  setQuizes(quizes.data.results);
};

const Votings = (props) => {
  const [currentCategory, setCurrentCategory] = useState("Latest");
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    fetchAndSetQuizes(setQuizes);
  }, []);

  const history = useHistory();

  return (
    <div className={cx(styles.votings, "pb3")}>
      <div className="flex flex-center">
        <img
          src={Hand}
          className={styles.leftHand}
          height="238.1"
          width="238.1"
          alt="leftHand"
        />
        <h2 id="votings">Votings</h2>

        <img src={Hand} className={styles.rightHand} alt="rightHand" />
      </div>
      <div className={cx("flex flex-center", styles.categories)}>
        <h5>Categories</h5>
        {categories.map((category, index) => (
          <Button
            variant={
              currentCategory === category.title
                ? "secondary"
                : "secondary--inactive"
            }
            onClick={() => setCurrentCategory(category.title)}
            key={category.title}
            className={cx("ml2")}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-center mt4">
        {quizes
          .filter((_, index) => index < 3)
          .map((quiz, index) => (
            <div
              className={cx(styles.card, { ml3: index !== 0 })}
              key={quiz.title}
            >
              <h4 className={styles["h4-1"]}>{quiz.quiz_type || "Art"}</h4>
              <h3>{quiz.title}</h3>
              <h5>{quiz?.voteDetails?.author || "Автор: Люся Ветрова"}</h5>
              <p>{quiz.description}</p>
              <div>
                <ProgressBar value={quiz.indicator_value} height="10px" />
                <h4 className={styles.h4}>
                  {quiz.goal * quiz.indicator_value} votes
                </h4>

                <h5 className={styles.h5}>View all details</h5>
              </div>
            </div>
          ))}
      </div>
      <Button
        variant="primary"
        className="mt3 mx-auto"
        style={{ padding: "22.5px 66px" }}
        onClick={() => {
          history.push("/votings");
        }}
      >
        VIEW ALL
      </Button>
    </div>
  );
};

export default Votings;
