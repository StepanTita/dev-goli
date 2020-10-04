import React from "react";

import BackgroundShapes from "../BackgroundShapes/BackgroundShapes";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SupportedBy from "../SupportedBy/SupportedBy";
import Votings from "../Votings/Votings";
import Welcome from "../Welcome/Welcome";
import WhyDoYouHaveToChooseUs from "../WhyDoYouHaveToChooseUs/WhyDoYouHaveToChooseUs";

const Main = (props) => {
  return (
    <div>
      <Navigation />

      <Welcome />

      <Features />

      <WhyDoYouHaveToChooseUs />

      <Votings />

      <SupportedBy />

      <Footer />

      <BackgroundShapes />
    </div>
  );
};

export default Main;
