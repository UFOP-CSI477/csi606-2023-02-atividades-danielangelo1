import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { BASEAPI_URL } from "../../utils/API";
import axios from "axios";
import { MenuItem } from "@mui/material";
import { IState } from "../../pages/estados/Estados";

interface StateDialogProps {
  stateToEdit: IState | null;
  onSave: (state: IState) => void;
  onClose: () => void;
}

const StateDialog = ({ stateToEdit, onSave, onClose }: StateDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [stateName, setStateName] = React.useState<string>("");
  const [uf, setUf] = React.useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const state = {
      name: stateName,
      uf: uf.toUpperCase(),
      _id: stateToEdit?._id ? stateToEdit._id : undefined,
    };
    onSave(state);
    handleClose();
  };

  React.useEffect(() => {
    if (stateToEdit) {
      setStateName(stateToEdit.name);
      setUf(stateToEdit.uf);
      setOpen(true);
    }
  }, [stateToEdit]);

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Adicionar estado
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Adicionar Estado</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="uf"
            label="UF"
            type="text"
            fullWidth
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={handleClose}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default StateDialog;
