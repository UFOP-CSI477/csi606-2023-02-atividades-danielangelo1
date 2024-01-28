import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { MenuItem } from "@mui/material";
import { BloodDonation } from "../../pages/marcacoes/Marcacoes";

interface PersonProps {
  _id: string;
  name: string;
}

interface LocationProps {
  name: string;
  address: string;
  cidade_id: string;
}

interface DonationDialogProps {
  donationToEdit: BloodDonation | null;
  onSave: (donation: BloodDonation) => void;
  onClose: () => void;
}

const DonationDialog: React.FC<DonationDialogProps> = ({
  donationToEdit,
  onSave,
  onClose,
}) => {
  const [open, setOpen] = useState(false);
  const [persons, setPersons] = useState<PersonProps[]>([]);
  const [selectedPersonId, setSelectedPersonId] = useState<string>("");
  const [locations, setLocations] = useState<LocationProps[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<number>(0);
  const [date, setDate] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const API_URL = "http://localhost:3000";

  const getAllPersons = async () => {
    try {
      const response = await axios.get(`${API_URL}/persons`);
      setPersons(response.data);
    } catch (error) {
      console.error("Error na requisição", error);
    }
  };

  const getAllLocations = async () => {
    try {
      const response = await axios.get(`${API_URL}/placesDonation`);
      setLocations(response.data);
    } catch (error) {
      console.error("Error na requisição", error);
    }
  };

  useEffect(() => {
    getAllPersons();
    getAllLocations();
    if (donationToEdit) {
      setSelectedPersonId(donationToEdit.person_id);
      setSelectedLocationId(donationToEdit.local_id);
      setDate(donationToEdit.data);
      setOpen(true);
    }
  }, [donationToEdit]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const donation = {
      person_id: selectedPersonId.toString(), // Converter para string
      local_id: selectedLocationId, // Já é um número
      data: date, // A data é tratada como string no frontend
      _id: donationToEdit ? donationToEdit._id : undefined,
    };

    onSave(donation);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Marcar Consulta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Marque sua Doação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os campos abaixo para marcar sua doação de sangue
          </DialogContentText>
          <TextField
            id="select"
            label="Nome do doador"
            select
            required
            margin="dense"
            fullWidth
            autoFocus
            value={selectedPersonId}
            onChange={(e) => setSelectedPersonId(e.target.value)}
          >
            {persons.map((person) => (
              <MenuItem key={person._id} value={person._id}>
                {person.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select"
            label="Local de doação"
            select
            required
            fullWidth
            margin="dense"
            autoFocus
            value={selectedLocationId?.toString()}
            onChange={(e) => setSelectedLocationId(Number(e.target.value))}
          >
            {locations.map((location) => (
              <MenuItem key={location.cidade_id} value={location.cidade_id}>
                {location.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            autoFocus
            required
            margin="dense"
            id="date"
            name="date"
            type="date"
            fullWidth
            variant="standard"
            helperText="Data da doação"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Marcar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DonationDialog;
