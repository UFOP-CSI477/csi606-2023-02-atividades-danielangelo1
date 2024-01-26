import React from "react";
import NavMenuItem from "../navMenuItem/NavMenuItem";
import style from "./Footer.module.scss";
import { Calendar, HouseLine, Stethoscope, User } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
      <footer>
        <nav className={style.menu_links}>
          <div className={style.link}>
            <HouseLine size={24} color="#98a3b3" />
            <NavMenuItem to="/">Home</NavMenuItem>
          </div>
          <div className={style.link}>
            <Calendar size={24} color="#98a3b3" />
            <NavMenuItem to="/marcacoes">Marcações</NavMenuItem>
          </div>
          <div className={style.link}>
            <Stethoscope size={24} color="#98a3b3" />
            <NavMenuItem to="/medicos">Médicos</NavMenuItem>
          </div>
          <div className={style.link}>
            <User size={24} color="#98a3b3" />
            <NavMenuItem to="/perfil">Perfil</NavMenuItem>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
