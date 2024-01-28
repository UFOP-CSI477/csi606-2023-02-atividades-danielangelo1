import React from "react";
import NavMenuItem from "../navMenuItem/NavMenuItem";
import style from "./Footer.module.scss";
import {
  Calendar,
  Flag,
  GlobeHemisphereEast,
  HouseLine,
  Stethoscope,
  User,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
      <footer>
        <nav className={style.menu_links}>
          <NavMenuItem to="/">
            <HouseLine size={24} color="#98a3b3" />
            Home
          </NavMenuItem>
          <NavMenuItem to="/marcacoes">
            <Calendar size={24} color="#98a3b3" />
            Marcações
          </NavMenuItem>

          <NavMenuItem to="/cidades">
            <GlobeHemisphereEast size={32} color="#98a3b3" />
            Cidades
          </NavMenuItem>

          <NavMenuItem to="/estados">
            <Flag size={32} color="#98a3b3" />
            Estados
          </NavMenuItem>

          <NavMenuItem to="/perfil">
            <User size={24} color="#98a3b3" />
            Perfil
          </NavMenuItem>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
