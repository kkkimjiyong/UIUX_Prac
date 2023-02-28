import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SmartHomeApp } from "./pages/SmartHomeApp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/smarthomeapp" element={<SmartHomeApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
