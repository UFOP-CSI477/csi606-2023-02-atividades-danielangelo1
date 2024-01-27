import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Marcacoes from "../pages/marcacoes/Marcacoes";
import Perfil from "../pages/perfil/Perfil";
import Locais from "../pages/locais/Locais";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/marcacoes" element={<Marcacoes />} />
      <Route path="/locais" element={<Locais />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default Router;
