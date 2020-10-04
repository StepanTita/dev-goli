import axios from "axios";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Hand from "../../assets/images/Hand.png";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import ProgressBar from "../ProgressBar/ProgressBar";
import { fetchAndSetQuizes } from "../Votings/Votings";
import styles from "./VotingPage.module.scss";
const VotingPage = (props) => {
  const { id } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState(undefined);
  const [quizes, setQuizes] = useState([]);
  const fetchAndSetQuizById = async () => {
    const quiz = await axios.get(
      `https://dev-goli.herokuapp.com/api/quizes/${id}`
    );
    setCurrentQuiz(quiz.data);
  };

  useEffect(() => {
    fetchAndSetQuizById();
    fetchAndSetQuizes(setQuizes);
  }, [id]);

  const history = useHistory();

  return (
    <div className={styles.votingPage}>
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
          <h2 id="votings">Voting</h2>
          <img src={Hand} className={styles.rightHand} alt="rightHand" />
        </div>
        {currentQuiz?.title && (
          <div className={styles.card}>
            <h4>{currentQuiz?.quiz_type}</h4>
            <h2>{currentQuiz?.title}</h2>
            <h3>{`Author: ${currentQuiz?.vote_detail?.author}`}</h3>
            <p>{currentQuiz?.description}</p>
            <div
              className={styles.answers}
              style={{
                marginTop: "80px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Please choose answers below</h2>
              <Button
                variant="secondary--inactive"
                style={{
                  padding: "11px 197px",
                  width: "418px",
                  border: "1px solid #c4c4c4",
                }}
              >
                {currentQuiz?.vote_detail?.definition1}
              </Button>
              <Button
                variant="secondary--inactive"
                style={{
                  padding: "11px 197px",
                  width: "418px",
                  border: "1px solid #c4c4c4",
                }}
                className="mt2"
              >
                {currentQuiz?.vote_detail?.definition2}
              </Button>
              <Button
                variant="secondary--inactive"
                style={{
                  padding: "11px 197px",
                  width: "418px",
                  border: "1px solid #c4c4c4",
                }}
                className="mt2"
              >
                {currentQuiz?.vote_detail?.definition3}
              </Button>
              <Button
                variant="secondary--inactive"
                style={{
                  padding: "11px 197px",
                  width: "418px",
                  border: "1px solid #c4c4c4",
                }}
                className="mt2"
              >
                {currentQuiz?.vote_detail?.definition4}
              </Button>
            </div>
          </div>
        )}
        <h4 className={styles.topic}>More from this topic</h4>
        <div
          className="flex"
          style={{ overflowX: "scroll", margin: "40px 178px" }}
        >
          {quizes
            .filter((q) => q?.quiz_type === currentQuiz?.quiz_type)
            .map((quiz, index) => {
              return (
                <div
                  className={cx(styles.card2, { ml44: index !== 0 })}
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
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VotingPage;
