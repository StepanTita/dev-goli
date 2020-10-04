import React, { useState } from "react";
import Footer from "../Footer/Footer";
import styles from "./SignIn.module.scss";
import Logo from "../../assets/images/logo clean.png";
import Rocket from "../../assets/images/Rocket.png";
import {
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
} from "../../assets/images/svgs";
import cx from "classnames";
import Button from "../Button/Button";
import { FormInput } from "../SignUp/SignUp";
import { useHistory } from "react-router";
import axios from "axios";

const SignIn = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const response = await axios.post(
      "https://dev-goli.herokuapp.com/api/auth/login/",
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }
    );

    if (response) {
      localStorage.user = JSON.stringify(username);
      history.push("/createVoting");
    }
  };
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
          No account?
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
          onClick={() => history.push("/signup")}
        >
          Sign up
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
        <div>
          <div style={{ padding: "160px 182px" }}>
            <h1 style={{ display: "inline-block" }}>Sign in to </h1>
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
                Sign in with Google
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
              <FormInput
                label="Username"
                className="mt2"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.currentTarget.value);
                }}
              />
              <FormInput
                label="Passcode"
                className="mt2"
                placeholder="Passcode"
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
              <Button
                className="mt3"
                variant="primary"
                style={{ padding: "11px 38px" }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
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

export default SignIn;
