import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
