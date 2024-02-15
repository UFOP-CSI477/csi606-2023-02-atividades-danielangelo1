import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import LayoutDefault from "../layouts/LayoutDefault";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
