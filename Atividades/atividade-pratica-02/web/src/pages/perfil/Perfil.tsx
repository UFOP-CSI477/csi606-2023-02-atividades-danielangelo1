import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import PersonItem from "../../components/personItem/PersonItem";
import Header from "../../components/header/Header";
import PersonDialog from "../../components/personDialog/PersonDialog";

export interface PersonProps {
  name: string;
  address: string;
  rg: string;
  cidade_id: number;
  tipo_id: number;
  _id?: string;
}

const API_URL = "http://localhost:3000/persons";

const Perfil = () => {
  const [persons, setPersons] = useState<PersonProps[]>([]);
  const [editingPersons, setEditingPersons] = useState<PersonProps | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchPersons();
    setIsDialogOpen(true);
  }, []);

  const fetchPersons = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.length >= 0) setPersons(response.data);
    } catch (error) {
      console.log("Error na requisição", error);
    }
  };

  const handleEditPersons = (person: PersonProps) => {
    setEditingPersons(person);
    setIsDialogOpen(true);
  };

  const handleDeletePerson = async (_id: string) => {
    try {
      await axios.delete(`${API_URL}/${_id}`);
      setPersons(persons.filter((person) => person._id !== _id));
      alert("Usuário deletado");
    } catch (error) {
      console.error("Erro na requisição", error);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingPersons(null);
  };

  const handleSaveCity = async (person: PersonProps) => {
    try {
      if (person._id) {
        const response = await axios.put(`${API_URL}/${person._id}`, person);

        setPersons(
          persons.map((p) =>
            p._id === person._id ? { ...p, ...response.data } : p,
          ),
        );
        alert("Pessoa atualizada");
      } else {
        const response = await axios.post(API_URL, person);
        setPersons([...persons, response.data]);
      }
      handleCloseDialog();
    } catch (error) {
      console.error("Error ao salvar", error);
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
              onEdit={() => handleEditPersons(person)}
              onDelete={() => person._id && handleDeletePerson(person._id)}
            />
          ))}
        </ul>
        {isDialogOpen && (
          <PersonDialog
            personToEdit={editingPersons}
            onSave={handleSaveCity}
            onClose={handleCloseDialog}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Perfil;
