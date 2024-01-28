import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import axios from "axios";
import cityDialog from "../../components/cityDialog/CityDialog";

interface CityProps {
  name: string;
  estado_id: number;
}

const API_URL = "http://localhost:3000/city";

const Cidades = () => {
  const [cities, setCities] = useState<CityProps[]>([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get(API_URL);
      setCities(response.data);
    } catch (error) {
      console.error("Error na requisição", error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <ul>
          {cities.map((city) => (
            <li key={city.estado_id}>{city.name}</li>
          ))}
        </ul>
        <CityDialog />
      </main>
      <Footer />
    </>
  );
};

export default Cidades;
