import React from "react";
import { Typography, Paper, ListItem, IconButton, Grid } from "@mui/material";
import { Trash } from "@phosphor-icons/react";
import { PencilSimple } from "@phosphor-icons/react/dist/ssr";

export interface PersonItemProps {
  name: string;
  address: string;
  rg: string;
  cidade_id: number;
  tipo_id: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const PersonItem = ({
  name,
  address,
  rg,
  cidade_id,
  tipo_id,
  onEdit,
  onDelete,
}: PersonItemProps) => {
  return (
    <>
      <ListItem component={Paper} elevation={2} sx={{ mb: 2, p: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body1">Cidade: {name}</Typography>
            <Typography variant="body1">Endereço: {address}</Typography>
            <Typography variant="body1">RG: {rg}</Typography>
            <Typography variant="body1">Cidade ID: {cidade_id}</Typography>
            <Typography variant="body1">Tipo sanguineo: {tipo_id}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => onEdit(name)}>
              <PencilSimple />
            </IconButton>
            <IconButton onClick={() => onDelete(name)}>
              <Trash />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
    </>
  );
};

export default PersonItem;
