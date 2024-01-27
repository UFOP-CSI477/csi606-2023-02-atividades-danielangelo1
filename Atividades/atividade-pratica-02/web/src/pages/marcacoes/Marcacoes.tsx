import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import DonationItem from "../../components/donationItem/DonationItem";

interface BloodDonation {
  person_id: number;
  local_id: number;
  data: string;
}

const API_URL = "http://localhost:3000/donations/";

const Marcacoes = () => {
  const [donations, setDonations] = useState<BloodDonation[]>([]);

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
