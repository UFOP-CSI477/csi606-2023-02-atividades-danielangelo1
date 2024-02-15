import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const LayoutDefault = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutDefault;
