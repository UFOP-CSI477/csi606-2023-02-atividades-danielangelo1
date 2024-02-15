import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import LayoutDefault from "../layouts/LayoutDefault";
import Game from "../pages/game/Game";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>Not Found</div>} />
            <Route path="/game/:id" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
