import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import styles from "./SignUp.module.scss";
import Logo from "../../assets/images/logo clean.png";
import Rocket from "../../assets/images/Rocket.png";
import {
  ArrowRight,
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
} from "../../assets/images/svgs";
import cx from "classnames";
import Button from "../Button/Button";
import { useHistory } from "react-router";
import axios from "axios";

const SignUp = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async () => {
    const req1 = await axios.post(
      "https://dev-goli.herokuapp.com/api/auth/register/",
      {
        email,
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        is_staff: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }
    );
    if (req1.data) {
      history.push("/signin");
    }
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  return (
    <div className={styles.signUp}>
      <div className="flex" style={{ position: "absolute", right: "20px" }}>
        <h5
          style={{
            fontFamily: "Noto Sans",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Already a member?
        </h5>
        <h5
          className="ml2"
          style={{
            fontFamily: "Noto Sans",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => history.push("/signin")}
        >
          Sign in
        </h5>
      </div>

      <div className="flex">
        <div
          className="flex flex-column "
          style={{ width: "462px", background: "#FFEFC8" }}
        >
          <img
            src={Logo}
            width="259"
            height="147"
            style={{ margin: "104px 172px 0px 31px", cursor: "pointer" }}
            onClick={() => history.push("/")}
          />
          <img
            src={Rocket}
            width="607"
            height="532"
            style={{ position: "relative", left: "-150px" }}
          />
        </div>
        {currentStep === 0 && (
          <div>
            <div style={{ padding: "160px 182px" }}>
              <h1 style={{ display: "inline-block" }}>Sign up to </h1>
              <img src={Logo} width="127" style={{ filter: "brightness(0)" }} />
              <div
                className="flex"
                style={{
                  flexBasis: "435px",
                  padding: "0px 0px 23px",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    border: "none",
                    background: "#005eeb",
                    color: "white",
                    fontFamily: "Noto Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "19px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    padding: "10px 56px",
                    borderRadius: "7px",
                  }}
                >
                  <GoogleIcon style={{ marginRight: "33px" }} />
                  Sign up with Google
                </button>
                <button
                  className="ml2 flex flex-center"
                  style={{
                    border: "none",
                    background: "#f4f4f4",
                    padding: "12px",

                    color: "white",

                    borderRadius: "7px",
                  }}
                >
                  <TwitterIcon height="19" fill="#707070" />
                </button>
                <button
                  className="ml2 flex flex-center"
                  style={{
                    border: "none",
                    background: "#f4f4f4",
                    padding: "12px",
                    color: "white",

                    borderRadius: "7px",
                  }}
                >
                  <FacebookIcon height="19" fill="#707070" />
                </button>
                <h5 className={styles.h5}>Or</h5>
              </div>
              <div style={{ padding: "20px 0px" }}>
                <div
                  className="flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <FormInput
                    label="Name"
                    onChange={(e) => setFirstName(e.currentTarget.value)}
                    style={{ flexBasis: "210px" }}
                    placeholder="Name"
                  />

                  <FormInput
                    label="Surname"
                    onChange={(e) => setLastName(e.currentTarget.value)}
                    className="ml1"
                    style={{ flexBasis: "210px" }}
                    placeholder="Surname"
                  />
                </div>
                <FormInput
                  label="Username"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  className="mt2"
                  placeholder="Username"
                />
                <FormInput
                  label="Email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  className="mt2"
                  placeholder="Email"
                />
                <Button
                  className="mt3"
                  variant="primary"
                  style={{ padding: "11px 38px" }}
                  onClick={() => {
                    setCurrentStep(1);
                  }}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <div style={{ padding: "160px 182px" }}>
              <h1 style={{ display: "inline-block" }}>Sign up to </h1>
              <img src={Logo} width="127" style={{ filter: "brightness(0)" }} />

              <div style={{ padding: "20px 0px" }}>
                <h2
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Time to create passcode
                </h2>
                <h3
                  style={{
                    fontFamily: "Noto Sans",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#979797",
                  }}
                >
                  Create your passcode
                </h3>

                <div className="flex">
                  <FormInput
                    innerRef={ref1}
                    inputStyle={{
                      width: "65px",
                      height: "60px",
                      padding: "20px 28px",
                    }}
                    placeholder="X"
                    onChange={(e) => {
                      setPassword(e.currentTarget.value);
                      ref2.current.focus();
                    }}
                  />
                  <FormInput
                    innerRef={ref2}
                    className="ml2"
                    inputStyle={{
                      width: "65px",
                      height: "60px",
                      padding: "20px 28px",
                    }}
                    placeholder="X"
                    onChange={(e) => {
                      setPassword(password + e.currentTarget.value);
                      ref3.current.focus();
                    }}
                  />
                  <FormInput
                    innerRef={ref3}
                    className="ml2"
                    inputStyle={{
                      width: "65px",
                      height: "60px",
                      padding: "20px 28px",
                    }}
                    placeholder="X"
                    onChange={(e) => {
                      setPassword(password + e.currentTarget.value);
                      ref4.current.focus();
                    }}
                  />
                  <FormInput
                    innerRef={ref4}
                    className="ml2"
                    inputStyle={{
                      width: "65px",
                      height: "60px",
                      padding: "20px 28px",
                    }}
                    placeholder="X"
                    onChange={(e) => {
                      setPassword(password + e.currentTarget.value);
                      if (password.length === 4) {
                        handleSubmit();
                      }
                    }}
                  />
                </div>
                <div className="flex">
                  <Button
                    className="mt3 mr2"
                    variant="secondary"
                    style={{ padding: "0px 15px" }}
                    onClick={() => {
                      setCurrentStep(0);
                    }}
                  >
                    <ArrowRight
                      fill="#ffb803"
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </Button>
                  <Button
                    className="mt3"
                    variant="primary"
                    style={{ padding: "11px 61px", width: "239px" }}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <svg
        width="111"
        height="111"
        viewBox="0 0 111 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: "40px", left: "560px", position: "absolute" }}
      >
        <circle cx="55.5" cy="55.5" r="55.5" fill="#F9F9F9" />
      </svg>
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: "301px", right: "97px", position: "absolute" }}
      >
        <circle cx="30.5" cy="30.5" r="30.5" fill="#F9F9F9" />
      </svg>
      <svg
        width="111"
        height="111"
        viewBox="0 0 111 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: "400px", right: "160px", position: "absolute" }}
      >
        <circle cx="55.5" cy="55.5" r="55.5" fill="#F9F9F9" />
      </svg>
    </div>
  );
};

export const FormInput = (props) => (
  <div
    className={cx("flex flex-column", { [props.className]: props.className })}
    style={props.style}
  >
    <label className={cx(styles.formLabel, "mb2")}>{props.label}</label>
    <input
      {...props}
      className={cx(styles.formInput)}
      style={{ padding: "10px 20px", ...props.inputStyle }}
      ref={props.innerRef}
    />
  </div>
);

export default SignUp;
