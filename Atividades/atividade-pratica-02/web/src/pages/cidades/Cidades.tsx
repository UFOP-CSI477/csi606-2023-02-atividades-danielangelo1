import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import axios from "axios";
import CityDialog from "../../components/cityDialog/CityDialog";
import CityItem from "../../components/cityItem/CityItem";
import { BASEAPI_URL } from "../../utils/API";

export interface CityProps {
  name: string;
  estado_id: string;
  _id?: string;
}

const API_URL = "http://localhost:3000/city";

const Cidades = () => {
  const [cities, setCities] = useState<CityProps[]>([]);
  const [editingCities, setEditingCities] = useState<CityProps | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchCities();
    setIsDialogOpen(true);
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      setCities(response.data);
    } catch (error) {
      console.error("Error na requisição", error);
    }
  };

  const handleEditCities = (city: CityProps) => {
    setEditingCities(city);
    setIsDialogOpen(true);
  };

  const handleDeleteCity = async (_id: string) => {
    try {
      await axios.delete(`${API_URL}/${_id}`);
      setCities(cities.filter((city) => city._id !== _id));
      alert("Cidade deletada");
    } catch (error) {
      console.error("Error ao deletar cidade", error);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(true);
    setEditingCities(null);
  };

  const createDonationLocation = async (city: CityProps) => {
    try {
      await axios.post(`${BASEAPI_URL}/placesDonation`, {
        name: city.name,
        address: "Endereço",
        cidade_id: city._id,
      });
    } catch (error) {
      console.error("Error na requisição", error);
    }
  };

  const handleSaveCity = async (city: CityProps) => {
    try {
      if (city._id) {
        const response = await axios.put(`${API_URL}/${city._id}`, city);

        setCities(
          cities.map((c) =>
            c._id === city._id ? { ...c, ...response.data } : c,
          ),
        );
        alert("Cidade atualizada");
      } else {
        const response = await axios.post(API_URL, city);
        setCities([...cities, response.data]);
      }
      createDonationLocation(city);
      handleCloseDialog();
    } catch (error) {
      console.error("Error ao salvar", error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <h1>Cidades</h1>
        <p>
          Ao criar uma cidade é automaticamente criado no banco um Local de
          Doação.
        </p>
        <ul>
          {cities.map((city) => (
            <CityItem
              name={city.name}
              key={city._id}
              estado_id={city.estado_id}
              onEdit={() => handleEditCities(city)}
              onDelete={() => city._id && handleDeleteCity(city._id)}
            />
          ))}
        </ul>

        {isDialogOpen && (
          <CityDialog
            cityToEdit={editingCities}
            onSave={handleSaveCity}
            onClose={handleCloseDialog}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cidades;
