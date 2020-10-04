import React, { useState } from "react";
import styles from "./CreateVotingPage.module.scss";
import cx from "classnames";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { FormInput } from "../SignUp/SignUp";
import axios from "axios";

const CreateVotingPage = (props) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [goal, setGoal] = useState("");
  const [definition1, setDefinition1] = useState("");
  const [definition2, setDefinition2] = useState("");
  const [definition3, setDefinition3] = useState("");
  const [definition4, setDefinition4] = useState("");

  const handleSubmit = async () => {
    await axios.post(`https://dev-goli.herokuapp.com/api/quizes/create/`, {
      title: quizTitle,
      quiz_type: topic,
      description: quizDescription,
      goal: parseInt(goal),
      indicator_value: 0,
      author: localStorage.user ? JSON.parse(localStorage.user) : "stepan",
      timestamp: Math.floor(Date.now() / 1000),
      vote_detail: {
        definition1,
        definition2,
        definition3,
        definition4,
      },
    });
  };

  const step1 = (
    <div style={{ padding: "40px 100px" }}>
      <h1>CREATE VOTING - SOLVE THE ISSUE</h1>
      <FormInput
        label="Enter a header of the voting"
        placeholder="Header"
        onChange={(e) => setQuizTitle(e.currentTarget.value)}
      />
      <FormInput
        label="Enter a description of the voting"
        placeholder="Description"
        className="mt3"
        onChange={(e) => setQuizDescription(e.currentTarget.value)}
      />
      <FormInput
        label="Choose the topic"
        className="mt3"
        onChange={(e) => setTopic(e.currentTarget.value)}
      />
      <FormInput
        label="Goal"
        placeholder="Goal1"
        className="mt3"
        type="number"
        onChange={(e) => setGoal(e.currentTarget.value)}
      />
      <Button
        variant="primary"
        className="mt3"
        style={{ padding: "10px 73px" }}
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
      >
        Next
      </Button>
    </div>
  );

  const step2 = (
    <div style={{ padding: "40px 100px" }}>
      <h1>CREATE QUESTION </h1>
      <FormInput
        label="Enter a definition of the question"
        placeholder="Definition"
        className="mt3"
        onChange={(e) => {
          setDefinition1(e.currentTarget.value);
        }}
      />
      <FormInput label="Answers" placeholder="Answer 1 " className="mt3" />
      <FormInput
        placeholder="Answer 2"
        className="mt3"
        onChange={(e) => {
          setDefinition2(e.currentTarget.value);
        }}
      />
      <FormInput
        placeholder="Answer 3"
        className="mt3"
        onChange={(e) => {
          setDefinition3(e.currentTarget.value);
        }}
      />
      <FormInput
        placeholder="Answer 4"
        className="mt3"
        onChange={(e) => {
          setDefinition4(e.currentTarget.value);
        }}
      />

      <Button
        variant="primary"
        className="mt3"
        style={{ padding: "10px 73px" }}
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
      >
        Next
      </Button>
    </div>
  );

  const step3 = (
    <div style={{ padding: "40px 100px" }}>
      <h1>Confirmation</h1>

      <Button
        variant="primary"
        className="mt3"
        style={{ padding: "10px 73px" }}
        onClick={() => {
          handleSubmit();
        }}
      >
        Save
      </Button>
    </div>
  );

  return (
    <div className={cx(styles.createVoting, "flex")}>
      <div
        style={{ width: "281px", background: "white", padding: "20px 75px" }}
      >
        <Logo />
        <Button
          variant="secondary--inactive"
          style={{
            width: "182px",
            height: "40px",
            border: "1px solid #B6B6B6",
            marginTop: "50px",
          }}
        >
          Main
        </Button>
        <Button
          variant="secondary--inactive"
          style={{
            width: "182px",
            height: "40px",
            border: "0px",
            marginTop: "20px",
          }}
        >
          Questions
        </Button>
        <Button
          variant="secondary--inactive"
          style={{
            width: "182px",
            height: "40px",
            border: "0px",

            marginTop: "20px",
          }}
        >
          Confirmation
        </Button>
      </div>
      <div style={{ background: "#f6f6f6", width: "100%" }}>
        <div
          className="flex"
          style={{
            justifyContent: "space-between",
            padding: "25px 100px",
            background: "white",
          }}
        >
          <Button
            variant="secondary--inactive"
            style={{
              width: "182px",
              height: "40px",

              marginTop: "20px",
            }}
          >
            Voting
          </Button>
          <Button
            variant="secondary--inactive"
            style={{
              width: "182px",
              height: "40px",

              marginTop: "20px",
            }}
          >
            Settings
          </Button>
          <Button
            variant="secondary--inactive"
            style={{
              width: "182px",
              height: "40px",

              marginTop: "20px",
            }}
          >
            Responses
          </Button>
          <Button
            variant="secondary--inactive"
            style={{
              width: "182px",
              height: "40px",

              marginTop: "20px",
            }}
          >
            Results
          </Button>
        </div>
        {currentStep === 1 && step1}
        {currentStep === 2 && step2}
        {currentStep === 3 && step3}
      </div>
    </div>
  );
};

export default CreateVotingPage;
