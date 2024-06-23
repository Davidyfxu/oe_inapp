import React from "react";
import Content from "../../components/Content/index";
import OffersRank from "../../components/OffersRank/index";
import CoFounders from "../../components/CoFounders";
import MotionWrapper from "../../components/MotionWrapper";

const About = () => {
  const modules = [<OffersRank />, <Content />, <CoFounders />];
  return (
    <>
      {modules.map((module, index) => (
        <MotionWrapper duration={index + 0.5} key={index}>
          {module}
        </MotionWrapper>
      ))}
    </>
  );
};

export default About;
