import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import PersonItem from "../../components/personItem/PersonItem";
import Header from "../../components/header/Header";

interface PersonProps {
  name: string;
  address: string;
  rg: string;
  cidade_id: number;
  tipo_id: number;
}

const API_URL = "http://localhost:3000/persons";

const Perfil = () => {
  const [persons, setPersons] = useState<PersonProps[]>([]);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.length >= 0) setPersons(response.data);
      alert("Usuário não existe");
    } catch (error) {
      console.log("Error na requisição", error);
    }
  };
  return (
    <>
      <Header />
      <main>
        <ul>
          {persons.map((person) => (
            <PersonItem
              key={person.tipo_id}
              name={person.name}
              address={person.address}
              rg={person.rg}
              cidade_id={person.cidade_id}
              tipo_id={person.tipo_id}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Perfil;
