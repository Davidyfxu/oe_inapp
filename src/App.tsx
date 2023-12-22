import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplyAU from "./pages/ApplyAU";
import Apply from "./pages/Apply";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplyAU />} />
        <Route path="/apply" element={<Apply />} />
        {/*<Route path="*" element={<Error />} />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
