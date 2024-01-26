import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
