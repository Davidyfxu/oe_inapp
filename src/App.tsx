import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplyAU from "./pages/ApplyAU";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/index";
const App = () => {
  const isShowNav = !window.location.pathname.includes("apply");
  return (
    <BrowserRouter>
      {isShowNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applyAU" element={<ApplyAU />} />
        <Route path="/apply" element={<Apply />} />
        {/*<Route path="*" element={<Error />} />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
