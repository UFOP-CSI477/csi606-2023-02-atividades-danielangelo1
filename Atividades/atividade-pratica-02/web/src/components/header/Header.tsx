import React from "react";
// import { Heart, Bell, UserCircle } from "@phosphor-icons/react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className={style.user_info}>
          {/* <UserCircle size={24} color="#a34d4d" weight="duotone" /> */}
          <span>Bem-vindo</span>
          <p>Nome</p>
        </div>

        <div className={style.icons}>
          {/* <Heart size={24} color="#344154" /> */}
          {/* <Bell size={24} color="#344154" /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
