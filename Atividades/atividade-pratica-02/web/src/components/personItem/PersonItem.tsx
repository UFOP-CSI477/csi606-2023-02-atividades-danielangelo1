import React from "react";

interface PersonItemProps {
  name: string;
  address: string;
  rg: string;
  cidade_id: number;
  tipo_id: number;
}

const PersonItem = ({
  name,
  address,
  rg,
  cidade_id,
  tipo_id,
}: PersonItemProps) => {
  return (
    <>
      <ul>
        <li>
          <p>Nome: {name}</p>
          <p>Endereço: {address}</p>
          <p>RG: {rg}</p>
          <p>Cidade: {cidade_id}</p>
          <p>Tipo Sanguineo: {tipo_id}</p>
        </li>
      </ul>
    </>
  );
};

export default PersonItem;
