import React from "react";
import { Typography, Paper, ListItem, IconButton, Grid } from "@mui/material";

import { Trash } from "@phosphor-icons/react";
import { PencilSimple } from "@phosphor-icons/react/dist/ssr";

interface DonationItemProps {
  person_id: string;
  local_id: number;
  data: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DonationItem = ({
  person_id,
  local_id,
  data,
  onEdit,
  onDelete,
}: DonationItemProps) => {
  return (
    <ListItem component={Paper} elevation={2} sx={{ mb: 2, p: 2 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="body1">Data: {data}</Typography>
          <Typography variant="body1">Local: {local_id}</Typography>
          <Typography variant="body1">Pessoa: {person_id}</Typography>
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
