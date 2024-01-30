import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />

      <main className={style.homeMain}>
        <section className={style.hero}>
          <h1>Agende Sua Doação de Sangue</h1>
          <p>Contribua para salvar vidas. Seu gesto faz toda a diferença.</p>
        </section>

        <section className={style.info}>
          <h2>Por Que Doar Sangue?</h2>
          <p>
            Doar sangue é um ato de solidariedade. Cada doação pode salvar até
            três vidas.
          </p>
          <p>
            Entenda os requisitos, o processo e como sua doação ajuda a
            comunidade.
          </p>
        </section>

        <section className={style.benefits}>
          <h2>Benefícios da Doação</h2>
          <ul>
            <li>Salva vidas</li>
            <li>Beneficia a saúde do doador</li>
            <li>Contribui para a medicina comunitária</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
