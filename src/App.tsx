import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import useSWR from "swr";
import { fetcher } from "./utils";
import { useGlobalStore } from "./store/useGlobalStore";
import FloatButtons from "./components/FloatButtons";
import LazyRouter from "./components/LazyRouter";

const Home = LazyRouter(() => import("./pages/Home"));
const About = LazyRouter(() => import("./pages/About"));
const Contact = LazyRouter(() => import("./pages/Contact"));
const App = () => {
  const { data } = useSWR("/www/getAllData", fetcher);
  const setData = useGlobalStore((state) => state.setData);

  useEffect(() => {
    if (data) {
      setData(data?.data ?? {});
    }
  }, [data]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatButtons />
    </BrowserRouter>
  );
};

export default App;
