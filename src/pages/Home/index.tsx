import React from "react";
import MotionWrapper from "../../components/MotionWrapper";
import LazyRouter from "../../components/LazyRouter";
const Header = LazyRouter(() => import("../../components/Header"));
const Strengths = LazyRouter(() => import("../../components/Strengths"));
const GetInTouch = LazyRouter(() => import("../../components/GetInTouch"));
const Contents = LazyRouter(() => import("../../components/Contents"));
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
