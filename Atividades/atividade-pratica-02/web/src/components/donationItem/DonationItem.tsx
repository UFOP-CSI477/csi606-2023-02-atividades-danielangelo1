import React from "react";
import { Typography, Paper, ListItem, IconButton, Grid } from "@mui/material";

import { Trash } from "@phosphor-icons/react";
import { PencilSimple } from "@phosphor-icons/react/dist/ssr";
import { formatedDate } from "../../utils/formatedDate";

interface DonationItemProps {
  person_id: string;
  local_id: number;
  data: string;
  createdAt: string;
  updatedAt: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DonationItem = ({
  person_id,
  local_id,
  data,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
}: DonationItemProps) => {
  return (
    <ListItem component={Paper} elevation={2} sx={{ mb: 2, p: 2 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="body1">Data: {formatedDate(data)}</Typography>
          <Typography variant="body1">Local: {local_id}</Typography>
          <Typography variant="body1">Pessoa: {person_id}</Typography>
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
          <IconButton onClick={() => onEdit(person_id)}>
            <PencilSimple />
          </IconButton>
          <IconButton onClick={() => onDelete(person_id)}>
            <Trash />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default DonationItem;
