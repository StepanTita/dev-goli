import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Hand from "../../assets/images/Hand.png";
import styles from "./VotingsPage.module.scss";
import cx from "classnames";
import { categories, fetchAndSetQuizes } from "../Votings/Votings";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router";
import BackgroundShapes from "../BackgroundShapes/BackgroundShapes";

const VotingsPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [quizes, setQuizes] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Latest");
  const history = useHistory();

  useEffect(() => {
    fetchAndSetQuizes(setQuizes);
  }, []);

  useEffect(() => {}, [currentPage]);

  return (
    <div className={styles.votingsPage}>
      <Navigation />
      <div style={{ background: "#F3F3F3" }}>
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
        {/* <Search /> */}
        <div className="flex flex-center" style={{ margin: "44px 0px" }}>
          {quizes
            .filter((_, index) => index === 0 || index === 1)
            .map((quiz, index) => (
              <div
                className={cx(styles.card, { ml44: index !== 0 })}
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

                  <Button
                    className="mx-auto"
                    variant="secondary"
                    style={{ padding: "15px 40px" }}
                    onClick={() => {
                      history.push(`/voting/${quiz.id}`);
                    }}
                  >
                    View all details
                  </Button>
                </div>
              </div>
            ))}
        </div>
        <div
          className={cx("mx-auto flex", styles.create)}
          style={{
            width: "1216px",
            padding: "43px 94px 51px 104px",
            background: "white",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h4 className={styles["h4-1"]}>For you</h4>
            <h2>Create your own voting</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit odio
              la...
            </p>
          </div>
          <div className="flex flex-center" style={{ height: "50px" }}>
            <Button
              variant="secondary--inactive"
              style={{ padding: "15px 72px" }}
            >
              MORE
            </Button>
            <Button
              variant="primary"
              className="ml3"
              style={{ padding: "15px 72px" }}
            >
              CREATE
            </Button>
          </div>
        </div>
        <div className="flex flex-center" style={{ margin: "44px 0px 0px" }}>
          {quizes
            .filter((_, index) => index === 2 || index === 3)
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

                  <Button
                    className="mx-auto"
                    variant="secondary"
                    style={{ padding: "15px 40px" }}
                    onClick={() => {
                      history.push(`/voting/${quiz.id}`);
                    }}
                  >
                    View all details
                  </Button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-center mx-auto mt3">
          <Button
            variant="secondary--inactive"
            style={{
              borderRadius: "100%",
              padding: "10px 15px",
              border:
                currentPage === 1 ? "1px solid black" : "1px solid #979797",
              color: currentPage === 1 ? "black" : "#979797",
            }}
            onClick={() => setCurrentPage(1)}
          >
            1
          </Button>
          <Button
            variant="secondary--inactive"
            style={{
              borderRadius: "100%",
              padding: "10px 15px",
              border:
                currentPage === 2 ? "1px solid black" : "1px solid #979797",
              color: currentPage === 2 ? "black" : "#979797",
            }}
            className="ml2"
            onClick={() => setCurrentPage(2)}
          >
            2
          </Button>

          <Button
            variant="secondary--inactive"
            style={{
              borderRadius: "100%",
              padding: "10px 15px",
              border:
                currentPage === 3 ? "1px solid black" : "1px solid #979797",
              color: currentPage === 3 ? "black" : "#979797",
            }}
            className="ml2"
            onClick={() => setCurrentPage(3)}
          >
            3
          </Button>
        </div>
      </div>
      <Footer />
      <BackgroundShapes />
    </div>
  );
};

export default VotingsPage;
