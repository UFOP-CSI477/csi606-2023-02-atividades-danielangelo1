import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { PersonProps } from "../../pages/perfil/Perfil";

interface PersonDialogProps {
  personToEdit: PersonProps | null;
  onSave: (person: PersonProps) => void;
  onClose: () => void;
}

const PersonDialog = ({ personToEdit, onSave, onClose }: PersonDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [cidadeId, setCidadeId] = useState<number>(0);
  const [tipoId, setTipoId] = useState<number>(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const person = {
      name,
      address,
      rg,
      cidade_id: cidadeId,
      tipo_id: tipoId,
      _id: personToEdit?._id ? personToEdit._id : undefined,
      createdAt: personToEdit?.createdAt
        ? personToEdit.createdAt
        : new Date().toISOString(),
      updatedAt: personToEdit?.updatedAt
        ? personToEdit.updatedAt
        : new Date().toISOString(),
    };
    onSave(person);
    handleClose();
  };

  useEffect(() => {
    if (personToEdit) {
      setName(personToEdit.name);
      setAddress(personToEdit.address);
      setRg(personToEdit.rg);
      setCidadeId(personToEdit.cidade_id);
      setTipoId(personToEdit.tipo_id);
      setOpen(true);
    }
  }, [personToEdit]);

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Adicionar Pessoa
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Adicionar Pessoa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Nome do Usuário"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="address"
            name="address"
            label="Endereço"
            type="text"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="rg"
            name="rg"
            label="RG"
            type="text"
            fullWidth
            variant="standard"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="cidade_id"
            name="cidade_id"
            label="cidade_id"
            type="number"
            fullWidth
            variant="standard"
            value={cidadeId?.toString()}
            onChange={(e) => setCidadeId(Number(e.target.value))}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="tipo_id"
            name="tipo_id"
            label="Tipo"
            type="text"
            fullWidth
            variant="standard"
            value={tipoId?.toString()}
            onChange={(e) => setTipoId(Number(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Adicionar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PersonDialog;
