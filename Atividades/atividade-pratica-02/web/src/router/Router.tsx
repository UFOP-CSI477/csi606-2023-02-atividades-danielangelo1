import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Marcacoes from "../pages/marcacoes/Marcacoes";
import Medicos from "../pages/medicos/Medicos";
import Perfil from "../pages/perfil/Perfil";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/marcacoes" element={<Marcacoes />} />
      <Route path="/medicos" element={<Medicos />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default Router;
