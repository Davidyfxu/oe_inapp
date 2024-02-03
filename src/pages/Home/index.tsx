import React from "react";
import GetInTouch from "../../components/GetInTouch";
import GetStarted from "../../components/GetStarted";
import Header from "../../components/Header";
import FloatButtons from "../../components/FloatButtons";

const Home = () => {
  return (
    <>
      <Header />
      <GetStarted />
      <GetInTouch />
      <FloatButtons />
    </>
  );
};

export default Home;
