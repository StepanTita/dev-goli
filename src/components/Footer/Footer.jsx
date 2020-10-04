import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import cx from "classnames";
import {
  FacebookIcon,
  InstagramIcon,
  RssIcon,
  TwitterIcon,
} from "../../assets/images/svgs";
const Footer = (props) => {
  const footerItems = [
    { title: "Features" },
    { title: "Votings" },
    { title: "About us" },
    { title: "Smth more" },
    { title: "Contact" },
    { title: "Help & Support" },
    { title: "Privacy Policy" },
    { title: "Terms & Conditions" },
  ];
  return (
    <div className={cx("flex", styles.footer)}>
      <Logo style={{ marginRight: "400px" }} />
      <div>
        <div className="flex">
          <Input
            placeholder="Stay in touch  - sign up with your email"
            style={{
              height: "62px",
              width: "824px",
              left: "0px",
              top: "0px",
              borderRadius: "6px",
              border: "none",
            }}
          />
          <Button
            variant="primary"
            style={{
              padding: "15.5px 38px",
              position: "relative",
              left: "-168px",
              height: "50px",
              top: "6px",
            }}
          >
            SUBSCRIBE
          </Button>
        </div>
        <div className="flex" style={{ marginTop: "50px" }}>
          <div className={styles.helpMenu}>
            <h4>Help Menu</h4>
            <ul>
              {footerItems.map((footerItem) => (
                <li key={footerItem.title} className="mt2">
                  {footerItem.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={styles.stats}>
              <div>
                <h4>12,201</h4>
                <h5>members</h5>
              </div>
              <div>
                <h4>3,291</h4>
                <h5>voting</h5>
              </div>
              <div>
                <h4>1,291</h4>
                <h5>5 star reviews</h5>
              </div>
            </div>
            <div
              className={cx(styles.social, "flex flex-center")}
              style={{ marginTop: "51px" }}
            >
              <TwitterIcon />
              <FacebookIcon style={{ marginLeft: "54px" }} />
              <RssIcon style={{ marginLeft: "54px" }} />
              <InstagramIcon style={{ marginLeft: "54px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
