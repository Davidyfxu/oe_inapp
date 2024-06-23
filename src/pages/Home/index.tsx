import React from "react";
import MotionWrapper from "../../components/MotionWrapper";
import Header from "../../components/Header";
import Strengths from "../../components/Strengths";
import Contents from "../../components/Contents";
import GetInTouch from "../../components/GetInTouch";

const Home = () => {
  const modules = [<Header />, <Strengths />, <Contents />, <GetInTouch />];
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

export default Home;
