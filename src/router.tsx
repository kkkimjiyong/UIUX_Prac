import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { SmartHomeApp } from "./pages/SmartHomeApp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/smarthomeapp" element={<SmartHomeApp />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
