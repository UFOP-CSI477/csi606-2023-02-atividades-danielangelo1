import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Marcacoes from "../pages/marcacoes/Marcacoes";
import Perfil from "../pages/perfil/Perfil";
import Cidades from "../pages/cidades/Cidades";
import Estados from "../pages/estados/Estados";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/marcacoes" element={<Marcacoes />} />
      <Route path="/cidades" element={<Cidades />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/estados" element={<Estados />} />
    </Routes>
  );
};

export default Router;
