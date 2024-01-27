import React from "react";

interface DonationItemProps {
  person_id: number;
  local_id: number;
  data: string;
}

const DonationItem = ({ person_id, local_id, data }: DonationItemProps) => {
  return (
    <li>
      <p>Data: {data}</p>
      <p>Local: {local_id}</p>
      <p>Pessoa: {person_id}</p>
    </li>
  );
};

export default DonationItem;
