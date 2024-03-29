import React, { useEffect, useState } from "react";
import axios from "axios";
import DonationItem from "../../components/donationItem/DonationItem";
import Footer from "../../components/footer/Footer";
import DonationDialog from "../../components/donationDialog/DonationDialog";
import Header from "../../components/header/Header";
import Button from "@mui/material/Button";

export interface BloodDonation {
  person_id: string;
  local_id: number;
  data: string;
  createdAt: string;
  updatedAt: string;
  _id?: string;
}

const API_URL = "http://localhost:3000/donations";

const Marcacoes = () => {
  const [donations, setDonations] = useState<BloodDonation[]>([]);
  const [editDonation, setEditDonation] = useState<BloodDonation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchDonations();
    setIsDialogOpen(true);
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.length >= 0) {
        setDonations(response.data);
      } else {
        alert("Não possui agendamentos!");
      }
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleEditDonation = (donation: BloodDonation) => {
    setEditDonation(donation);
    setIsDialogOpen(true);
  };

  const handleDeleteDonation = async (_id: string) => {
    try {
      await axios.delete(`${API_URL}/${_id}`);
      setDonations(donations.filter((donation) => donation._id !== _id));
      alert("Agendamento Deletado");
    } catch (error) {
      console.error("Error ao deletar o post", error);
    }
  };

  const handleSaveDonation = async (donation: BloodDonation) => {
    try {
      if (donation._id) {
        const response = await axios.put(
          `${API_URL}/${donation._id}`,
          donation,
        );
        setDonations(
          donations.map((d) =>
            d._id === donation._id ? { ...d, ...response.data } : d,
          ),
        );
        alert("Agendamento Atualizada");
      } else {
        const response = await axios.post(API_URL, donation);
        setDonations([...donations, response.data]);
      }
      handleCloseDialog();
    } catch (error) {
      console.error("Erro ao salvar a doação", error);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(true);
    setEditDonation(null);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Meus agendamentos</h1>
        <ul>
          {donations.map((donation) => (
            <DonationItem
              key={donation._id}
              data={donation.data}
              person_id={donation.person_id}
              local_id={donation.local_id}
              createdAt={donation.createdAt}
              updatedAt={donation.updatedAt}
              onEdit={() => handleEditDonation(donation)}
              onDelete={() =>
                donation._id && handleDeleteDonation(donation._id)
              }
            />
          ))}
        </ul>

        {isDialogOpen && (
          <DonationDialog
            donationToEdit={editDonation}
            onSave={handleSaveDonation}
            onClose={handleCloseDialog}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Marcacoes;
