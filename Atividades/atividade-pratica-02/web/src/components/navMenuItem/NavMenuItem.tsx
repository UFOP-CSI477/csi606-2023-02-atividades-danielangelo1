import React from "react";
import { Link } from "react-router-dom";
import style from "./NavMenuItem.module.scss";

interface NavMenuItemProps {
  to: string;
  children: React.ReactNode;
}

const NavMenuItem = ({ to, children }: NavMenuItemProps) => {
  return (
    <>
      <Link to={to} className={style.link}>
        {children}
      </Link>
    </>
  );
};

export default NavMenuItem;
