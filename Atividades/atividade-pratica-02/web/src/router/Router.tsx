import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
