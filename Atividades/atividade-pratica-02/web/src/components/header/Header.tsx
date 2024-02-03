import React from "react";
import { Heart, Bell, UserCircle } from "@phosphor-icons/react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className={style.user_info}>
          <UserCircle size={42} color="#98a3b3" weight="duotone" />
          <div className={style.user_info_text}>
            <span>Bem-vindo, </span>
            <p>Doador</p>
          </div>
        </div>

        <div className={style.icons}>
          <Bell size={24} color="#344154" />
          <Heart size={24} color="#344154" />
        </div>
      </header>
    </>
  );
};

export default Header;
