import React from "react";
import { Typography, Paper, ListItem, IconButton, Grid } from "@mui/material";

import { Trash } from "@phosphor-icons/react";
import { PencilSimple } from "@phosphor-icons/react/dist/ssr";
import { formatedDate } from "../../utils/formatedDate";
export interface CityItemProps {
  name: string;
  estado_id: String;
  createdAt: string;
  updatedAt: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CityItem = ({
  name,
  estado_id,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
}: CityItemProps) => {
  return (
    <>
      <ListItem component={Paper} elevation={2} sx={{ mb: 2, p: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body1">Cidade: {name}</Typography>
            <Typography variant="body1">ID do Estado: {estado_id}</Typography>
            <Typography variant="caption">
              Criado em: {formatedDate(createdAt)}
            </Typography>
            <div>
              <Typography variant="caption">
                Ultima edição em: {formatedDate(updatedAt)}
              </Typography>
            </div>
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

export default CityItem;
