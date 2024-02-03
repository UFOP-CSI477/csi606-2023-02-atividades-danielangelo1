import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export interface IState {
  name: string;
  _id: string;
}

const Estados = () => {
  return (
    <>
      <Header />
      <h1>Estados</h1>
      <Footer />
    </>
  );
};

export default Estados;
