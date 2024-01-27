import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import DonationItem from "../../components/donationItem/DonationItem";
import Footer from "../../components/footer/Footer";

interface BloodDonation {
  person_id: number;
  local_id: number;
  data: string;
}

const API_URL = "http://localhost:3000/donations/";

const Marcacoes = () => {
  const [donations, setDonations] = useState<BloodDonation[]>([]);
  const [newDonationAppointment, setNewDonationAppointment] =
    useState<BloodDonation>({
      person_id: 0,
      local_id: 0,
      data: "",
    });
  const [editingDonations, setEditingDonations] =
    useState<BloodDonation | null>(null);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data[0].length >= 0) {
        setDonations(response.data);
      } else {
        alert("Não possui agendamentos!");
      }
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewDonationAppointment({
      ...newDonationAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDonation = async () => {
    try {
      if (editingDonations) {
        await axios.put(
          `${API_URL}/${editingDonations.person_id}`,
          newDonationAppointment,
        );
        setDonations((prevDonations) =>
          prevDonations.map((donation) =>
            donation.person_id === editingDonations.person_id
              ? { ...donation, ...newDonationAppointment }
              : donation,
          ),
        );
        setEditingDonations(null);
      } else {
        const response = await axios.post(API_URL, newDonationAppointment);
        setDonations((prevDonations) => [...prevDonations, response.data]);
      }
      setNewDonationAppointment({ person_id: 0, local_id: 0, data: "" });
    } catch (error) {
      console.log("error na requisição", error);
    }
  };

  const handleEditDonation = (donation: BloodDonation) => {
    setEditingDonations(donation);
  };

  const handleDeleteDonation = async (person_id: number) => {
    try {
      await axios.delete(`${API_URL}/${person_id}`);
      setDonations(
        donations.filter((donation) => donation.person_id !== person_id),
      );
    } catch (error) {
      console.error("Error ao deletar o post", error);
    }
  };

  return (
    <>
      <main>
        <ul>
          {donations.map((donation) => (
            <DonationItem
              key={donation.person_id}
              data={donation.data}
              person_id={donation.person_id}
              local_id={donation.local_id}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Marcacoes;
